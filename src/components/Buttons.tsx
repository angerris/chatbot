import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
}
const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return (
    <button
      type={type}
      className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-200 mb-2"
    >
      {children}
    </button>
  );
};

export default Button;
