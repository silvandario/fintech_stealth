"use server";

import { NextRequest, NextResponse } from "next/server";
import openai, { askQuestion } from "@/lib/utils"



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