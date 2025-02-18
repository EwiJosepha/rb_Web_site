/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "**",
      },
    ],
  },
  // headers: () => [
  //   {
  //     source: "/:path*",
  //     headers: [
  //       {
  //         key: "Cache-Control",
  //         value: "public, max-age=300, must-revalidate",
  //       },
  //     ],
  //   },
  // ],
};

export default nextConfig;
