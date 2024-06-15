/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    path: './pages/api/faviconLoader.tsx',
  },
};

export default nextConfig;
