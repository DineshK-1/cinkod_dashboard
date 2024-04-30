"use client";

import ProfileHeader from "@/components/Profile/ProfileHeader";
import Image from "next/image";
import ProfileForm from "@/components/Profile/ProfileForm";
import { useState } from "react";

export default function ProfilePage() {
  const [infostate, setinfostate] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4 bg-background min-h-screen p-24">
      <ProfileHeader />
      <div className="profilegrid grid grid-cols-4 gap-4">
        <div className="profilenav flex flex-col gap-6">
          <p className="cursor-pointer" onClick={() => setinfostate(0)}>
            Profile information
          </p>
          <p className="cursor-pointer" onClick={() => setinfostate(1)}>
            College information
          </p>
        </div>
        <div className="col-span-3 flex flex-col gap-2">
          {infostate === 0 && (
            <>
              <h2 className="text-2xl"> Profile Information </h2>
              <div className="pfp flex flex-row gap-12 items-center m-6">
                <Image src="" alt="profile" width={80} height={80} />
                <button className="bg-accent text-black p-3 rounded-2xl hover:scale-110 transition-all">
                  Change pfp
                </button>
                <button className="text-red-600 hover:text-white">
                  Delete
                </button>
              </div>
              <div className="detailsform flex flex-col mx-8">
                <ProfileForm />
              </div>
              <div className="moredeets flex flex-row mx-16 my-6 justify-between">
                <div className="flex flex-col gap-2">
                  IsAdmin:
                  <p>Yes</p>
                </div>
                <div className="flex flex-col gap-2">
                  IsLead:
                  <p>Yes</p>
                </div>
                <div className="flex flex-col gap-2">
                  IsCoreTeam:
                  <p>Yes</p>
                </div>
                <div className="flex flex-col gap-2">
                  IsMember:
                  <p>Yes</p>
                </div>
              </div>
            </>
          )}
          {infostate === 1 && (
            <>
              <h2></h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
