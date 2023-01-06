import { Configuration, OpenAIApi } from "openai"
import {Request, Response} from "express";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

export const generateImage = async (req: Request, res: Response) => {
    try {
        const response = await openai.createImage({
            prompt: "Polar bear on ice skates"
        })
    } catch (error) {
        
    }
}
