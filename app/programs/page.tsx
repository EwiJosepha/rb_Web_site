import React from "react";
import OurPrograms from "../components/organisms/program";
import Faqs from "../components/organisms/faq";
import Footer from "../components/organisms/footer";
import Navbar from "../components/organisms/navbar";

// import QuizPicture from '../Components/organisms/quix-pic'

function ProgramsPage() {
    return (
        <div className="py-20 bg-white">
            <Navbar />
            <OurPrograms />
            <Faqs />
            <Footer />
        </div>
    );
}

export default ProgramsPage;