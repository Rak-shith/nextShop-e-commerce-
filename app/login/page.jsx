'use client'
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"

export default function LoginPage() {
  const [error, setError] = useState("")
  const router = useRouter()
  const params = useSearchParams()
  const callbackUrl = params.get("callbackUrl") || "/"

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    const res = await signIn("credentials", {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
      callbackUrl
    })

    if (res.error) setError("Invalid email or password")
    else window.location.href = callbackUrl
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" type="email" placeholder="Email" required className="w-full p-2 border"/>
        <input name="password" type="password" placeholder="Password" required className="w-full p-2 border"/>
        <button type="submit" className="w-full bg-blue-500 text-white p-2">Login</button>
      </form>
      <p className="mt-4">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
    </div>
  )
}
