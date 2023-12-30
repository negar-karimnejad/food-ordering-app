"use client";

import { useEffect, useState } from "react";
import MenuItem from "../../components/shared/MenuItem";
import BestSellerLoader from "../../components/ui/BestSellerLoader";
import SectionHeader from "../../components/ui/SectionHeader";

export default function Menus() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/menu-items")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
      });

    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
    setLoading(false);
  }, []);
  // console.log(menuItems);
  return (
    <section className="px-10 sm:px-24 mt-10">
      {loading ? (
        <div className="mt-20">
          <BestSellerLoader />
        </div>
      ) : (
        <>
          {categories.length > 0 &&
            categories.map((category) => (
              <div key={category._id}>
                <SectionHeader mainTitle={category.title} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {menuItems
                    ?.filter((item) => item.category === category._id)
                    .map((item) => (
                      <MenuItem key={item._id} {...item} />
                    ))}
                </div>
              </div>
            ))}
        </>
      )}
    </section>
  );
}
