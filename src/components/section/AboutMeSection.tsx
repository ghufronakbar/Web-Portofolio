"use client";

import AboutMe from "@/data/AboutMe";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewritter-effect";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

const AboutMeSection = () => {
  const name = AboutMe.name
    .split(" ")
    .map((text) => ({ text: text, className: "text-4xl font-bold" }));
  const title = AboutMe.title;

  return (
    <div className="flex flex-col justify-between md:items-start gap-5">
      <div className="flex md:flex-row md:items-center gap-10 flex-col md:self-center">
        <div className="flex justify-center mt-8">
          <div className="relative inline-block">
            <Image
              src={AboutMe.picture}
              alt="Ghufron Akbar Maulana"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col -gap-4">
          <h1 className="text-4xl font-bold mt-4">Hi! I&apos;m</h1>
          <TypewriterEffectSmooth words={name} />
          <h1 className="text-1xl font-semibold">
            <FlipWords words={title} />
          </h1>
        </div>
      </div>
      <div className="mt-4">{AboutMe.description} </div>
      <Link
        className="w-fit shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
        href={"/api/download"}
        prefetch={false}
        target="_blank"
      >
        Download CV
      </Link>
    </div>
  );
};

export default AboutMeSection;
