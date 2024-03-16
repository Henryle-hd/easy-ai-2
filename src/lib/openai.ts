import { Configuration, OpenAIApi } from "openai-edge";

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error("openai key is not available");
}

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);
export async function generateImagePrompt(name: string) {
  try {
    const response = await openai.createChatCompletion({
      model: "text-ada-001",
      messages: [
        {
          role: "system",
          content:
            "You are an creative and helpful AI assistant capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALL API to generate a thumbnail. The description should be minimalistic and flat styled"
        },
        {
          role: "user",
          content: `Please generate a thumbnail description for my notebook titles ${name}`
        }
      ]
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `API request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    if (!data.choices || data.choices.length === 0) {
      throw new Error("No choices found in the response.");
    }

    const image_description = data.choices[0].messages[0].content;
    return image_description as string;

    // const data = await response.json();
    // // Check if data.choices exists and has at least one element
    // if (data.choices && data.choices.length > 0) {
    //   // Check if data.choices[0].messages exists
    //   if (data.choices[0].messages) {
    //     const image_description = data.choices[0].messages[0].content;
    //     return image_description as string;
    //   }
    // } else {
    //   throw new Error("No choices found in the response.");
    // }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function generateImage() {}
