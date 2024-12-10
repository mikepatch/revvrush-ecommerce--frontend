// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// const isProtectedRoute = createRouteMatcher(["/account"]);

// export default clerkMiddleware((auth, req) => {
// 	if (isProtectedRoute(req)) auth().protect();
// });

export function middleware(request: NextRequest) {
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
