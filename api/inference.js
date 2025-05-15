import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("hf_xxxxxxxxxxxxxxxxxxxxxxxx");

const chatCompletion = await client.chatCompletion({
    provider: "novita",
    model: "deepseek-ai/DeepSeek-V3-0324",
    messages: [
        {
            role: "user",
            content: "How many 'G's in 'huggingface'?",
        },
    ],
});

console.log(chatCompletion.choices[0].message);