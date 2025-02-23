import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

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
  const filePath = path.join(process.cwd(), 'public', 'json', 'blogs.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const blogPosts = JSON.parse(fileContents);

  return blogPosts.map((post: { slug: string; createdAt: string }) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.createdAt,
  }));
}
