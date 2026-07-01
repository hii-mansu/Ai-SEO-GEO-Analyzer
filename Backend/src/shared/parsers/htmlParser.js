import * as cheerio from "cheerio";

const htmlParser = ({ html, finalUrl }) => {
  const $ = cheerio.load(html);

  const title = $("title").text().trim() || null;

  const language = $("html").attr("lang") || null;

  const canonical =
    $('link[rel="canonical"]').attr("href") || null;


  const description =
    $('meta[name="description"]').attr("content")?.trim() || null;

  const charset =
    $('meta[charset]').attr("charset") || null;

  const viewport =
    $('meta[name="viewport"]').attr("content") || null;


  const faviconPath =
    $('link[rel*="icon"]').attr("href") || null;

  const favicon = {
    exists: !!faviconPath,
    url: faviconPath
      ? new URL(faviconPath, finalUrl).href
      : null,
  };


  return {
    page: {
      title,
      language,
      canonical,
      favicon,
    },

    meta: {
      description,
      charset,
      viewport,
    },
  };
};

export default htmlParser;