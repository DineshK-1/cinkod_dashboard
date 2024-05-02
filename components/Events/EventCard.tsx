import Link from "next/link";

const EventCard = ({ event }: { event: any }) => {
  return (
    <div className="bg-zinc-800 p-6 rounded-xl text-sm flex flex-col gap-4">
      <span className="bg-gray-500 w-full h-56"></span>
      <span className="text-xl">{event.name}</span>
      <span className="text-gray-300">{event.description}</span>
      <div className="flex justify-between w-full gap-2">
        <Link
          href={`/events/${event.id}/edit`}
          className="bg-accent font-semibold p-3 text-black hover:bg-transparent hover:text-white transition-all border border-transparent hover:border-accent w-full text-center"
        >
          Edit Details
        </Link>
        <button className="bg-accent font-semibold p-3 text-black hover:bg-transparent hover:text-white transition-all border border-transparent hover:border-accent w-full">
          View Stats
        </button>
      </div>
      <button className="bg-primary font-semibold p-3 text-black hover:bg-transparent hover:text-white transition-all border border-transparent hover:border-primary">
        View Page
      </button>
    </div>
  );
};

export default EventCard;
