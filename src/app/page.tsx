"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Auth from "@/components/auth/AuthWrapper";
import SignUp from "@/components/auth/SignUp";
import Login from "@/components/auth/Login";
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="authWrapper">
        <Scene />
      </div>
      <Auth>
        {isNewUser ? (
          <SignUp setIsNewUser={setIsNewUser} />
        ) : (
          <Login setIsNewUser={setIsNewUser} />
        )}
      </Auth>
    </main>
  );
}
