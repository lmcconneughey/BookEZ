/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {// for db images
            protocol: 'https',
            hostname: 'res.cloudinary.com',    
          },
          {//added for google user images
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',     
          },
          {//added for github user images
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',     
          },
        ],
      },
};

export default nextConfig;
