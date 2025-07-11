
export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (baseUrl: string): string => {
  const entries: SitemapEntry[] = [
    {
      url: baseUrl,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/articulo/optimizar-inventario-reducir-costos`,
      lastmod: '2024-12-15',
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/articulo/fidelizar-clientes-pos-inteligente`,
      lastmod: '2024-12-12',
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/articulo/analisis-ventas-kpis-negocio`,
      lastmod: '2024-12-10',
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/articulo/gestion-productos-caos-control-total`,
      lastmod: '2024-12-08',
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/articulo/marketing-punto-venta-convierte-visitas-ventas`,
      lastmod: '2024-12-05',
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/articulo/seguridad-sistemas-pos-protege-negocio-clientes`,
      lastmod: '2024-12-03',
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/articulo/inventario-estacional-planifica-grandes-retailers`,
      lastmod: '2024-12-01',
      changefreq: 'monthly',
      priority: 0.9
    }
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
};

export const downloadSitemap = (baseUrl: string = window.location.origin) => {
  const sitemapContent = generateSitemap(baseUrl);
  const blob = new Blob([sitemapContent], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
