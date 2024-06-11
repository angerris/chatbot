"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Auth from "@/components/auth/AuthWrapper";
import SignUp from "@/components/auth/SignUp";
import Login from "@/components/auth/Login";
import { User, getUser, login, signup } from "@/services/api";
import Preloader from "@/components/Preloader";
import ChatPage from "@/pages/ChatPage";
const Scene: any = dynamic(() => import("@/components/Scene"), {
  ssr: false
});

export default function Home() {
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
      const userData = await getUser();
      setUser(userData);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      await signup(name, email, password);
      setIsNewUser(false);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    async function checkAuth() {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    checkAuth();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-gray-50">
        <h1>ERROR</h1>
        <div>{error}</div>
      </main>
    );
  }

  if (!user || !localStorage.getItem("token")) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="sceneWrapper">
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

  return <ChatPage handleLogout={handleLogout} />;
}
