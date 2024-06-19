import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,      // Enable React strict mode for improved error handling
    swcMinify: true,            // Enable SWC minification for improved performance
    compiler: {
        removeConsole: process.env.NODE_ENV !== 'development'       // Remove console.log in production
    }
};

export default withPWA({
    dest: "public",         // destination directory for the PWA files
    disable: process.env.NODE_ENV === "development",        // disable PWA in the development environment
    register: true,         // register the PWA service worker
    skipWaiting: true,
    fallbacks: {
        //image: "/static/images/fallback.png",
        // font: '/static/font/fallback.woff2',
        // audio: ...,
        document: '/offline',
        video: '/static/ocelot_2.mp4',
    },
})(nextConfig);
