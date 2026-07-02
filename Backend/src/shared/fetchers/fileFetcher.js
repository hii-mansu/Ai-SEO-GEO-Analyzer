import axios from "axios";

const fileFetcher = async (baseUrl, filePath) => {
  try {
    const fileUrl = new URL(filePath, baseUrl).href;

    const response = await axios.get(fileUrl, {
      timeout: 10000,
      headers: {
        "User-Agent": "SEO-GEO-Analyzer/1.0",
      },
    });


    return {
      exists: true,
      url: fileUrl,
      content: response.data,
      statusCode: response.status,
    };
  } catch (error) {
    return {
      exists: false,
      url: new URL(filePath, baseUrl).href,
      content: null,
      statusCode: error.response?.status ?? null,
    };
  }
};

export default fileFetcher;