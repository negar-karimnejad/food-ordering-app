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
              <>
                <SectionHeader key={category._id} mainTitle={category.title} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {menuItems
                    ?.filter((menu) => menu.category === category._id)
                    .map((menu) => (
                      <MenuItem key={menu._id} {...menu} />
                    ))}
                </div>
              </>
            ))}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {menuItems.map((menu) => (
              <MenuItem key={menu._id} {...menu} />
            ))}
          </div>
          <SectionHeader mainTitle="Dessert" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dessert.map((menu) => (
              <MenuItem key={menu._id} {...menu} />
            ))}
          </div>
          <SectionHeader mainTitle="Pasta" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pasta.map((menu) => (
              <MenuItem key={menu._id} {...menu} />
            ))}
          </div> */}
        </>
      )}
    </section>
  );
}
