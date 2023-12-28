"use client";

import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import BestSellerLoader from "../ui/BestSellerLoader";

export default function Menu() {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/menu-items")
      .then((res) => res.json())
      .then((data) => {
        setBestSellers(data.slice(-3));
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <BestSellerLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bestSellers.map((menu) => (
            <MenuItem key={menu._id} {...menu} />
          ))}
        </div>
      )}
    </>
  );
}
