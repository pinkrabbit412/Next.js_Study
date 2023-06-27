import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";


// 역시 Next.js 13에서는 <Head> 쓰면 안 됨
export const metadata: Metadata = {
  title: "챕터 #3: 홈페이지" ,
  description: "더 이상의 자세한 설명은 생략한다.",
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          이 페이지는 홈 페이지입니다.
        </p>
          <ul>
            <li><Link href="/">홈</Link></li>
            <li><Link href="/posts">포스트</Link></li>
            {/* 다음 줄도 구표준으로 작성되어 있었는데, preload가 아닌 prefetch를 사용해야 함!*/}
            <li><Link href="/contact" prefetch={false}>Contacts</Link></li>
            <li><Link href="/posts/이달의 요리?post_id=1" prefetch={false}>이달의 요리</Link></li>
            {/* Link 대신 Router.push도 이용할 수 있음 */}
          </ul>
      </div>
      <div style={{width: "100vw", height: "20vh", position: "relative"}}>
        <Image 
          src="https://ravit.co.kr/image/schoolImage/univFront_dark.png" 
          alt="광운대학교 80주년기념관"
          fill={true}
          priority={true}
        />
      </div>
    </main>
  );
}
