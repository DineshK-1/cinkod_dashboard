"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="font-mono">
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between p-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl text-white font-bold ">CINKOD</h2>
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
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <nav className="h-screen md:h-auto items-center justify-center md:flex ">
                <p className="pb-6 text-xl text-white py-2 md:px-6 text-center md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </p>
                <p className="pb-6 text-xl text-white py-2 px-6 text-center md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </p>
                <p className="pb-6 text-xl text-white py-2 px-6 text-center md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </p>
                <p className="pb-6 text-xl text-white py-2 px-6 text-center md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </p>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
