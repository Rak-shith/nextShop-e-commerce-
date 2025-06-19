import bcrypt from "bcrypt"
import { users } from "@/lib/db"

export async function POST(req) {
  const { email, password } = await req.json()

  if (users.find(u => u.email === email)) {
    return new Response("Email already exists", { status: 400 })
  }

  const hashed = await bcrypt.hash(password, 10)
  users.push({ id: Date.now().toString(), email, password: hashed })

  return new Response("Registered", { status: 201 })
}
