import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Menu from "./Menu";

export default function BestSeller() {
  return (
    <section className="px-10 sm:px-24 my-20">
      <SectionHeader smallTitle="Check out" mainTitle="Our Best Sellers" />
      <Menu />
    </section>
  );
}
