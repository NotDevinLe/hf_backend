export default async function handler(req, res) {
  const response = await fetch("https://api-inference.huggingface.co/models/tiiuae/falcon-rw-1b", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.hf_api_key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: "Hello, how are you?",
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}