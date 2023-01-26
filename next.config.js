/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "public.opendatasoft.com",
      "a0.muscache.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "platform-lookaside.fbsbx.com",
      "pbs.twimg.com",
    ],
  },
};

module.exports = nextConfig;
