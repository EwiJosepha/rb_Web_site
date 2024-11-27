import React from "react";

const DotsLoader = () => {
  return (
    <section className="dots-container flex h-full w-full items-center justify-center pt-20">
      <div className="dot mr-2.5 h-5 w-5 animate-pulse-dot rounded-full bg-[#b3d4fc]"></div>
      <div className="dot mr-2.5 h-5 w-5 animate-[pulse_1.5s_infinite_ease-in-out_-0.1s] animate-pulse-dot rounded-full bg-[#b3d4fc]"></div>
      <div className="dot mr-2.5 h-5 w-5 animate-[pulse_1.5s_infinite_ease-in-out_0.1s] animate-pulse-dot rounded-full bg-[#b3d4fc]"></div>
      <div className="dot mr-2.5 h-5 w-5 animate-[pulse_1.5s_infinite_ease-in-out_-0.3s] animate-pulse-dot rounded-full bg-[#b3d4fc]"></div>
      <div className="dot h-5 w-5 animate-pulse-dot rounded-full bg-[#b3d4fc]"></div>
    </section>
  );
};

export default DotsLoader;
