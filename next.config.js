const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    transpilePackages: ['next-mdx-remote'],
    images: { remotePatterns: [
        {
            protocol: 'https',
            hostname: 'www.australianbookreview.com.au',
        },
        {
            protocol: 'https',
            hostname: 'sydneyreviewofbooks.com',
        },
    ]},
    experimental: {
        turbo: {
            resolveExtensions: [
                '.mdx',
                '.tsx',
                '.ts',
                '.jsx',
                '.js',
                '.mjs',
                '.json',
            ],
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                }
            },
        }
    }
}

module.exports = withMDX(nextConfig)
