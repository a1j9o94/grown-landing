import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      // Legacy product pages (pre-pivot oil/salt jar lineup)
      {
        source: "/products/thc-oil",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/thc-salt",
        destination: "/products/cajun-seasoning",
        permanent: true,
      },
      {
        source: "/products/seasoning-salt",
        destination: "/products/cajun-seasoning",
        permanent: false,
      },
      {
        source: "/learn/using-thc-salt",
        destination: "/learn/using-thc-cajun-seasoning",
        permanent: false,
      },
      // Legacy learn slugs
      {
        source: "/learn/cooking-with-thc-oil",
        destination: "/learn/cooking-with-thc-seasoning",
        permanent: true,
      },
      {
        source: "/learn/when-to-add-thc-oil",
        destination: "/learn/when-to-add-thc-seasoning",
        permanent: true,
      },
      {
        source: "/learn/storage-shelf-life-thc-oil-salt",
        destination: "/learn/storage-and-shelf-life",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
