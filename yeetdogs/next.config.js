/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/kreynolds2/Yeetdogs.com/main/Smite_wallpaper.v1%20(1).png'
      }
    ]
  }
}

module.exports = nextConfig
