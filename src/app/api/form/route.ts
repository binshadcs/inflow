import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "server is up!" });
}
export async function POST() {
    return NextResponse.json({ message: "server is up from post!" });
}