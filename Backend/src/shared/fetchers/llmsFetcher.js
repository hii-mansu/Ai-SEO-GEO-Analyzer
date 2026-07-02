import fileFetcher from './fileFetcher.js';

const llmsFetcher = (url)=>{
    return fileFetcher(url, '/llms.txt');
};

export default llmsFetcher;