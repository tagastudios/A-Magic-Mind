import "../public/css/bootstrap.min.css";
import "animate.css";
import "../public/css/flaticon.css";
import "../public/css/fontawesome.min.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
import "../public/css/newStyle.css";

import App from "next/app";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";
import NavBar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

import { BlogProvider } from "../components/Context/BlogProvider";

function MyApp({ Component, pageProps }) {
  // Preloader
  const [loading, setLoading] = useState(true);

  // Blog Data
  function updateBlogData() {
    console.log("Loading blogs..");
    const importAll = (r) => r.keys().map(r);
    return importAll(require.context("../content/blogs", false, /\.md$/))
      .sort()
      .reverse();
  }

  // Blog State
  const [blogData, setBlogData] = useState(updateBlogData);

  useEffect(() => {
    const timerHandle = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      if (timerHandle) {
        clearTimeout(timerHandle);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>A Magic Mind</title>
      </Head>

      <NavBar />
      <BlogProvider value={blogData}>
        <Component {...pageProps} />
      </BlogProvider>
      <Footer />

      {/* Preloader */}
      <Loader loading={loading} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
