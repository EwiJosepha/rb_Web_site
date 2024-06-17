"use client";

import React from "react";
import Image from "next/image";
import contactImg from "@/public/assets/images/contact_us_rebase_photo_720.png";
import { playfair } from "@/public/fonts";
import { getMessage } from "@/app/servers/getcontact-message";
import Notification from "../../lib/toast";;
import { toast } from "react-toastify";
import Link from "next/link";

async function handleSubmit(formData: FormData) {
  const notify = () => toast.success("Message send successfully");
  const failed = () => toast.warning("Failed to send Message please try Again");

  const name: FormDataEntryValue | null = formData.get("name");
  const email: FormDataEntryValue | null = formData.get("email");
  const text: FormDataEntryValue | null = formData.get("text");
  console.log("values",{name, email, text});
  
  if(!name && !email && !text){
    failed()
  }
   await getMessage(name, email, text);
  notify();
  console.log("heyggtyyuuujd");
  
}

function ContactUs() {
    console.log("hey");
    
  return (
    <div className="flex w-full justify-center p-2">
      <div className="grid grid-cols-1 place-content-center  gap-y-10 md:grid-cols-2  md:gap-10 lg:max-w-7xl">
        <div className="h-80 md:h-[540px] ">
          <div className="relative h-full">
            <Image
              src={contactImg}
              alt="our blog"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className=" ">
          <h1
            className={` ${playfair.className}  mobile:max-md: text-6xl mobile:max-md:text-3xl`}
          >
            Contact Us
          </h1>
          <span className=" font-sans text-lg">
            Questions, worries, feedback? Ask away!
          </span>
          <div className=" pt-8">
            <form action={handleSubmit} className="gap-7">
              <span className="font-sans font-medium">
                Full Name
                <span className=" mr-[0.45rem] text-2xl text-orange-500">
                  *
                </span>
              </span>
              <input
                className=" mb-6 w-full px-3 py-2"
                style={{ background: "#efefef" }}
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <span className=" pb-5 font-sans font-medium">
                Your Email <span className=" text-2xl text-orange-500">*</span>
              </span>
              <input
                className="mb-6  w-full border px-3 py-2"
                style={{ background: "#efefef" }}
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <span className=" font-sans font-medium">
                Message
                <span className=" text-2xl text-orange-500">*</span>
              </span>
              <textarea
                className=" mb-6 w-full px-4 py-8"
                style={{ background: "#efefef" }}
                placeholder=""
                name="text"
                required
              ></textarea>
              {/* <Link href=""> */}
                <button
                  className=" p-2 px-4 text-white"
                  style={{ background: "#6220ec" }}
                  type="submit"
                >
                  Submit
                </button>
              {/* </Link> */}
            </form>
          </div>
          <Notification />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
