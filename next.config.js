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
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYWJoYXNvbmlhcyIsImEiOiJjbGRoOXFxdDcwNnZpM3Fta3JrY2tpejkzIn0.uW6jUAWj8aEiGntxjzCBdg",
  },
};

module.exports = nextConfig;
