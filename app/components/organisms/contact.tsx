"use client";

import React from "react";
import Image from "next/image";
import contactImg from "@/public/assets/images/contact_us_rebase_photo_720.png";
import { playfair } from "@/public/fonts";
import { getMessage } from "../../(website)/servers/getcontact-message";
import Notification from "../../lib/toast";
import { toast } from "react-toastify";

async function handleSubmit(formData: FormData) {
  const notify = () => toast.success("Message send successfully");
  const failed = () =>
    toast.error(
      "Failed to send Message please make sure your fullname is included",
    );
  const name: FormDataEntryValue | null = formData.get("name");
  const email: FormDataEntryValue | null = formData.get("email");
  const text: FormDataEntryValue | null = formData.get("text");

  if (!name || !email || !text) {
    failed();
  } else {
    getMessage(name, email, text);
    notify();
    formData.delete("name");
    formData.delete("email");
    formData.delete("text");
  }
}

function ContactUs() {
  return (
    <div className="flex w-full justify-center pt-24  md:px-10">
      <div className="grid w-[93%] grid-cols-1  place-content-center gap-y-10  md:grid-cols-2  md:gap-10">
        {/* <div className="h-80 md:h-[540px] "> */}
        <div className="relative h-full">
          <Image
            src={contactImg}
            alt="our blog"
            className=" object-cover"
            fill
          />
        </div>
        {/* </div> */}
        <div>
          <h1
            className={` ${playfair.className}  text-6xl mobile:max-md:text-3xl`}
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
              <button
                className=" p-2 px-4 text-white"
                style={{ background: "#6220ec" }}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <Notification />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
