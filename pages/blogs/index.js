import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import BlogThreeGrid from "../../components/Blog/BlogThreeGrid";

function Blogs() {
  return (
    <>
      <PageBanner
        pageTitle="Magic Blogs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg2"
      />

      <BlogThreeGrid />
    </>
  );
}

export default Blogs;
