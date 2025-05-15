export default async function handler(req, res) {
  const response = await fetch(
    "https://router.huggingface.co/novita/v3/openai/chat/completions",
    {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.hf_api_key}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            provider: "novita",
            model: "google/flan-t5-small",
            messages: [
                {
                    role: "user",
                    content: "How many 'G's in 'huggingface'?",
                },
            ],
        }),
    }
);
console.log(await response.json());
}