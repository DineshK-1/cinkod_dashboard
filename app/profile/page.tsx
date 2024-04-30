import ProfileHeader from "@/components/Profile/ProfileHeader";
import Image from "next/image";
import ProfileForm from "@/components/Profile/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-4 bg-background min-h-screen p-24">
      <ProfileHeader />
      <div className="profilegrid grid grid-cols-4 gap-4">
        <div className="profilenav">
          <p>Profile and COllege information</p>
        </div>
        <div className="col-span-3 flex flex-col gap-2">
          <h2 className="text-2xl"> Profile Information </h2>
          <div className="pfp flex flex-row gap-12 items-center m-6">
            <Image src="" alt="profile" width={80} height={80} />
            <button className="bg-accent text-black p-3 rounded-2xl hover:scale-110 transition-all">
              Change pfp
            </button>
            <button className="hover:text-red-600">Delete</button>
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
        </div>
      </div>
    </div>
  );
}
