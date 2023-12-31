import { Metadata } from "next";


export const metadata: Metadata = {
  title: "챕터 #3: 연락처" ,
  description: "더 이상의 자세한 설명은 생략한다.",
}


export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <ul>
          <li>닉네임: 악동분홍토끼</li>
          <li>이메일: pinkrabbit@ravit.co.kr</li>
          <li>비고: -</li>
          </ul> 
        </div>
      </div>
    </main>
  )
}