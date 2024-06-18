import React from "react";
import Image from "next/image";
import quizPic from "@/public/assets/images/programs_rebase_photo__4__720.png";

function QuizPicture() {
    return (
        <div>
            <div className=" h- flex h-[650px] w-full flex-col pb-10 pl-20 pr-20 pt-8 mobile:max-md:mr-[-9rem] mobile:max-md:hidden mobile:max-md:pl-5 mobile:max-md:pr-5">
                <div className=" mobile:max-md:w-[100%] bg-white">
                    <Image
                        src={quizPic}
                        className=" h-[550px] w-[100%] object-cover"
                        alt="Quiz picture"
                    />
                </div>
            </div>
        </div>
    );
}

export default QuizPicture;
