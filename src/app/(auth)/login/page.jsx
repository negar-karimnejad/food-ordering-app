"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response);
  };

  return (
    <div className="w-screen flex items-center justify-center">
      <div className="p-5 w-[350px] mt-16 flex flex-col gap-3 items-center justify-center">
        <h1 className="text-3xl text-primary font-extrabold">Login</h1>
        <form onSubmit={loginUser} className="flex flex-col gap-2 w-full">
          <Input
            value={email}
            onChange={() => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            className="bg-gray-50"
          />
          <Input
            value={password}
            onChange={() => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="bg-gray-50"
          />
          <Button type="submit" className="rounded-lg">
            Login
          </Button>
        </form>
        <p className="text-gray-600">or login with provider</p>
        <Button className="w-full bg-transparent rounded-lg text-slate-700 border">
          <Image
            className="mr-2"
            src="/google.png"
            width={20}
            height={20}
            alt="google logo"
          />
          Login with google
        </Button>
      </div>
    </div>
  );
}
