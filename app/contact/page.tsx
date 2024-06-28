import React from "react";
import ContactUs from "../components/organisms/contact";
import Footer from "../components/organisms/footer";
import Navbar from "../components/organisms/navbar";

function ContactPage() {
    return (
        <div className=" py-40 bg-white">
            <Navbar />
            <ContactUs />
            {/* <Team /> */}
            <Footer />
        </div>
    );
}

export default ContactPage;