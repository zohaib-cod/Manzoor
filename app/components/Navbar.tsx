"use client";

import Link from "next/link";

const navLinksTop = [
  "About us",
  "Log in to Teaching courses",
  "Online store",
  "Verify ICD Certificate",
  "Contact us",
];

const navLinksMain = [
  "Our Services",
  "Teaching Qualifications",
  "Exams and Preparation",
  "News & Events",
];

export default function Navbar() {
  return (
    <>
      {/* 🔹 TOP BAR */}
      <div className="bg-[#0d6ea8] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto flex justify-end gap-6 px-4">

          {navLinksTop.map((item, i) => (
            <Link
              key={i}
              href="#"
              className="relative group"
            >
              {item}

              {/* 🔵 Hover Line */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

        </div>
      </div>

      {/* 🔹 MAIN NAVBAR */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

          {/* LOGOS */}
          <div className="flex items-center gap-6">
            <img src="/header-scaled.jpg" className="h-10" />
            {/* <img src="/icd-logo.png" className="h-10" /> */}
          </div>

          {/* MENU */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">

            {navLinksMain.map((item, i) => (
              <Link
                key={i}
                href="#"
                className="relative group"
              >
                {item}

                {/* 🔵 BLUE UNDERLINE */}
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

          </nav>

        </div>
      </header>
    </>
  );
}