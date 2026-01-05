import { NextResponse } from "next/server";
import { setAdminSession, clearAdminSession } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { username, password } = body ?? {};

  // 포폴용 고정 계정 (실서비스 아님)
  if (username === "admin" && password === "admin1234") {
    setAdminSession();
    return NextResponse.json({ ok: true });
  }

  clearAdminSession();
  return NextResponse.json({ ok: false, message: "Invalid credentials" }, { status: 401 });
}
