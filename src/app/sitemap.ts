import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://iam-kaz.com';

  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/projects`, lastModified: new Date().toISOString() },
    ...getBlogSitemapUrls(baseUrl), // Add blog slugs dynamically
  ];
}

function getBlogSitemapUrls(baseUrl: string) {
  const blogPosts = [
    { slug: 'create-app-icon', lastModified: '2024-01-01' },
    { slug: 'create-custom-fonts', lastModified: '2024-01-10' },
  ];

  return blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
  }));
}
