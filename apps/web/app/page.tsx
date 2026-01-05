import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Portfolio Campaign Platform</h1>

      <p>
        본 프로젝트는 포트폴리오용 데모이며,
        실제 선거·정당·후보와 무관한 가상 캠페인입니다.
      </p>

      <ul>
        <li><Link href="/about">캠페인 소개</Link></li>
        <li><Link href="/notices">공지사항</Link></li>
      </ul>
    </main>
  );
}
