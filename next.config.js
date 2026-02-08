/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bafybeihi36u7hvbjmhksyo5r7b6cfvhpyjmiqteb72yldb2tp4qit7htga.ipfs.dweb.link",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ipfs.dweb.link",
        pathname: "/ipfs/**",
      },
    ],
  },
};

module.exports = nextConfig;
