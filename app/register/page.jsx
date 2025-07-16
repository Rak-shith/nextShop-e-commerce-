"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../server/authAction";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);
    const result = await registerUser(formData);

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/login");
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Register</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          required
          className="w-full p-2 border"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full p-2 border"
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2">
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500">
          Login
        </a>
      </p>
    </div>
  );
}
