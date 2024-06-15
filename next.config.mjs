/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    path: './pages/api/faviconLoader.tsx',
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
