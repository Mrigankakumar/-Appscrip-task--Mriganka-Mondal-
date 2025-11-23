import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://lighthearted-malabi-01b2a6.netlify.app/sitemap.xml',
  }
}



