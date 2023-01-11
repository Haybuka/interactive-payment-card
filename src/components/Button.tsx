import React from "react";

type ButtonProps = {
  text: string;
  className?: string;
};
const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`w-full bg-[#21092f] text-white rounded-md py-3 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
