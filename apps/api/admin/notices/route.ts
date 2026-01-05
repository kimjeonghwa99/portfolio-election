import { NextResponse } from "next/server";
import { readJson, writeJson, uuid } from "@/lib/storage";
import type { Notice } from "@/lib/types";
import { isAdmin } from "@/lib/auth";

const FILE = "data/notices.json";

export async function GET() {
  const notices = await readJson<Notice[]>(FILE, []);
  // 최신순
  notices.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return NextResponse.json({ notices });
}

export async function POST(req: Request) {
  if (!isAdmin()) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { title, body: content } = body ?? {};
  if (!title || !content) return NextResponse.json({ message: "title/body required" }, { status: 400 });

  const notices = await readJson<Notice[]>(FILE, []);
  const now = new Date().toISOString();
  const n: Notice = { id: uuid(), title
