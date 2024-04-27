import TagInput from "@/components/CreateEvent/TagInput.component";

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

        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">From</label>
            <input
              type="datetime-local"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">To</label>
            <input
              type="datetime-local"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
            />
          </div>
        </div>
        <TagInput />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">Speakers</label>
            <div className="flex flex-col gap-2 max-h-72 overflow-y-auto">
              <div className="flex gap-2 pr-2">
                <input
                  type="text"
                  className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
                  placeholder="Add Speaker"
                />
                <span className="p-4 px-6 bg-zinc-700 cursor-pointer select-none">
                  +
                </span>
              </div>

              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">Agenda</label>
            <div className="flex flex-col gap-2 max-h-72 overflow-y-auto">
              <div className="flex gap-2 pr-2">
                <input
                  type="text"
                  className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
                  placeholder="Add Entry"
                />
                <span className="p-4 px-6 bg-zinc-700 cursor-pointer select-none">
                  +
                </span>
              </div>

              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
              <div className="flex p-3 w-full bg-zinc-600">Test Entry</div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">Event Fee</label>
            <input
              type="number"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
              placeholder="Enter Event Fee"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">Event Type</label>
            <select className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full">
              <option value="Webinar">Webinar</option>
              <option value="Workshop">Workshop</option>
              <option value="Seminar">Seminar</option>
            </select>
          </div> */}
        </div>

        <div className="flex">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">Gallery</label>
            <input
              type="file"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
              placeholder="Enter Event Fee"
            />
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
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-primary font-semibold p-3 text-accent hover:bg-transparent hover:text-white transition-all border border-transparent hover:border-primary">
            Create Event
          </button>
          <button className="bg-primary font-semibold p-3 text-accent hover:bg-transparent hover:text-white transition-all border border-transparent hover:border-primary">
            Publish Event
          </button>
        </div>
      </form>
    </div>
  );
}
