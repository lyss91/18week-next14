import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Link href={"/"}>홈</Link>
        &nbsp;
        <Link href={"/search?keword=아이유"}>검색 /search?keword=아이유 </Link>
        &nbsp;
        <Link href={"/good/1"}>제품상세 /good/1 </Link>
        &nbsp;
        <button>홈으로 이동하기</button>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </>
  );
}
