"use client";

import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

export default function Menu() {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch("/api/menu-items")
      .then((res) => res.json())
      .then((data) => setBestSellers(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {bestSellers.map((menu) => (
        <MenuItem key={menu._id} {...menu} />
      ))}
    </div>
  );
}
