"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { GlareCard } from "./glare-card";
import formatString from "@/utils/formatString";
import { LinkItemType } from "@/data/Projects";
import { LinkPreview } from "./link-preview";

export const AnimatedTooltipLink = ({ items }: { items: LinkItemType[] }) => {  
  return (
    <>
      {items.map((item, idx) => (
        <LinkPreview url={item.url} key={idx}>
          <div
            className="relative  flex flex-row items-center justify-center gap-4"            
          >            
            <div>
              <GlareCard
                className="flex flex-row items-center justify-center gap-4 px-4"
                width="160px"
                height="60px"
              >
                <Image src={item.icon} alt={item.name} width={20} height={20} />

                <p className=" text-white font-semibold text-md">
                  {/* {formatString(item.name, 8)} */}
                  {item.name}
                </p>
              </GlareCard>
            </div>
          </div>
        </LinkPreview>
      ))}
    </>
  );
};
