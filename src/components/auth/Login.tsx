import React, { useState, FormEvent, Dispatch, SetStateAction } from "react";
import Button from "../Buttons";

interface LoginProps {
  setIsNewUser: Dispatch<SetStateAction<boolean>>;
  handleLogin: (email: string, password: string) => Promise<void>;
}

const Login: React.FC<LoginProps> = ({ setIsNewUser, handleLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">
        Log In
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-pink-500 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="  w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ color: "black" }}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-pink-500 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ color: "black" }}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
      <a
        className="text-center mt-2 small underline text-blue-500 cursor-pointer"
        onClick={() => {
          setIsNewUser(true);
        }}
      >
        Don`t have an account? Sign Up
      </a>
    </>
  );
};

export default Login;
