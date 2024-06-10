import Image from "next/image";
import React from "react";

const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="authWrapper">
      <div className="bg-glass-dark backdrop-blur-md bg-opacity-50 authInnerWrapper">
        <div className=" flex items-center justify-center mb-2">
          <Image src="/svg/logo.svg" alt="" width={50} height={50} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Auth;
