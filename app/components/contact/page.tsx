import React from "react";
import ContactUs from "../organisms/contact";
import Footer from "../organisms/footer";
import Team from "../organisms/team";

function ContactPage() {
    return (
        <div className=" py-20">
            <ContactUs />
            <Team />
            <Footer />
        </div>
    );
}

export default ContactPage;