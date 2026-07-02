import fileFetcher from './fileFetcher.js';

const robotFetcher = (url)=>{
    return fileFetcher(url, '/robots.txt');
};

export default robotFetcher;