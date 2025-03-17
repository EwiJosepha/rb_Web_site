'use client'
import Image from "next/image";
import apply from "../../../public/assets/images/applynow-1653368202-170667a.webp";
import React from "react";
import { useForm } from "react-hook-form";
import { ApplySchemaTypes } from "@/app/lib/interfaces";
import { toast } from "react-toastify"
import { zodResolver } from "@hookform/resolvers/zod";
import { appllicationInfoSchema } from "@/app/validations/apply-info";
import { createRegistration } from "@/app/servers/applyformData";
import Notification from "@/app/lib/toast";

const ApplyNow: React.FC = () => {

    const notify = () => toast.success("Application submitted successfully");
    const faile =()=> toast.warning("Application unsuccessfull please try again!")
    const form = useForm<ApplySchemaTypes>({
        resolver: zodResolver(appllicationInfoSchema),
        defaultValues: {
            _type: "apply",
        },
    });

    const {
        register,
        formState: { errors },
        reset,
    } = form;
    const onSubmit = async (data: ApplySchemaTypes) => {
        try {
            await createRegistration(data);
            reset();
        } catch (error) {
            faile()
        }
        notify();
    };




    return (
        <div className="relative h-screen my-14 bg-white">
            <div className="h-4/6  w-full">
                <Image
                    src={apply}
                    alt="sectionimage"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="absolute inset-0 top-64 px-6 text-white lg:mx-20">
                <h1 className={` w-3/5 font-mono text-6xl mobile:max-md:text-3xl`}>Apply Now</h1>
                <h2 className="mt-10 w-1/2 text-2xl font-sans mobile:max-md:w-[100%]">
                    Join us for an opportunity Now
                </h2>
            </div>

            <div className=" bg-white mx-20">
                <form
                    {...form}
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=" mobile:max-md: mx-auto my-20 flex flex-col space-y-3 mobile:max-md:mx-5 mobile:max-md:my-5 mobile:max-md:space-y-0"
                >
                    <label className="text-xl font-semibold">
                        Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                        {...register("fullName")}
                        className=" bg-gray-200 py-4 pl-4"
                        type="text"
                    />

                    {errors.fullName && (
                        <p className="text-sm text-red-600">{errors.fullName.message}</p>
                    )}

                    <div className="flex justify-between py-8 mobile:max-md:flex-col">
                        <div className="flex w-[45%] flex-col space-y-5 mobile:max-md:w-[100%]">
                            <label className="text-xl font-semibold">
                                Phone Number <span className="text-orange-500">*</span>
                            </label>
                            <input
                                {...register("number")}
                                className=" mb-6 bg-gray-200  py-4 pl-4"
                            />
                            {errors.number && (
                                <p className="text-sm text-red-600">{errors.number.message}</p>
                            )}

                            <p className="font-sans text-xl font-semibold">
                                Gender <span className="text-orange-500">*</span>
                            </p>
                            <div className="mt-6 flex flex-col space-y-3 bg-gray-200 p-4 text-lg ">
                                <label className=" font-sans">
                                    <input
                                        {...register("gender")}
                                        className=" bg-gray-200 px-1 py-4"
                                        type="radio"
                                    />{" "}
                                    Male
                                </label>
                                {errors.gender && (
                                    <p className="text-sm text-red-600">
                                        {errors.gender.message}
                                    </p>
                                )}

                                <label className=" font-sans">
                                    <input
                                        {...register("gender")}
                                        className=" bg-gray-200 px-1 py-4"
                                        type="radio"
                                    />{" "}
                                    Female
                                </label>
                                {errors.number && (
                                    <p className="text-sm text-red-600">
                                        {errors.number.message}
                                    </p>
                                )}
                            </div>
                            <label className="text-xl font-semibold">
                                Highest Academic Qualification{" "}
                                <span className="text-orange-500">*</span>
                            </label>
                            <input
                                {...register("schoolQualification")}
                                className=" bg-gray-200 px-1 py-4"
                                type="text"
                            />
                            {errors.schoolQualification && (
                                <p className="text-sm text-red-600">
                                    {errors.schoolQualification.message}
                                </p>
                            )}

                            <p className="text-xl font-semibold">
                                Program of Interest <span className="text-orange-500">*</span>
                            </p>
                            <div className="mt-6 flex flex-col space-y-3 bg-gray-200 p-4 text-lg">
                                <label className=" font-sans">
                                    <input
                                        {...register("programOfInterest")}
                                        className=" bg-gray-200 px-1 py-4"
                                        type="radio"
                                        value="Web Development"
                                    />{" "}
                                    Full Stack Web Development
                                </label>
                                {errors.programOfInterest && (
                                    <p className="text-sm text-red-600">
                                        {errors.programOfInterest.message}
                                    </p>
                                )}

                                <label className=" font-sans">
                                    <input
                                        {...register("programOfInterest")}
                                        className=" bg-gray-200 px-1 py-4"
                                        type="radio"
                                        name="programOfInterest"
                                    />{" "}
                                    UI/UX Design
                                </label>
                                {errors.programOfInterest && (
                                    <p className="text-sm text-red-600">
                                        {errors.programOfInterest.message}
                                    </p>
                                )}

                                <label className=" font-sans">
                                    <input
                                        {...register("programOfInterest")}
                                        className=" bg-gray-200 px-1 py-4"
                                        type="radio"
                                        value="UI/UX Design"
                                    />{" "}
                                    Other
                                </label>
                                {errors.programOfInterest && (
                                    <p className="text-sm text-red-600">
                                        {errors.programOfInterest.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex w-[45%] flex-col space-y-5 mobile:max-md:w-[100%] mobile:max-md:pt-10">
                            <label className="text-xl font-semibold">
                                Email <span className="text-orange-500">*</span>
                            </label>
                            <input
                                {...register("email")}
                                className=" bg-gray-200 py-4 pl-4"
                                type="email"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600">{errors.email.message}</p>
                            )}

                            <label className="text-xl font-semibold">
                                Age <span className="text-orange-500">*</span>
                            </label>
                            <input
                                {...register("age")}
                                className=" bg-gray-200 py-4  pl-4"
                            // type="number"
                            />
                            {errors.age && (
                                <p className="text-sm text-red-600">{errors.age.message}</p>
                            )}

                            <label className="pt-14 text-xl font-semibold">
                                Place of Residence <span className="text-orange-500">*</span>
                            </label>

                            <input
                                {...register("residence")}
                                className=" bg-gray-200 py-4  pl-4"
                                type="text"
                            />
                            {errors.residence && (
                                <p className="text-sm text-red-600">
                                    {errors.residence.message}
                                </p>
                            )}

                            <label className="pt-4 text-xl font-semibold">
                                If Other, specify
                            </label>
                            <input
                                {...register("other")}
                                className=" bg-gray-200 py-4  pl-4"
                                type="text"
                            />
                            {errors.other && (
                                <p className="text-sm text-red-600">{errors.other.message}</p>
                            )}
                        </div>
                    </div>

                    <label className="text-xl font-semibold">
                        What do you intend to gain from Rebase Code Camp?{" "}
                        <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                        {...register("intentionsBefore")}
                        className=" bg-gray-200 py-10 pl-4"
                    />
                    {errors.intentionsBefore && (
                        <p className="text-sm text-red-600">
                            {errors.intentionsBefore.message}
                        </p>
                    )}

                    <label className="pt-4 text-xl font-semibold">
                        What do you intend to do after your time at Rebase Code Camp?
                    </label>
                    <textarea
                        {...register("intentionsAfter")}
                        className=" bg-gray-200 py-10 pl-4"
                    />
                    {errors.intentionsAfter && (
                        <p className="text-sm text-red-600">
                            {errors.intentionsAfter.message}
                        </p>
                    )}

                    <label className="pt-4 text-xl font-semibold">
                        Full Name of Guardian <span className="text-orange-500">*</span>
                    </label>
                    <input
                        {...register("guardianName")}
                        className=" bg-gray-200 py-4  pl-4"
                        type="text"
                    />
                    {errors.guardianName && (
                        <p className="text-sm text-red-600">
                            {errors.guardianName.message}
                        </p>
                    )}

                    {/* all div  */}
                    <div className="flex justify-between py-8">
                        {/* div 3  */}
                        <div className="flex w-[45%] flex-col space-y-5">
                            <p className="text-xl font-semibold">
                                Relationship wit Guardian{" "}
                                <span className="text-orange-500">*</span>
                            </p>
                            <div className="mt-6 flex flex-col space-y-3 bg-gray-200 p-4 text-lg">
                                <label className=" font-sans">
                                    <input
                                        {...register("gender")}
                                        className=" bg-gray-200 py-4  pl-4"
                                        type="radio"
                                    />{" "}
                                    Mother
                                </label>
                                {errors.gender && (
                                    <p className="text-sm text-red-600">
                                        {errors.gender.message}
                                    </p>
                                )}
                                <label className=" font-sans">
                                    <input
                                        {...register("gender")}
                                        className=" bg-gray-200 py-4  pl-4"
                                        type="radio"
                                    />{" "}
                                    Father
                                </label>
                                {errors.gender && (
                                    <p className="text-sm text-red-600">
                                        {errors.gender.message}
                                    </p>
                                )}

                                <label className=" font-sans">
                                    <input
                                        {...register("gender")}
                                        className=" bg-gray-200 py-4  pl-4"
                                        type="radio"
                                    />{" "}
                                    Other
                                </label>
                                <input {...register("_type")} type="hidden" />

                                {errors.gender && (
                                    <p className="text-sm text-red-600">
                                        {errors.gender.message}
                                    </p>
                                )}
                            </div>

                            <label className="text-xl font-semibold">
                                Guardian&apos;s Phone Number{" "}
                                <span className="text-orange-500">*</span>
                            </label>
                            <input
                                {...register("guardianNumber")}
                                className=" bg-gray-200 py-4  pl-4"
                                type="tel"
                            />
                            {errors.guardianNumber && (
                                <p className="text-sm text-red-600">
                                    {errors.guardianNumber.message}
                                </p>
                            )}
                        </div>
                        {/* div 4  */}
                        <div className="flex w-[45%] flex-col space-y-5">
                            <label className="text-xl font-semibold">
                                If Other, specify <span className="text-orange-500">*</span>
                            </label>
                            <input
                                {...register("otherForguardian")}
                                className=" bg-gray-200 py-4  pl-4"
                                type="text"
                            />
                            {errors.otherForguardian && (
                                <p className="text-sm text-red-600">
                                    {errors.otherForguardian.message}
                                </p>
                            )}

                            <label className="pt-20 text-xl font-semibold">
                                Email of Guardian <span className="text-orange-500">*</span>
                            </label>
                            <input
                                {...register("guardianEmail")}
                                className=" bg-gray-200 py-4 pl-4"
                                type="email"
                            />
                            {errors.guardianEmail && (
                                <p className="text-sm text-red-600">
                                    {errors.guardianEmail.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="items-center justify-center  pt-5 text-center">
                        <button
                            className=" p-2 px-4 text-white"
                            style={{ background: "#6220ec" }}
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Notification />
        </div>
    );
};

export default ApplyNow;



