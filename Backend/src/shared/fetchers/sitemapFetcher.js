import fileFetcher from './fileFetcher.js';

const sitemapFetcher = (url)=>{
    return fileFetcher(url, '/sitemap.xml');
};

export default sitemapFetcher;