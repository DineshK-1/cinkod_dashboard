"use client";
import BlogTable from "@/components/Blogs/BlogTable";
import { useUser } from "@/store";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Blog() {
  const { user } = useUser();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.accessToken === undefined) return;
    toast.loading("Fetching Blogs", { duration: 2000 });
    const response = axios
      .post(
        "/api/db/blogs/fetch",
        {},
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`
          }
        }
      )
      .then((res) => {
        setBlogs(res.data.blogs);
      })
      .finally(() => {
        setLoading(false);
        toast.success("Blogs fetched successfully");
      });
  }, [user?.accessToken]);

  console.log(blogs);
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
      <BlogTable loading={loading} blogs={blogs} />
    </main>
  );
}
