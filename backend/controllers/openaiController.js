const { AbortController } = require('abort-controller');
require('dotenv').config();

// Initialize the AbortController if needed
const controller = new AbortController();

const OpenAI = require('openai');

async function generateResponse(req, res) {
  let { keyNumber } = req.body;
  console.log(keyNumber)

  let openai;
  
  if (keyNumber === 1) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY_1,
    });
  } else if (keyNumber === 2) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY_2,
    });
  } else if (keyNumber === 3) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY_3,
    });
  }

  try {
    console.log('req.body is', req.body)

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: "return the ONLY number '42' in string format with no other characters, information or pleasantries",
        },
      ],
      temperature: 1,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // Handle the response here
    const generatedResponse = response.choices[0].message.content;
    return res.status(200).json({ generatedResponse });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: error
      });
  }
}

module.exports = generateResponse;
