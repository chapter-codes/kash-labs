import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log("GET /api/projects");

  return NextResponse.json({ message: "GET /api/projects", status: 200 });
}

// POST /api/projects
