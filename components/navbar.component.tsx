"use client";
import { useUser } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const loggedInNavbar = [
    { name: "Events", href: "/events" },
    { name: "Members", href: "/members" },
    { name: "Logout", href: "/auth/logout" },
  ];

  const { user } = useUser();

  const loggedOutNavbar = [{ name: "Login", href: "/auth/login" }];
  return (
    <nav className="w-full bg-transparent fixed top-0 left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-24">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl text-cyan-600 font-bold ">CINKOD</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <span className="material-symbols-outlined">close</span>
                ) : (
                  <span className="material-symbols-outlined">menu</span>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 flex items-center justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-6 md:p-0 block gap-4" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex gap-6">
              {user
                ? loggedInNavbar.map((link) => (
                    <li key={link.name} className="">
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))
                : loggedOutNavbar.map((link) => (
                    <li key={link.name} className="">
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
