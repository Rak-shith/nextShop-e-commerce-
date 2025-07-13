'use server'

import bcrypt from 'bcrypt'
import { prisma } from '@/lib/prisma'

export async function registerUser(formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  const existingUser = await prisma.user.findUnique({ where: { email } })

  if (existingUser) {
    return { error: 'Email already exists' }
  }

  const hashed = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashed,
    },
  })

  return { success: true, user }
}
