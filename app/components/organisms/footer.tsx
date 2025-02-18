import Link from "next/link";
import React from "react";
import { HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className=" bg-purple py-8  text-white mobile:max-md:px-5 ipad:px-2 md:px-8 lg:px-20 ">
      <h1 className="pb-10 text-2xl font-bold">Get in touch with us</h1>

      <div className="mb-10 flex w-full flex-col justify-between space-y-8 md:flex-row md:space-y-0">
        <div className="space-y-2">
          <HiOutlineMailOpen className="text-4xl" />
          <h2 className="text-lg font-medium">Email</h2>
          <p className="text-lg">
            Send us an email and we&apos;ll get back to you.
          </p>
          <Link href="/" className="text-lg underline md:pr-2">
            rebaseacademy@gmail.com
          </Link>
        </div>

        <div className="space-y-2">
          <HiOutlinePhone className="text-4xl" />
          <h2 className="text-lg font-medium">Phone</h2>
          <p className="text-lg">
            Give us a call and let&apos;s have a conversation.
          </p>
          <Link href="/" className="text-lg underline">
            +237 670 063 739
          </Link>
        </div>

        <div className="space-y-2">
          <IoLocationSharp className="text-4xl" />
          <h2 className="text-lg font-medium">Location</h2>
          <p className="text-lg">
            Give us a call and let&apos;s have a conversation.
          </p>
          <Link href="/" className="text-lg underline">
            Montee Jouvence - Yaounde
          </Link>
        </div>
        <div className=" gap:2 text-lg font-medium  ">
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

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <GrInstagram className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <FaFacebookF className="text-2xl" />
          <FaLinkedin className="text-2xl" />
          <FaTiktok className="text-2xl" />
        </div>
      </div>
      {/*
        <div className=" space-x-10 text-sm font-medium mobile:max-md:hidden lg:flex ">
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
      </div> */}
    </div>
  );
};

export default Footer;
