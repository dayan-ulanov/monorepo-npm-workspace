import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias["@monorepo-npm-workspace/ui"] = path.resolve(
      __dirname,
      "../../packages/ui"
    );
    return config;
  },
};

export default nextConfig;
