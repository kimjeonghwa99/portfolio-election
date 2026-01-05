import { promises as fs } from "fs";
import path from "path";

const root = process.cwd();

export async function readJson<T>(relPath: string, fallback: T): Promise<T> {
  const p = path.join(root, relPath);
  try {
    const raw = await fs.readFile(p, "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function writeJson<T>(relPath: string, data: T): Promise<void> {
  const p = path.join(root, relPath);
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, JSON.stringify(data, null, 2), "utf-8");
}

export function uuid(): string {
  // 포폴용 간단 UUID (충분)
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
