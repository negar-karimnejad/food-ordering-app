"use client";

import { useEffect, useState } from "react";
import MenuItem from "../../components/shared/MenuItem";
import SectionHeader from "../../components/ui/SectionHeader";

export default function Menus() {
  const [pizza, setPizza] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [pasta, setPasta] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/menu-items")
      .then((res) => res.json())
      .then((data) => {
        setPizza(data.map((menu) => menu.category === "pizza"));
        setPasta(data.map((menu) => menu.category === "pasta"));
        setDessert(data.map((menu) => menu.category === "desert"));

        setLoading(false);
      });
  }, []);

  return (
    <section
      className="px-10 sm:px-24 my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      <SectionHeader mainTitle="Pizza" />
      {pizza.map((menu) => (
        <MenuItem key={menu._id} {...menu} />
      ))}
      <SectionHeader mainTitle="Pasta" />
      {dessert.map((menu) => (
        <MenuItem key={menu._id} {...menu} />
      ))}{" "}
      <SectionHeader mainTitle="Dessert" />
      {pasta.map((menu) => (
        <MenuItem key={menu._id} {...menu} />
      ))}{" "}
    </section>
  );
}
