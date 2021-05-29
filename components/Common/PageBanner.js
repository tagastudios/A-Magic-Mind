import React from "react";
import Link from "next/link";

function PageBanner({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  bgImgClass,
}) {
  return (
    <div className={`page-title-area ${bgImgClass}`}>
      <div className="container">
        <div className="page-title-content">
          <h2>{pageTitle}</h2>
          <ul>
            <li>
              <Link href={homePageUrl}>
                <a>{homePageText}</a>
              </Link>
            </li>
            <li>{activePageText}</li>
          </ul>
        </div>
      </div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default PageBanner;
