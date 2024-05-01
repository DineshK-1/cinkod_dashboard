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
              <h2 className="text-2xl">College Information</h2>
              <div className="clginfo grid grid-cols-4 gap-8 m-8">
                <div className="name col-span-4 text-xl font-bold">
                  COLLEGE NAME
                </div>
                <div className="col-span-2 ">
                  <div className="email flex-col flex">
                    <p className="text-lg font-semibold">College Email:</p>
                    <p className="mx-1">email@emial.com</p>
                  </div>
                </div>
                <div className="col-span-2 ">
                  <div className="leadid flex-col flex">
                    <p className="text-lg font-semibold">Lead ID:</p>
                    <p className="mx-1">#161</p>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="desc flex-col flex">
                    <p className="text-lg font-semibold">
                      College Description:
                    </p>
                    <p className="m-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
                <div className="col-span-4 items-center">
                  <p className="font-semibold">Members Count:</p>
                  <p className="text-2xl">1,728</p>
                </div>
                <div className="col-span-4 flex flex-col gap-4">
                  <p className="font-semibold text-lg"> Gallery: </p>
                  <div className="flex gap-2">
                    <span className="w-32 h-32 bg-slate-600"></span>
                    <span className="w-32 h-32 bg-slate-600"></span>
                    <span className="w-32 h-32 bg-slate-600"></span>
                    <span className="w-32 h-32 bg-slate-600"></span>
                    <span className="w-32 h-32 bg-slate-600"></span>
                    <span className="w-32 h-32 bg-slate-600"></span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
