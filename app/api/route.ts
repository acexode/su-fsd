import { NextResponse } from "next/server";

export async function GET() {

  NextResponse.json({ message: "Hello World!" });
 
}
