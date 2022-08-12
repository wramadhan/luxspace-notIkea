import React from "react";
import Header from "../parts/header";
import Hero from "../parts/hero";
import BrowseRoom from "../parts/homepages/browseroom";
import JustArrived from "../parts/homepages/justarrived";
import Clients from "../parts/clients";
import Sitemap from "../parts/sitemap";
import Footer from "../parts/footer";

export default function HomePage(prop) {
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
