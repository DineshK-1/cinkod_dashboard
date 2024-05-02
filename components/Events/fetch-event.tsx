// app/fetch-event.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function fetchEvent(eventID: string) {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401
    });
  }

  try {
    const res = await fetch(`/api/db/events/${eventID}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch event");
    }

    const data = await res.json();
    return data.event;
  } catch (error) {
    console.error(error);
    return null;
  }
}
