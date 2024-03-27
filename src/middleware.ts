import { type NextRequest, NextResponse } from "next/server";

export const config = {
	matcher: "/api/:function*",
};

const isAuthenticated = (_request: NextRequest) => {
	return true;
};

export function middleware(request: NextRequest) {
	if (!isAuthenticated(request)) {
		return new NextResponse(JSON.stringify({ success: false, message: "Authentication failed" }), {
			status: 401,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}
