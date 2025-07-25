import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { name: {}, email: {}, password: {} },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        console.log('Login Email:', credentials.email)
        console.log('User Found:', user)
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { id: user.id, name: user.name, email: user.email };
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.id = user.id
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
}

// Required for App Router (not `default`)
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
