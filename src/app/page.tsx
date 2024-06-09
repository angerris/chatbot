"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Auth from "@/components/auth/AuthWrapper";
import SignUp from "@/components/auth/SignUp";
import Login from "@/components/auth/Login";
import { User, getUser, login, signup } from "@/services/api";
const Scene: any = dynamic(() => import("@/components/Scene"), {
  ssr: false
});

export default function Home() {
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);
    const userData = await getUser();
    setUser(userData);
  };
  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    await signup(name, email, password);
    setIsNewUser(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    async function checkAuth() {
      const userData = await getUser();
      setUser(userData);
      setIsLoading(false);
    }
    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="sceneWrapper">
          {" "}
          <Scene />
        </div>
        <Auth>
          {isNewUser ? (
            <SignUp setIsNewUser={setIsNewUser} handleSignUp={handleSignUp} />
          ) : (
            <Login setIsNewUser={setIsNewUser} handleLogin={handleLogin} />
          )}
        </Auth>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        Welcome! <button onClick={handleLogout}>Logout</button>
      </div>
    </main>
  );
}
