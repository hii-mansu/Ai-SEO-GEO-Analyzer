import * as cheerio from "cheerio";

const seoParser = (html) => {
  const $ = cheerio.load(html);


  const headings = {};

  ["h1", "h2", "h3", "h4", "h5", "h6"].forEach((tag) => {
    const texts = [];

    $(tag).each((_, element) => {
      const text = $(element).text().trim();

      if (text) {
        texts.push(text);
      }
    });

    headings[tag] = {
      count: texts.length,
      texts,
    };
  });


  const images = {
    total: 0,
    withAlt: 0,
    withoutAlt: 0,
    lazyLoaded: 0,
  };

  $("img").each((_, img) => {
    images.total++;

    const alt = $(img).attr("alt");

    if (alt && alt.trim() !== "") {
      images.withAlt++;
    } else {
      images.withoutAlt++;
    }

    if (
      $(img).attr("loading") === "lazy" ||
      $(img).attr("data-src") ||
      $(img).attr("data-lazy-src")
    ) {
      images.lazyLoaded++;
    }
  });


  const links = {
    total: 0,
    internal: 0,
    external: 0,
    nofollow: 0,
  };

  $("a[href]").each((_, link) => {
    links.total++;

    const href = $(link).attr("href") || "";

    if (
      href.startsWith("/") ||
      href.startsWith("#")
    ) {
      links.internal++;
    } else if (
      href.startsWith("http://") ||
      href.startsWith("https://")
    ) {
      links.external++;
    }

    const rel = ($(link).attr("rel") || "").toLowerCase();

    if (rel.includes("nofollow")) {
      links.nofollow++;
    }
  });

  const paragraphs = [];

$("p").each((_, element) => {
  const text = $(element).text().replace(/\s+/g, " ").trim();

  if (text.length > 20) {
    paragraphs.push(text);
  }
});

const limitedParagraphs = paragraphs.slice(0, 20);

const bodyText = $("body")
  .text()
  .replace(/\s+/g, " ")
  .trim();

const wordCount = bodyText
  ? bodyText.split(/\s+/).length
  : 0;

  const openGraph = {
    title:
      $('meta[property="og:title"]').attr("content") || null,

    description:
      $('meta[property="og:description"]').attr("content") || null,

    image:
      $('meta[property="og:image"]').attr("content") || null,

    url:
      $('meta[property="og:url"]').attr("content") || null,
  };

  const twitter = {
    card:
      $('meta[name="twitter:card"]').attr("content") || null,

    title:
      $('meta[name="twitter:title"]').attr("content") || null,

    description:
      $('meta[name="twitter:description"]').attr("content") || null,

    image:
      $('meta[name="twitter:image"]').attr("content") || null,
  };


  const structuredData = [];

  $('script[type="application/ld+json"]').each((_, script) => {
    try {
      const json = JSON.parse($(script).html());

      if (Array.isArray(json)) {
        json.forEach((item) => {
          if (item["@type"]) {
            structuredData.push(item["@type"]);
          }
        });
      } else if (json["@type"]) {
        structuredData.push(json["@type"]);
      }
    } catch {
    }
  });

  return {
    headings,
    content: {
    wordCount,
    paragraphCount: paragraphs.length,
    limitedParagraphs,
},
    images,
    links,
    openGraph,
    twitter,
    structuredData: {
      exists: structuredData.length > 0,
      total: structuredData.length,
      types: structuredData,
    },
  };
};

export default seoParser;