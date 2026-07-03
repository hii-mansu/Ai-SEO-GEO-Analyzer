import { GoogleGenAI } from "@google/genai";
import env from "../../config/env.js";
import analysisPrompt from "./prompt.js";

const ai = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
});

const analyzeWebsite = async ({ report, url }) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: analysisPrompt({ report, url }),
  });

  return JSON.parse(response.text);;
};

export default analyzeWebsite;