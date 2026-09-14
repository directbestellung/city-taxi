import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root. Without this, Turbopack walks up and finds the
  // stray package-lock.json in the home directory and warns about it.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
