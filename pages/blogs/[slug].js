import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";

function BlogDetails() {
  return (
    <>
      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/blogs"
        homePageText="Blogs"
        activePageText="Blog Details"
        bgImgClass="item-bg3"
      />

      <BlogDetailsContent />
    </>
  );
}

export default BlogDetails;
