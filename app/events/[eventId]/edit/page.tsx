"use client";
import TagInput from "@/components/CreateEvent/TagInput.component";
import { useUser } from "@/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
interface FormData {
  bannerImage: File | null;
  eventName: string;
  maxSlots: string;
  location: string;
  eventDescription: string;
  fromDateTime: string;
  toDateTime: string;
  tags: string[];
  speakers: string[];
  agenda: string[];
  gallery: File[];
}
export default function EditEventPage0({
  params
}: {
  params: { eventID: string };
}) {
  const { user } = useUser();

  const [formData, setFormData] = useState<FormData>({
    bannerImage: null,
    eventName: "Dummy Event Name",
    maxSlots: "100",
    location: "New York, USA",
    eventDescription: "This is a dummy event description.",
    fromDateTime: "2023-05-01T10:00:00",
    toDateTime: "2023-05-01T18:00:00",
    tags: ["dummy", "tag1", "tag2"],
    speakers: ["John Doe", "Jane Smith"],
    agenda: [
      "10:00 AM - Welcome",
      "11:00 AM - Keynote",
      "12:00 PM - Lunch Break"
    ],
    gallery: []
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const [speakers, setSpeakers] = useState<string>("");
  const [agenda, setAgenda] = useState<string>("");
  // const [gallery, setGallery] = useState<File[]>("");
  const [tags, setTags] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.post(`/api/db/events/${params.eventID}`, null, {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`
          }
        });
        setFormData(res.data.event);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch event");
      }
      setIsLoading(false);
    };

    fetchData();
  }, [params.eventID, user?.accessToken]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData && user?.accessToken) {
      try {
        await axios.put(`/api/db/events/${params.eventID}`, formData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.accessToken}`
          }
        });
        router.push("/events");
        toast.success("Event updated successfully");
      } catch (error) {
        console.error(error);
        toast.error("An error occurred");
      }
    }
  };

  const handleBannerImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, bannerImage: e.target.files[0] });
    }
  };

  const handleSpeakerAdd = () => {
    if (speakers && formData) {
      setFormData({ ...formData, speakers: [...formData.speakers, speakers] });
      setSpeakers("");
    }
  };

  const handleAgendaAdd = () => {
    if (agenda && formData) {
      setFormData({ ...formData, agenda: [...formData.agenda, agenda] });
      setAgenda("");
    }
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData({ ...formData, gallery: [...formData.gallery, ...files] });
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-background min-h-screen p-24">
      <h1 className="text-primary font-semibold text-2xl">Create Event</h1>

      <form
        action="POST"
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4"
      >
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
              value={formData.eventName}
              onChange={(e) =>
                setFormData({ ...formData, eventName: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <label className="text-zinc-500">Max Slots</label>
            <input
              type="number"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
              placeholder="Enter Max Slots"
              value={formData.maxSlots}
              onChange={(e) =>
                setFormData({ ...formData, maxSlots: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <label className="text-zinc-500">Location</label>
            <input
              type="text"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
              placeholder="Enter Location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-zinc-500">Event Description</label>
          <textarea
            rows={4}
            className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
            placeholder="Enter Event Description"
            value={formData.eventDescription}
            onChange={(e) =>
              setFormData({ ...formData, eventDescription: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">From</label>
            <input
              type="datetime-local"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
              value={formData.fromDateTime}
              onChange={(e) =>
                setFormData({ ...formData, fromDateTime: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500">To</label>
            <input
              type="datetime-local"
              className="bg-transparent border-[2px] border-zinc-800 p-3 outline-none w-full"
              value={formData.toDateTime}
              onChange={(e) =>
                setFormData({ ...formData, toDateTime: e.target.value })
              }
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
                  value={speakers}
                  onChange={(e) => setSpeakers(e.target.value)}
                />
                <span
                  className="p-4 px-6 bg-zinc-700 cursor-pointer select-none"
                  onClick={handleSpeakerAdd}
                >
                  +
                </span>
              </div>

              {formData.speakers.map((speaker, index) => (
                <div key={index} className="flex p-3 w-full bg-zinc-600">
                  {speaker}
                </div>
              ))}
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
                  value={agenda}
                  onChange={(e) => setAgenda(e.target.value)}
                />
                <span
                  className="p-4 px-6 bg-zinc-700 cursor-pointer select-none"
                  onClick={handleAgendaAdd}
                >
                  +
                </span>
              </div>
              {formData.agenda.map((agenda, index) => (
                <div key={index} className="flex p-3 w-full bg-zinc-600">
                  {agenda}
                </div>
              ))}
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
