import React from "react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
}
