export default function TagInput() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-zinc-500">Tags</label>
      <div className="flex gap-2 w-full">
        <input
          type="text"
          className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full min-w-64"
          placeholder="Press Enter To Add Tag"
        />

        <div className="flex text-nowrap items-center gap-2 max-w-full">
          <span className="bg-zinc-800 text-xs p-3 px-5">Tag</span>
          <span className="bg-zinc-800 text-xs p-3 px-5">Tag</span>
          <span className="bg-zinc-800 text-xs p-3 px-5">Tag</span>
          <span className="bg-zinc-800 text-xs p-3 px-5">Tag</span>
          <span className="bg-zinc-800 text-xs p-3 px-5">Tag</span>
          <span className="bg-zinc-800 text-xs p-3 px-5">Tag</span>
          <span className="bg-zinc-800 text-xs p-3 px-5">Tag</span>
          <span className="bg-zinc-800 text-xs p-3 px-5">Tag</span>
          <span className="bg-zinc-800 text-xs p-3 px-5">Tag</span>
          <span className="bg-zinc-800 text-xs p-3 px-5">Tag</span>
        </div>
      </div>
    </div>
  );
}
