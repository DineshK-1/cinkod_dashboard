"use client";

import { useState } from "react";

export default function BlogAnalytics() {
  const [createBlog, setCreateBlog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    visibility: "public",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      content: "",
      visibility: "public",
    });
    setCreateBlog(false);
  };

  const closeModal = () => {
    setCreateBlog(false);
  };

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
        onClick={() => setCreateBlog(!createBlog)}
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
      {createBlog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-70">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10">
            <h2 className="text-lg font-semibold mb-4 text-black">
              Create New Blog
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-black">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block mb-2 text-black">
                  Content:
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="visibility" className="block mb-2 text-black">
                  Visibility:
                </label>
                <select
                  id="visibility"
                  name="visibility"
                  value={formData.visibility}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-[#f1ec21] text-black px-4 py-2 rounded-md font-semibold"
              >
                Create
              </button>
            </form>
            <button
              className="mt-4 text-black text-sm font-semibold"
              onClick={closeModal}
            >
              <span className="material-icons-outlined">close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
