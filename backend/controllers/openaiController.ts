import { Configuration, OpenAIApi } from "openai";
import { Request, Response } from "express";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateImage = async (req: Request, res: Response) => {
    const {prompt, size} = req.body
    const imageSize = size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024"

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: imageSize,
    });

    const imageURL = response.data.data[0].url;

    res.status(200).json({
      succcess: true,
      data: imageURL,
    });
  } catch (error: any) {
    console.log(error)
    res.status(400).json({
      succcess: false,
      error: error.response.data.error.message || "Your image cannot be generated",
    });
  }
};
