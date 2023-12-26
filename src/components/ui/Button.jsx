import React from "react";

export default function Button({ type, className, onClick, children }) {
  return (
    <button
      type={type}
      className={`flex justify-center items-center gap-1 font-semibold bg-primary text-gray-50 px-4 py-1.5 whitespace-nowrap rounded-full hover:opacity-80 ${
        className ? className : ""
      }`}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
}
