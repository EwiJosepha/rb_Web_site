"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../molecules/button";
// import rebaselogo from "@/public/assets/Rebase logo.svg"
import rebaseLogo from "@/public/svgs/Rebase logo (1).svg";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" fixed left-0 right-0 top-0 z-10 bg-white shadow-lg ">
            <div className="mx-auto max-w-7xl py-4 md:flex md:items-center md:justify-between">
                <>
                    <div className="flex max-w-full items-center justify-between py-3 md:block md:py-5 lg:block">
                        <Link href="/" className="h-8 w-40 ">
                            <div className="xl:w-50 h-8 w-40 xl:h-16">
                                <Image
                                    src={rebaseLogo}
                                    alt="sectionimage"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </Link>

                        <div className="block md:hidden lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-black-500 hover:text-black-400 flex items-center rounded px-3 py-2"
                            >
                                {isOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </>
                <div
                    className={`block w-full md:flex md:w-auto md:items-center  lg:flex lg:w-auto lg:items-center ${isOpen ? "block" : "hidden"} top-32 z-10  bg-white`}
                >
                    <div className="mobile:max-md: flex-none space-x-10 space-y-6 text-center text-base md:flex md:space-y-0 lg:flex-row lg:space-y-0 xl:text-lg">
                        <Link
                            href="/about"
                            className="text-white-200 mr-4 block mobile:max-md:ml-10 lg:mt-0 lg:inline-block"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/programs"
                            className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                        >
                            Programs
                        </Link>
                        <Link
                            href="/blog"
                            className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className=" ml-5 mobile:max-md:ml-10 mobile:max-md:p-4 mobile:max-md:text-center">
                        <Link href="/apply">
                            <Button
                                className="border-4 border-purple bg-transparent text-sm text-purple"
                                type="button"
                            >
                                Apply Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
