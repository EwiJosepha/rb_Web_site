"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../molecules/button";
import rebaseLogo from "@/public/svgs/Rebase logo (1).svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const routes = [
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/programs",
    label: "Programs",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-10 flex w-full justify-between border-b bg-white px-3  py-6  shadow-lg md:px-20">
      <Link href="/" className=" h-8 w-40 lg:ml-0 xl:h-16 xl:w-60">
        <Image
          src={rebaseLogo}
          alt="sectionimage"
          className="h-full w-full object-cover"
        />
      </Link>

      <nav
        className={`fixed top-0 -mx-3  flex min-w-full flex-col items-center gap-10 bg-white p-5 duration-300  md:static md:min-w-[unset] md:flex-row md:p-0 ${isOpen ? "top-4" : "top-[-100%]"}`}
      >
        {routes.map(route => (
          <Link
            key={route.href}
            href={route.href}
            className={`text-lg font-medium transition-colors ${pathname === route.href ? "border-b-4 border-orange-500 text-orange-500" : ""}`}
            onClick={handleLinkClick}
          >
            {route.label}
          </Link>
        ))}
        <Link
          href={"/apply-now"}
          className="w-full translate-x-0 bg-orange-500 px-10  py-4 text-center   font-bold  text-white transition-transform duration-500 hover:translate-x-2 hover:cursor-pointer mobile:max-md:px-2 mobile:max-md:py-1 md:hidden"
          onClick={handleLinkClick}
        >
          Apply Now
        </Link>
        <FaTimes
          className="absolute right-0 top-0 z-20 m-4 cursor-pointer md:hidden"
          onClick={() => setIsOpen(false)}
        />
      </nav>

      <div>
        <Button
          className="hidden translate-x-0 bg-orange-500 px-10 py-4 font-bold   text-white  transition-transform duration-500 hover:translate-x-2 hover:cursor-pointer mobile:max-md:px-2 mobile:max-md:py-1 md:block"
          type="button"
        >
          Apply Now
        </Button>

        <FaBars
          className="cursor-pointer md:hidden"
          onClick={() =>
            setIsOpen(prev => (pathname !== routes[0].href ? !prev : prev))
          }
        />
      </div>
    </header>
  );
}
