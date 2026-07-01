import axios from "axios";
import AppError from "../errors/appError.js";
import { startsWith } from "zod";

const websiteFetcher = async (url) => {
  try {
    const response = await axios.get(url, {
      timeout: 15000,
      maxRedirects: 5,
      headers: {
        "User-Agent": "SEO-GEO-Analyzer/1.0",
      },
    });

    if(response.headers["content-type"] !== startsWith("text/html")){
      throw new AppError("This is not HTML page.", 400);
    }

    return {
      html: response.data,
      statusCode: response.status,
      finalUrl: response.request?.res?.responseUrl ?? url,
      headers: response.headers,
    };
  } catch (error) {
    console.error(error.message);
    throw new AppError("Unable to fetch.", "502");
  }
};


export default websiteFetcher;