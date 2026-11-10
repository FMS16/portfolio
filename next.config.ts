import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return ["/articles/:path*", "/experience/:path*", "/works/:path*"].map((source) => ({
      source, destination: "/", permanent: false,
    }));
  },
};

export default nextConfig;
