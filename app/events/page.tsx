"use client";
import { CollegeEvent } from "@/@types";
import EventCard from "@/components/Events/EventCard";
import { useUser } from "@/store";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EventsPage() {
  const [events, setEvents] = useState<CollegeEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { user } = useUser();

  useEffect(() => {
    if (user?.accessToken === undefined) return;
    toast.loading("Fetching Events", { duration: 2000 });
    const fetchEvents = async () => {
      return await axios.post(
        "/api/db/events/fetch",
        {},
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`
          }
        }
      );
    };

    fetchEvents()
      .then((res) => {
        setEvents(res.data.events);
        setLoading(false);
        toast.success("Events fetched successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.accessToken]);

  return (
    <main className="flex flex-col gap-4 p-24 bg-background min-h-screen">
      <div className="flex w-full justify-between">
        <h1 className="text-primary text-2xl font-semibold">Events</h1>
        <Link
          href="/events/create"
          className="border-[2px] border-gray-800 px-8 py-2 w-fit text-gray-300"
        >
          Create Event
        </Link>
      </div>
      <div className="flex">
        <div className="bg-zinc-800 p-4 rounded-xl text-sm">
          <span>Total Events: 400</span>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center w-full h-32">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
        </div>
      )}
    </main>
  );
}
