import { InferenceClient } from "@huggingface/inference";

export default async function handler(req, res) {
  const client = new InferenceClient(`${process.env.hf_api_key}`);
  
  const chatCompletion = await client.chatCompletion({
      provider: "novita",
      model: "Qwen/Qwen3-235B-A22B",
      messages: [
          {
              role: "user",
              content: "What is the capital of France?",
          },
      ],
      max_tokens: 512,
  });
  
  console.log(chatCompletion.choices[0].message);
}