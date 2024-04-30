"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
}

export default function ProfileForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "name",
    phone: "+91 98989 89898",
    email: "email@email.com"
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form action="POST" onSubmit={handleSubmit}>
      <div className="grid grid-cols-4 gap-6 w-full">
        <div className="flex flex-col gap-2 col-span-2">
          <label>Name:</label>
          <input
            type="text"
            className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
            placeholder="Enter Name:"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          <label>Phone:</label>
          <input
            type="text"
            className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
            placeholder="Enter Phone:"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2 col-span-4">
          <label>Email:</label>
          <input
            type="text"
            className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
            placeholder="Enter Email:"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      </div>
    </form>
  );
}
