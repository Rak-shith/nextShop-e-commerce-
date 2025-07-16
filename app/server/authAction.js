'use server'

import bcrypt from 'bcrypt'
import { prisma } from '@/lib/prisma'

export async function registerUser(formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')

  if (!name || !email || !password) {
    return { error: 'Name, email and password are required' }
  }

  const existingUser = await prisma.user.findUnique({ where: { email } })

  if (existingUser) {
    return { error: 'Email already exists' }
  }

  const hashed = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
    },
  })

  return { success: true, user }
}
