//chat.ts
"use server";

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const askQuestion = async (query: string, transactions: any[]) => {
  const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
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
      model: "gpt-4",
      messages,
      temperature: 0.7,
    });

    return response.choices[0]?.message?.content || "No response";
  } catch (error: any) {
    console.error("Error with OpenAI API:", error.response?.data || error.message);
    throw new Error("Error processing the request with OpenAI.");
  }
};



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

