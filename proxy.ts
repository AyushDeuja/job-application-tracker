import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

export default async function proxy(request: NextRequest) {
  const session = await getSession();

  const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard");
  if (!session?.user && isDashboardPage) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  const isSingUp = request.nextUrl.pathname.startsWith("/sign-up");
  const isSignIn = request.nextUrl.pathname.startsWith("/sign-in");
  if ((isSingUp || isSignIn) && session?.user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
