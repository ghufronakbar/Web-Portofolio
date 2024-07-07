"use client";

import AboutMe from "@/data/AboutMe";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewritter-effect";
import axios from "axios";
import { useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";

const AboutMeSection = () => {
  const name = AboutMe.name
    .split(" ")
    .map((text) => ({ text: text, className: "text-4xl font-bold" }));
  const title = useState<string[]>(AboutMe.title);

  const downloadCV = async () => {
    try {
      const response = await axios.get("/api/download", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "cv_ghufron_akbar.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };
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
          <h1 className="text-4xl font-bold mt-4">Hi! I'm</h1>
          <TypewriterEffectSmooth words={name} />
          <h1 className="text-1xl font-semibold">
            <FlipWords words={title[0]} />
          </h1>
        </div>
      </div>
      <div className="mt-4">{AboutMe.description} </div>
      <button
        className="bg-blue-500 hover:bg-black hover:text-blue-500 text-white font-bold py-2 px-4 rounded mt-4 outline outline-2 outline-blue-500 transition-all duration-300 self-start"
        onClick={() => downloadCV()}
      >
        Download CV
      </button>
    </div>
  );
};

export default AboutMeSection;
