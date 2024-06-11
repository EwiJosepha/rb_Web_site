import Link from "next/link";
import React from "react";
import { HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className="p-10 py-14 lg:mx-20">
            <h1 className="pb-10 text-2xl font-bold">Get in touch with us</h1>

            <div className="mb-10 flex w-full justify-between">
                <div className="space-y-2">
                    <HiOutlineMailOpen className="text-4xl" />
                    <h2 className="text-xl font-medium">Email</h2>
                    <p className="text-sm">
                        Send us an email and we&apos;ll get back to you.
                    </p>
                    <Link href="/" className="text-sm underline">
                        rebaseacademy@gmail.com
                    </Link>
                </div>

                <div className="space-y-2 mobile:max-md:hidden">
                    <HiOutlinePhone className="text-4xl" />
                    <h2 className="text-xl font-medium">Phone</h2>
                    <p className="text-sm">
                        Give us a call and let's have a conversation.
                    </p>
                    <Link href="/" className="text-sm underline">
                        +237 670 063 739
                    </Link>
                </div>

                <div className="space-y-2 mobile:max-md:hidden">
                    <IoLocationSharp className="text-4xl" />
                    <h2 className="text-xl font-medium">Location</h2>
                    <p className="text-sm">
                        Give us a call and let&apos;s have a conversation.
                    </p>
                    <Link href="/" className="text-sm underline">
                        Montee Jouvence - Yaounde
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <GrInstagram className="text-2xl" />
                    <FaTwitter className="text-2xl" />
                    <FaFacebookF className="text-2xl" />
                    <FaLinkedin className="text-2xl" />
                    <FaTiktok className="text-2xl" />
                </div>
                <div className="mr-32 space-x-10 text-sm font-medium mobile:max-md:hidden lg:flex">
                    <Link
                        href="/about-us"
                        className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block "
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
                        href="/contact-us"
                        className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
