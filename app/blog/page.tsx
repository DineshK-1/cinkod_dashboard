import BlogTable from "@/components/Blogs/BlogTable";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="flex flex-col gap-4 p-24 bg-background min-h-screen">
      <div className="flex w-full justify-between">
        <h1 className="text-primary text-2xl font-semibold">Blog</h1>
        <Link
          href="/blog/create"
          className="border-[2px] border-gray-800 px-8 py-2 w-fit text-gray-300"
        >
          Create Blog
        </Link>
      </div>
      <BlogTable />
    </main>
  );
}
