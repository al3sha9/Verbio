import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export default withAuth({
  login: "/api/auth/login",
  isReturnToCurrentPage: true,
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
