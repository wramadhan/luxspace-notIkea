import React from "react";
import Header from "../parts/header";
import Sitemap from "../parts/sitemap";
import Footer from "../parts/footer";
import Breadcrump from "../components/breadcrump/index";
import ProductDetails from "../parts/details/productdetails";
import Suggestion from "../parts/details/suggestion";

export default function Details(prop) {
  return (
    <>
      <Header theme="black" />
      <Breadcrump
        list={[
          { url: "/", name: "home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}
