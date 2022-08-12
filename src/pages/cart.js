import React from "react";
import Header from "../parts/header";
import Breadcrump from "../components/breadcrump/index";
import ShoppingCart from "../parts/cart/shoppingcart";
import ShippingDetails from "../parts/cart/shippingdetails";
import Sitemap from "../parts/sitemap";
import Footer from "../parts/footer";

export default function Cart(prop) {
  return (
    <>
      <Header theme="black" />
      <Breadcrump
        list={[
          { url: "/", name: "home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}
