"use client";

/* Next.js 13에서 useRouter는 아래와 같이 변경됨:
- useRouter 훅은 next/navigation 으로 import해야 함 (next/router X)
- pathname string은 usePathname() 으로 대체됨
- query 객체는 useParams() 및 useSearchParams() 으로 대체됨
- router.events는 현재 지원되지 않음

// 따라서 책에서는  다음과 같이 구표준으로 안내했으나,
import { useRouter } from "next/router";
...
const { query } = useRouter();
*/


// Next 13 이상에서는 이와 같이 사용해야 함
import { useParams, useSearchParams } from "next/navigation"

export default function Greetings() {
  const params = useParams();
  const search_params = useSearchParams();
  console.log(params);
  console.log(search_params.get("learning_nextjs"));
  if (!params.name) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          로그인 시도 중...
        </div>
      </div>
    </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          정상적으로 로그인되었습니다!
        </div>
        {params.name}님, 환영합니다!
      </div>
    </main>
  )
}