export default async function handler(req, res) {
  // Allow CORS from your GitHub Pages frontend
  res.setHeader("Access-Control-Allow-Origin", "https://notdevinle.github.io");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Process actual POST request
  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4-turbo",
        messages: [
          {
            role: "user",
            content: "How many 'G's in 'huggingface'?",
          },
        ],
      }),
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
