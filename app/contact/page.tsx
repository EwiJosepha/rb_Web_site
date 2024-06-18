import React from "react";
import ContactUs from "../components/organisms/contact";
import Footer from "../components/organisms/footer";

function ContactPage() {
    return (
        <div className=" py-20 bg-white">
            <ContactUs />
            {/* <Team /> */}
            <Footer />
        </div>
    );
}

export default ContactPage;