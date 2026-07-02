const normalizeUrl = (url) => {
    url = url.trim();

    if (url.startsWith("http://") || url.startsWith("https://")) {
        return new URL(url).origin;;
    }

    return new URL(`https://${url}`).origin;
};

export default normalizeUrl;