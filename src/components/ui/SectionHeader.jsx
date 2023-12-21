import React from "react";

export default function SectionHeader({ mainTitle, smallTitle }) {
  return (
    <div className="font-extrabold text-center flex flex-col items-center justify-center mt-10 mb-3">
      <h3 className="text-gray-600 uppercase">{smallTitle}</h3>
      <h2 className="text-primary text-3xl italic">{mainTitle}</h2>
    </div>
  );
}
