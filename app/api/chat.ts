import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

// Initialize OpenAI instance
// TODO - gitignore
//TODO - REMOVE HARD CODED API KEY
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  //TODO - REMOVE ALLOW BROWSER
  dangerouslyAllowBrowser: false
});

// Utility function to fetch chat response
export const askQuestion = async (query: string, transactions: any[]) => {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: "You are a financial assistant that helps analyze user transactions.",
    },
    {
      role: "user",
      content: `Here are my recent transactions: ${JSON.stringify(
        transactions
      )}. ${query}`,
    },
  ];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo"
      messages,
      temperature: 0.7,
    });

    return response.choices[0]?.message?.content || "No response";
  } catch (error: any) {
    console.error("Error with OpenAI API:", error.response?.data || error.message);
    throw new Error("Error processing the request with OpenAI.");
  }
};

// API route handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query, transactions } = body;

    if (!query || !transactions) {
      return NextResponse.json(
        { error: "Query and transactions are required." },
        { status: 400 }
      );
    }

    const result = await askQuestion(query, transactions);
    return NextResponse.json({ response: result });
  } catch (error: any) {
    console.error("Error in chat API:", error.message || error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}

export const config = {
  runtime: "edge",
};
