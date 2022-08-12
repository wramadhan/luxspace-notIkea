import React from "react";
import Header from "../parts/header";
import Sitemap from "../parts/sitemap";
import Footer from "../parts/footer";
import PageErrrorMessage from "../parts/pageerrrormessage";

export default function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageErrrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}
