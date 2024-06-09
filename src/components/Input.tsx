import React from "react";

interface InputProps {
  children: React.ReactNode;
}
const Input: React.FC<InputProps> = ({ children }) => {
  return (
    <button
      type="submit"
      className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-200 mb-2"
    >
      {children}
    </button>
  );
};

export default Input;
