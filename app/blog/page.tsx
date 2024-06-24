import React from "react";
import Blog from "../components/organisms/blog";
import Navbar from "../components/organisms/navbar";
import Footer from "../components/organisms/footer";

function BlogPage() {
    return (
        <div className="py-20">
            <Navbar />
            <Blog />
            <Footer />
        </div>
    );
}

export default BlogPage;