/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // don't resolve 'fs' module on the client to prevent this error:
  //     // "Uncaught ReferenceError: require is not defined"
  //     config.resolve.fallback = {
  //       fs: false,
  //       dns: false,
  //       net: false,
  //       tls: false,
  //     };
  //   }
  //
  //   return config;
  // }
}

module.exports = nextConfig
