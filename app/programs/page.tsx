import React from "react";
import OurPrograms from "../components/organisms/program";
import Faqs from "../components/organisms/faq";
import Footer from "../components/organisms/footer";

// import QuizPicture from '../Components/organisms/quix-pic'

function ProgramsPage() {
    return (
        <div className="py-20">
            <OurPrograms />
            <Faqs />
            <Footer />
        </div>
    );
}

export default ProgramsPage;