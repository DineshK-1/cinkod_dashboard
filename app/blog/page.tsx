"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function BlogAnalytics() {
  const [createBlog, setCreateBlog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    visibility: "public",
  });

  const blogdata = [
    {
      name: "b1",
      content: "blalalalalalal",
      visibility: "public",
      date: "20/3/24",
      views: 2000,
    },
    {
      name: "b2",
      content: "blalalalalalal",
      visibility: "private",
      date: "20/3/25",
      views: 1500,
    },
    {
      name: "b3",
      content: "blalalalalalal",
      visibility: "public",
      date: "20/3/26",
      views: 1800,
    },
    {
      name: "b4",
      content: "blalalalalalal",
      visibility: "private",
      date: "20/3/27",
      views: 2200,
    },
  ];

  return (
    <div className="flex flex-col m-20 items-center gap-2">
      <h1>BLOGS</h1>
      <button
        className="bg-[#f1ec21] text-black px-6 py-3 rounded-2xl font-semibold"
        onClick={redirect("/blog/create")}
      >
        + Create Blog
      </button>
      <table className="text-center rounded-2xl m-10 table-auto w-full">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Blog</th>
            <th>Visibility</th>
            <th>Publish Date</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {blogdata.map((blog, index) => (
            <tr
              key={index}
              className="hover:text-[#f1ec21] rounded-2xl border-gray-300"
              style={{
                borderBottom:
                  index === blogdata.length - 1 ? "none" : "1px solid #e5e7eb",
              }}
            >
              <td>
                <input type="checkbox" />
              </td>
              <td className="flex flex-col">
                <p>{blog.name}</p>
                <p>{blog.content}</p>
              </td>
              <td>{blog.visibility}</td>
              <td>{blog.date}</td>
              <td>{blog.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
