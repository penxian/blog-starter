import { CMS_NAME } from "../lib/constants";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        BigGo
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        专注前端开发10年, 承接各种前端项目, 有需要请联系
      </h4>
    </section>
  );
};

export default Intro;
