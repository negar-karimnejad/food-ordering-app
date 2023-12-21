import React from "react";

export default function Button({ type, className, onClick, children }) {
  return (
    <button
      type={type}
      className={`${
        className ? className : ""
      } flex justify-center items-center gap-1 font-semibold border-0 bg-primary text-white px-4 py-1.5 rounded-full`}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
}
