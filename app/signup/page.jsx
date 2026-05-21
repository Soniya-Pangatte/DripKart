"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account created!");
      router.push("/login");
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Sign Up
      </h1>

      <form
        onSubmit={handleSignup}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-md"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-md"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button className="w-full bg-slate-900 text-white py-3 rounded-md">
          Create Account
        </button>
      </form>
    </div>
  );
}