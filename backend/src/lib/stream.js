import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

console.log("Stream API Key:", apiKey); // Debug log
console.log("Stream API Secret:", apiSecret ? "Present" : "Missing"); // Debug log

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    console.log("Upserting Stream user:", userData); // Debug log
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    console.log("Generating token for user ID:", userId); // Debug log
    // ensure userId is a string
    const userIdStr = userId.toString();
    const token = streamClient.createToken(userIdStr);
    console.log("Token generated successfully"); // Debug log
    return token;
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};