const RoleBlob = ({ role, color }: { role: string; color: string }) => {
  return (
    <div
      className={`flex bg-[${color}] bg-[#fff000] font-bold text-xs w-fit text-black px-6 py-2 rounded-lg`}
    >
      {role}
    </div>
  );
};

export default RoleBlob;
