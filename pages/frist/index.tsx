import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Frist() {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [text, setText] = useState<string>("");

  // 上传图片
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      const base64String = event.target?.result as string;
      setImageSrc(base64String);
    };
  };
  
  const handler = () => {
    fetch("/api/ocr", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ image: imageSrc })
    })
      .then((res) => res.json())
      .then((data) => {
        setText(
          data?.message?.words_result?.map((item) => item.words).join("")
        );
      });
  };
  return (
    <>
      <Head>
        <title>OCR图片识别</title>
      </Head>
      <div className="h-screen p-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link legacyBehavior href="/">
                Home
              </Link>
            </li>
            <li>ORC识别</li>
          </ul>
        </div>
        <div className="flex items-center w-full justify-center mt-10 flex-row">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={onChange}
          />
          <button onClick={handler} className="btn btn-primary ml-2">
            识别
          </button>
        </div>
        {imageSrc && (
          <div className="flex items-center w-full justify-center mt-10">
            <img src={imageSrc} />
          </div>
        )}
        <div className="flex justify-center w-full mt-10">
          识别的字：<span className="font-bold">{text}</span>
        </div>
      </div>
    </>
  );
}
