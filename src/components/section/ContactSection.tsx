"use client";

import AboutMe from "@/data/AboutMe";
import Image from "next/image";
import { GlareCard } from "../ui/glare-card";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { useState } from "react";
import PlaceholdersSender from "@/data/PlaceholdersSender";

const ContactSection = () => {
    const [sender, setSender] = useState<string>("");
  
    const handleChangeSender = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSender(e.target.value);
    };
  
    const onSubmitSenderEmail = () => {
      if (sender === "") {
        const alertElement = document.createElement("div");
        alertElement.textContent = "Please enter your name";        
        alertElement.classList.add("fixed", "inset-0", "z-50", "flex", "justify-center", "items-center");
        alertElement.classList.add("bg-black", "bg-opacity-50");
        alertElement.classList.add("mx-6");        
        document.body.appendChild(alertElement);
        setTimeout(() => {
          alertElement.remove();
        }, 2000);
        return;
      }
      window.open(
        `mailto:${AboutMe.email}?subject=Hello from ${sender}&body=Hello, I am interested in working with you.`
      );
    };
  
    const onSubmitSenderWhatsapp = () => {
      if (sender === "") {
        const alertElement = document.createElement("div");
        alertElement.textContent = "Please enter your name";        
        alertElement.classList.add("fixed", "inset-0", "z-50", "flex", "justify-center", "items-center");
        alertElement.classList.add("bg-black", "bg-opacity-50");
        alertElement.classList.add("mx-6");        
        document.body.appendChild(alertElement);
        setTimeout(() => {
          alertElement.remove();
        }, 2000);
        return;
      }
      window.open(
        `${AboutMe.whatsapp}?text=Hello from ${sender}, I am interested in working with you.`
      );
    };
  
    return (
      <div className="flex md:flex-row flex-col justify-between gap-4">
        <div className="flex flex-col items-center justify-between gap-4">
          <h2 className="md:text-6xl text-4xl font-bold">Get To Work With Me</h2>
          <div className="flex flex-col w-full gap-4">
            <PlaceholdersAndVanishInput
              placeholders={PlaceholdersSender}
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
              <p>{AboutMe.phone}</p>
  
              <p
                className="md:text-2xl text-xl md:text-right"
                onClick={() => onSubmitSenderEmail()}
              >
                {AboutMe.email}
              </p>
            </div>
            <p className="md:text-2xl text-xl md:text-right">
              Let&apos;s turn your vision into reality. Reach out today and let&apos;s
              create something remarkable together.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
export default ContactSection  