import React from "react";
import ApplyNow from "../components/organisms/apply";
import Footer from "../components/organisms/footer";
import Navbar from "../components/organisms/navbar";


function AboutPage() {
    return (
        <div className=" py-20 bg-white pb-10">
            <Navbar />
           <ApplyNow />
           {/* <Footer /> */}
        </div>
    );
}

export default AboutPage;