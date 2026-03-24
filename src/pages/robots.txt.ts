import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `\
Nice to see you here!

User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
    const sitemapURL = new URL('sitemap-index.xml', site);
    return new Response(getRobotsTxt(sitemapURL));
};

