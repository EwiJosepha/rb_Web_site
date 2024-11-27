import React from "react";
import ContactUs from "../../Components/organisms/contact";
import Footer from "../../Components/organisms/footer";
import Potentialsection from "../../Components/organisms/potential";

function ContactPage() {
  return (
    <div className=" w-full pt-20">
      <ContactUs />
      <Potentialsection />
      <Footer />
    </div>
  );
}

export default ContactPage;
