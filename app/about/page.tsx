import React from "react";
import Footer from "../components/organisms/footer";
import AboutUs from "../components/organisms/about-us";
import Navbar from "../components/organisms/navbar";

function AboutPage() {
    return (
        <div className=" py-20 bg-white">
            <Navbar />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default AboutPage;