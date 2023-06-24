/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dhgsu4bpi/**',
          },
          {
            protocol: 'https',
            hostname: 'www.snautz.de',
            port: '',
            pathname: '/sites/**',
          },
        ],
      },
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
    
        return config;
      },
}
