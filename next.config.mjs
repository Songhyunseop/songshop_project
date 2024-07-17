/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: 'custom',
    // path: './pages/api/faviconLoader.tsx',
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/s3`,
    //   },
    // ],
    // domains: [`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/s3`],
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
