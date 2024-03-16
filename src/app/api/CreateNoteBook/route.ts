// /api/CreateNoteBook

import { generateImagePrompt } from "@/lib/openai";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("unauthorized", { status: 401 });
  }
  const body = await req.json();
  const { name } = body;
  const image_decription = await generateImagePrompt(name);

  console.log(image_decription);
  return new NextResponse("ok");
}
