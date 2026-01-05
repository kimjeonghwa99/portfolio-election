'use client';

import { useState } from 'react';

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <main style={{ padding: 40 }}>
      <h2>관리자 로그인</h2>
      <input placeholder="ID" onChange={e => setId(e.target.value)} />
      <br />
      <input type="password" placeholder="PW" onChange={e => setPw(e.target.value)} />
      <br />
      <button>로그인</button>
    </main>
  );
}
