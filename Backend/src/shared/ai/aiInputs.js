const buildAiInput = (report) => {
  return {
    page: report.page,
    meta: report.meta,
    content: report.content,

    headings: report.headings,

    images: {
      total: report.images.total,
      withoutAlt: report.images.withoutAlt,
    },

    links: {
      internal: report.links.internal,
      external: report.links.external,
    },

    openGraph: {
      exists: !!report.openGraph.title,
      ...report.openGraph,
    },

    twitter: {
      exists: !!report.twitter.card,
      ...report.twitter,
    },

    structuredData: report.structuredData,

    robots: report.robots,

    sitemap: {
      exists:report.sitemap.exists,
      url:report.sitemap.url
    },

    llms: report.llms,
  };
};

export default buildAiInput;