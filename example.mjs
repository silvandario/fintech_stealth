import OpenAI from "openai";

async function getCompletion() {
    const openai = new OpenAI({ apiKey: "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" });
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
