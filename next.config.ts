import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/loyal-garage-redesign',
  trailingSlash: true,
};

export default nextConfig;
