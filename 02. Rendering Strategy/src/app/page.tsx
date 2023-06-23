import Image from 'next/image'
import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';

// 사용자 정의 컴포넌트
import TypeOfWindow from './typeofwindow'


export default function Home() {
	const side = typeof window === "undefined" ? "client" : "server";
  return (
    <main className="flex flex-col justify-between p-24 dark">
			<div className="alert alert-info">이 페이지는 <strong>{side}-side에서 보여지는 중</strong>입니다.</div>
    </main>
  );
}
