import React from "react";
import PageBanner from "../components/Common/PageBanner";
import { attributes, react as HomeContent } from "../content/test.md";

function test() {
  let { title, cats } = attributes;
  return (
    <>
      <PageBanner
        pageTitle="Test"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Test"
        bgImgClass="item-bg1"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "100px 10px",
        }}
      >
        <h1>TEST</h1>

        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}

export default test;
