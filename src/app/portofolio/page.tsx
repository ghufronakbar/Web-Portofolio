"use client";

import AboutMe from "@/data/AboutMe";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Projects from "@/data/Projects";
import axios from "axios";
import { useRouter } from "next/navigation";
import CardProject from "@/components/card/CardProject";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import ProgrammingLanguage from "@/data/ProgrammingLanguage";
import { Spotlight } from "@/components/ui/spotlight";
import { useEffect, useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { GlareCard } from "@/components/ui/glare-card";
import SocialMedia from "@/data/SocialMedia";
import { LinkPreview } from "@/components/ui/link-preview";
import PreviewProjects from "@/data/PreviewProjects";
import { HeroParallax } from "@/components/ui/herro-parallax";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TypewriterEffectSmooth } from "@/components/ui/typewritter-effect";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import PlaceholdersSender from "@/data/PlaceholdersSender";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Portofolio = () => {
  const aboutMe: typeof AboutMe = AboutMe;
  const projects: typeof Projects = Projects;
  const socialMedia: typeof SocialMedia = SocialMedia;
  const previewProjects: typeof PreviewProjects = PreviewProjects;
  const proggramingLanguage: typeof ProgrammingLanguage = ProgrammingLanguage;
  const placeholdersSender: typeof PlaceholdersSender = PlaceholdersSender;
  const router = useRouter();
  const title = useState<string[]>(aboutMe.title);
  const [sender, setSender] = useState<string>("");

  const name = aboutMe.name
    .split(" ")
    .map((text) => ({ text: text, className: "text-4xl font-bold" }));

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

  const handleChangeSender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSender(e.target.value);
  };

  const onSubmitSenderEmail = () => {
    if (sender === "") {
      alert("Please enter your name");
      return;
    }
    window.open(
      `mailto:${aboutMe.email}?subject=Hello from ${sender}&body=Hello, I am interested in working with you.`
    );
  };

  const onSubmitSenderWhatsapp = () => {
    if (sender === "") {
      alert("Please enter your name");
      return;
    }
    window.open(
      `${aboutMe.whatsapp}?text=Hello from ${sender}, I am interested in working with you.`
    );
  };

  return (
    <>
      <div className="flex flex-col justify-between md:px-24 px-6 gap-10 w-full my-12">
        <BackgroundBeams/>
          <Spotlight
            className="absolute top-0 left-0 right-0 z-10"
            fill="white"
          />

        {/* About Me */}
        <div className="flex flex-col justify-between md:items-start gap-5">
          <div className="flex md:flex-row md:items-center gap-10 flex-col md:self-center">
            <div className="flex justify-center mt-8">
              <div className="relative inline-block">
                <Image
                  src={aboutMe.picture}
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
          <div className="mt-4">{aboutMe.description} </div>
          <button
            className="bg-blue-500 hover:bg-black hover:text-blue-500 text-white font-bold py-2 px-4 rounded mt-4 outline outline-2 outline-blue-500 transition-all duration-300 self-start"
            onClick={() => downloadCV()}
          >
            Download CV
          </button>
        </div>

        {/* SOCIAL MEDIA */}

        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold">Social Media</h2>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-4 mt-6 max-w-6xl">
              <AnimatedTooltip items={socialMedia} />
            </div>
          </div>
        </div>

        {/* PREVIEW PROJECTS */}

        <div className="flex flex-col justify-between">
          <div className="w-full">
            <HeroParallax products={previewProjects} />
          </div>
        </div>

        {/* PROJECT PORTOFOLIO */}

        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold">Portofolio</h2>
            <div className="flex flex-row items-center justify-between">
              <p
                onClick={() => {
                  router.push("/project");
                }}
              >
                See All
              </p>
              <BiChevronRight />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 no-margin-xy">
            {projects.slice(0, 3).map((project, index) => (
              <CardProject
                key={project.id}
                id={project.id}
                name={project.name}
                heading={project.heading}
                date={project.date}
                images={project.images}
                onClick={() => {
                  router.push(`/project/${project.id}?name=${project.name}`);
                }}
                className="mt-6"
              />
            ))}
          </div>
        </div>

        {/* PROGRAMMING LANGUAGE */}

        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Programming Language & Framework
            </h2>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="w-full">
              <HoverEffect items={proggramingLanguage} className="mt-6" />
            </div>
          </div>
        </div>

        {/* CONTACT ME */}

        <div className="flex md:flex-row flex-col justify-between gap-4">
          <div className="flex flex-col items-center justify-between gap-4">
            <h2 className="md:text-6xl text-4xl font-bold">
              Get To Work With Me
            </h2>
            <div className="flex flex-col w-full gap-4">
              <PlaceholdersAndVanishInput
                placeholders={placeholdersSender}
                onChange={handleChangeSender}
                onSubmit={onSubmitSenderEmail}
              />
              <div className="flex flex-row items-start gap-4">
              <div onClick={() => onSubmitSenderWhatsapp()}>
                <GlareCard
                  className="flex flex-row items-center justify-center gap-4"
                  width="60px"
                  height="60px"
                >
                  <Image
                    src="/icons/whatsapp.png"
                    alt="Whatsapp"
                    width={30}
                    height={30}
                  />
                </GlareCard>
              </div>
              <div onClick={() => onSubmitSenderEmail()}>
                <GlareCard
                  className="flex flex-row items-center justify-center gap-4"
                  width="60px"
                  height="60px"
                >
                  <Image
                    src="/icons/email.png"
                    alt="Email"
                    width={30}
                    height={30}
                  />
                </GlareCard>
              </div>

              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col justify-between gap-4">
              <div
                onClick={() => onSubmitSenderWhatsapp()}
                className="md:text-2xl text-xl md:text-right"
              >
                <p>{aboutMe.phone}</p>

                <p
                  className="md:text-2xl text-xl md:text-right"
                  onClick={() => onSubmitSenderEmail()}
                >
                  {aboutMe.email}
                </p>
              </div>
              <p className="md:text-2xl text-xl md:text-right">
                Let's turn your vision into reality. Reach out today and let's
                create something remarkable together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portofolio;
