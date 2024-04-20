export default function CreateEventPage() {
  return (
    <div className="flex flex-col gap-4 bg-background min-h-screen p-24">
      <h1 className="text-primary font-semibold text-2xl">Create Event</h1>

      <form action="POST" className="w-full flex flex-col gap-4">
        <div className="flex w-full h-32 border border-zinc-800 text-zinc-500 items-center justify-center select-none cursor-pointer">
          Upload Banner Image
        </div>

        <div className="grid grid-cols-4 gap-2 w-full">
          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-zinc-500">Event Name</label>
            <input
              type="text"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
              placeholder="Enter Event Name"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <label className="text-zinc-500">Max Slots</label>
            <input
              type="number"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
              placeholder="Enter Max Slots"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <label className="text-zinc-500">Location</label>
            <input
              type="number"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
              placeholder="Enter Location"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-zinc-500">Event Description</label>
          <textarea
            rows={4}
            className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
            placeholder="Enter Event Description"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">Date</label>
            <input
              type="date"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">Time</label>
            <input
              type="time"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">Duration</label>
            <input
              type="text"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
              placeholder="Enter Duration"
            />
          </div>

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
        </div>

        <button className="bg-primary font-semibold p-3 text-accent hover:bg-transparent hover:text-white transition-all border border-transparent hover:border-primary">
          Create Event
        </button>
      </form>
    </div>
  );
}
