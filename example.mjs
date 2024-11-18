import OpenAI from "openai";

async function getCompletion() {
    const apiKey = NEXT_PUBLIC_OPENAI_API_KEY;
    const openai = new OpenAI({ apiKey: apiKey });
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant for a demonstration. You can make up numbers reasonable for a student" },
            { role: "user", content: "How much did I spend on coffee?" },
        ],
    });

    console.log(completion.choices[0].message);
}

getCompletion();
