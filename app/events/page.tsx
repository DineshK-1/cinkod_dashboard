export default function EventsPage() {
  return (
    <div className="flex flex-col gap-4 p-24 bg-background min-h-screen">
      <h1 className="text-primary text-2xl">Events</h1>
      <div className="flex w-full justify-end">
        <button className="border border-gray-800 rounded-xl px-6 py-2 w-fit text-gray-300">
          Create Event
        </button>
      </div>
      <div className="flex"></div>
    </div>
  );
}
