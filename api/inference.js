export default async function handler(req, res) {
    const { input } = req.body;
  
    const hfRes = await fetch('https://api-inference.huggingface.co/models/deepseek-ai/DeepSeek-V3-0324', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.hf_api_key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: input }),
    });
    
    res.status(200).send('Hello from Vercel!');
    const data = await hfRes.json();
    res.status(200).json(data);
  }