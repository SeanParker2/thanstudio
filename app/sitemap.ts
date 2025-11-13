export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { SERVICE_DATA } from '@/lib/services';
import { PROJECT_DATA } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const baseUrl = `${origin}${basePath}`.replace(/\/$/, '');
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, priority: 1.0 },
    { url: `${baseUrl}/work`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/story`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/store`, lastModified: now, priority: 0.8 },
  ];

  const storeRoutes: MetadataRoute.Sitemap = SERVICE_DATA.map((s) => ({
    url: `${baseUrl}/store/${s.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const workRoutes: MetadataRoute.Sitemap = PROJECT_DATA.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  return [...staticRoutes, ...storeRoutes, ...workRoutes];
}
