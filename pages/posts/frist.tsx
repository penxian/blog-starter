import Head from "next/head";
import Link from "next/link";
export default function Frist() {
  return (
    <>
      <style jsx>{`
        .gohome {
          font-size: 20px;
        }
      `}</style>
      <Head>
        <title>这是我的第一个页面</title>
      </Head>
      <div className="bg-rose-900 h-screen">
        <h1>新版本</h1>
        <Link legacyBehavior href="/">
          <a className="gohome underline hover:text-blue-600 duration-200 transition-colors">
            go home
          </a>
        </Link>
      </div>
    </>
  );
}
