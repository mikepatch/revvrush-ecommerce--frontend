// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { type NextRequest, NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher(["/account"]);

// export default clerkMiddleware((auth, req) => {
// 	if (isProtectedRoute(req)) auth().protect();
// });

export function middleware(_request: NextRequest) {
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
