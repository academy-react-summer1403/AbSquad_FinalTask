import axios from "axios";

const API_URL =
  "https://api-inference.huggingface.co/models/nafisehNik/mt5-persian-summary";
const API_KEY = "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"; // Replace this with your actual API key

// Function to get the summary
export const SummarizerApi = async (inputText) => {
  try {
    const response = await axios.post(
      API_URL,
      { inputs: inputText },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const summarizedText = response.data[0].summary_text;
    return summarizedText;
  } catch (error) {
    console.error("Error during API request:", error);
    throw new Error("Failed to fetch summary. Please try again.");
  }
};
