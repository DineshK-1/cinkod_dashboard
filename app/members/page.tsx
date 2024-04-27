import RoleBlob from "@/components/role_blob";

export default function MembersPage() {
  return (
    <main className="flex gap-4 min-h-screen flex-col bg-background p-24">
      <h1 className="text-2xl text-primary font-semibold">Members</h1>

      <input
        type="text"
        className="w-fit p-4 bg-transparent border-[2px] text-sm outline-none border-zinc-800"
        placeholder="Search members"
      />

      <div className="flex gap-2">
        <div className="flex bg-zinc-800 p-4 rounded-xl text-sm">
          <span>Total Members: 400</span>
        </div>
      </div>
      <table className="">
        <thead>
          <tr className="border-[2px] border-zinc-800">
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Joined By</th>
            <th>Special Roles</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-[2px] border-zinc-800 text-center">
            <td>John Doe</td>
            <td>test@email.com</td>
            <td>432545</td>
            <td>{new Date().toDateString()}</td>
            <td>
              <div className="flex gap-2 w-full justify-center">
                <RoleBlob role="Core Team" color="#fff" />
                <RoleBlob role="Lead" color="#fff" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
