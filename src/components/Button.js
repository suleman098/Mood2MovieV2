import React from "react";

const Button = ({ onClick, children, className, type = "button" }) => {
  return (
    <button
      className={`btn md:btn-lg border-[1.5px] border-primary hover:btn-primary ${className}`}
      onClick={onClick}
      type={type}
    >
      <span className="text-xl ">{children}</span>
    </button>
  );
};

export default Button;
