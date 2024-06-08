import Image from "next/image";
import React from "react";

const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=" flex items-center justify-center top-0 fixed left-0 h-100 bottom-0 ">
      <div className="bg-glass-dark backdrop-blur-md bg-opacity-50 p-8 rounded shadow-md w-full max-w-xl min-w-fit h-full">
        <div className=" flex items-center justify-center mb-2">
          <Image src="/svg/logo.svg" alt="" width={50} height={50} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Auth;
