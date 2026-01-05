import { cookies } from "next/headers";

const COOKIE_NAME = "demo_admin";
const DEMO_TOKEN = "ok";

export function setAdminSession() {
  cookies().set(COOKIE_NAME, DEMO_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

export function clearAdminSession() {
  cookies().delete(COOKIE_NAME);
}

export function isAdmin(): boolean {
  return cookies().get(COOKIE_NAME)?.value === DEMO_TOKEN;
}
