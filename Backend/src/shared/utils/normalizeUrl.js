const normalizeUrl = (url) => {
    url = url.trim();

    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }

    return `https://${url}`;
};

export default normalizeUrl;