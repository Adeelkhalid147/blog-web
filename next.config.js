/** @type {import('next').NextConfig} */
// const nextConfig = {
//   image: {
//     domains: ["cdn.sanity.io"],
//   },
// };

// module.exports = nextConfig;



module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
    domains: ["cdn.sanity.io"],
  },
}