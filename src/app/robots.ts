import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/'],
                disallow: '/admin/',
            },
            {
                userAgent: ['Applebot', 'Bingbot'],
                disallow: ['/admin/'],
            },
        ],
        sitemap: 'https://sophiabarnes.com.au/sitemap.xml',
    }
}
