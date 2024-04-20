import Navbar from "@/components/navbar.component";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10 w-screen">
      <div className="flex">
        <Navbar />
      </div>
    </main>
  );
}
