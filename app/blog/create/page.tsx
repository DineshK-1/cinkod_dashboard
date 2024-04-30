"use client";
import TextEditor from "@/components/TipTap/index";
import TagInput from "@/components/CreateEvent/TagInput.component";
import axios from "axios";
import { useState } from "react";
import { useUser } from "@/store";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
interface FormData {
  blogTitle: string;
  blogContent: string;
  blogAuthor: string;
  tags: string[];
}
export default function CreateBlogPage() {
  const { user } = useUser();
  const [formData, setFormData] = useState<FormData>({
    blogTitle: "Name",
    blogContent: `
<h1>
Sample Heading
</h1>
<p>Edit the content here</>
`,
    blogAuthor: "John",
    tags: ["dummy", "tag1", "tag2"]

    // bannerImage: null,
    // eventName: "Dummy Event Name",
    // maxSlots: "100",
    // location: "New York, USA",
    // eventDescription: "This is a dummy event description.",
    // fromDateTime: "2023-05-01T10:00:00",
    // toDateTime: "2023-05-01T18:00:00",
    // tags: ["dummy", "tag1", "tag2"],
    // speakers: ["John Doe", "Jane Smith"],
    // agenda: ["10:00 AM - Welcome", "11:00 AM - Keynote", "12:00 PM - Lunch Break"],
    // gallery: [],
  });

  const router = useRouter();

  const handleSubmit = () => {
    toast.loading("Creating Blog", { duration: 2000 });
    axios
      .post("/api/db/blogs/publish", formData, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      })
      .then((res) => {
        toast.success("Blog created successfully");
        router.push(`/blog`);
      })
      .catch((error) => {
        toast.error("Failed to create blog");
      });
  };

  const handleContentUpdate = (content: string) => {
    setFormData({ ...formData, blogContent: content });
  };

  return (
    <div className="flex flex-col gap-4 bg-background min-h-screen p-24">
      <h1 className="text-primary font-semibold text-2xl">Create A Blog</h1>

      <form
        onSubmit={(e: any) => {
          e.preventDefault();
        }}
        className="w-full flex flex-col gap-4"
      >
        <div className="flex w-full h-32 border border-zinc-800 text-zinc-500 items-center justify-center select-none cursor-pointer">
          Upload Banner Image
        </div>
        <div className="grid grid-cols-4 gap-2 w-full">
          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-zinc-500">Blog Title</label>
            <input
              type="text"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
              placeholder="Enter Blog Title:"
              value={formData.blogTitle}
              onChange={(e) =>
                setFormData({ ...formData, blogTitle: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-zinc-500">Blog Content</label>
          <TextEditor
            content={formData.blogContent}
            setContent={handleContentUpdate}
          />
        </div>
        <TagInput />
        <div className="grid grid-cols-1 gap-2">
          <button
            className="bg-primary font-semibold p-3 text-accent hover:bg-transparent hover:text-white transition-all border border-transparent hover:border-primary rounded-xl"
            onClick={handleSubmit}
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
}
