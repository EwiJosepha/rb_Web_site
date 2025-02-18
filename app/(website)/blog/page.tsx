import React from "react";
import Blog from "../../Components/organisms/blog";
import Footer from "../../Components/organisms/footer";
import Potentialsection from "../../Components/organisms/potential";

function BlogPage() {
  return (
    <div className="pt-10">
      <Blog />
      <Potentialsection />
      <Footer />
    </div>
  );
}

export default BlogPage;
