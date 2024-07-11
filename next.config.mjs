import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return cfg;
  },
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default bundleAnalyzer(nextConfig);
