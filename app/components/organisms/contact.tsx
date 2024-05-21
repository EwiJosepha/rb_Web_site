import React from "react";
import Image from "next/image";
import contactImg from "@/public/assets/images/contact_us_rebase_photo_720.png";
// import { playfair } from "@/public/fonts";

// interface FormData {
//     name?: string;
//     email?: string;
//     text?: string

// }

function ContactUs() {
    // const SubmitForm = (formdata:FormData) => {
    //     // const method = {
    //     //     method:"POST",
    //     //     "Content-Type":"json-stringify"
    //     // }

    //     fetch("http://localhost:3000/post/create/category/",
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application-json"
    //             },
    //             // body:JSON.stringify()
    //         })
    //         console.log("formdata", formdata);

    // }

    return (
        <div>
            <div className=" grid grid-cols-2 justify-center gap-20 px-20 pt-20  align-middle  mobile:max-md:mr-[-9rem] mobile:max-md:grid-cols-1 mobile:max-md:pl-5 mobile:max-md:pr-5">
                <div className=" h-[540px] mobile:max-md:h-[360px]">
                    <div className=" h-[535px]">
                        <Image
                            src={contactImg}
                            alt="our blog"
                            className=" h-[535px] mobile:max-md:h-[355px]"
                        />
                    </div>
                </div>
                <div className=" ">
                    <h1
                        className={`   mobile:max-md: text-6xl mobile:max-md:text-3xl`}
                    >
                        Contact Us
                    </h1>
                    <span className=" font-sans text-lg">
                        Questions, worries, feedback? Ask away!
                    </span>
                    <div className=" pt-8">
                        <form className="gap-7">
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
                                Your Email{" "}
                                <span className=" text-2xl text-orange-500">
                                    *
                                </span>
                            </span>
                            <input
                                className="mb-6  w-full border px-3 py-2"
                                style={{ background: "#efefef" }}
                                type="email"
                                name="email"
                                placeholder="Your Email"
                            />
                            <span className=" font-sans font-medium">
                                Message
                                <span className=" text-2xl text-orange-500">
                                    *
                                </span>
                            </span>
                            <textarea
                                className=" mb-6 w-full px-4 py-8"
                                style={{ background: "#efefef" }}
                                placeholder=""
                                name="text"
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
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
