import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const sendMessageApi = async (message) => {
  try {
    const url = `${API_URL}/chat`;
    const response = await axios.post(url, { message });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
