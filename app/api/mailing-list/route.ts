import { NextResponse } from "next/server";
import { LoopsClient } from "loops";

export async function POST(req: Request) {
  const { email } = await req.json();
  try {
    const loops = new LoopsClient(process.env.LOOPS_API_KEY as string);
    const resp = await loops.createContact(email);
    return NextResponse.json({ message: resp }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
