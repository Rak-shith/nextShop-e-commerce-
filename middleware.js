import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req) {
  const token = await getToken({ req, secret })
  const { pathname } = req.nextUrl

  if (pathname.startsWith("/checkout")) {
    if (!token) {
      const loginUrl = new URL("/login", req.url)
      loginUrl.searchParams.set("callbackUrl", pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/checkout/:path*", "/login", "/register"],
}
