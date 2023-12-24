"use client";

import Button from "@/components/ui/Button";
import Github from "@/components/ui/Github";
import Google from "@/components/ui/Google";
import Input from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        toast.success("You registered successfully.");
        router.push("/login");
      }
      if (res.status === 400) {
        toast.error("User already exists.");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-5 w-[350px] mt-16 flex flex-col gap-3 items-center justify-center">
        <h1 className="text-3xl text-primary font-extrabold">Register</h1>
        <form onSubmit={registerUser} className="flex flex-col gap-2 w-full">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            className="bg-gray-50"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="bg-gray-50"
          />
          <Button type="submit" className="rounded-lg">
            Register
          </Button>
        </form>
        <p className="text-gray-600">or login with providers</p>
        <Button
          onClick={() => signIn("github")}
          className="w-full bg-gray-950 rounded-lg text-gray-50 border"
        >
          <Github />
          <span className="ml-2">Login with github</span>
        </Button>
        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full bg-transparent rounded-lg text-slate-800 border"
        >
          <Google />
          <span className="ml-2">Login with google</span>
        </Button>
      </div>
    </div>
  );
}
