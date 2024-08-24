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
import Link from "next/link";
import formatString from "@/utils/formatString";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    type: string;
    url: string;
    icon: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <Link href={item.url} target="_blank" rel="noopener noreferrer" key={item.type} >        
        <div
          className="relative  flex flex-row items-center justify-center gap-4"
          key={item.type}
          onMouseEnter={() => setHoveredIndex(idx + 1)}
          onMouseLeave={() => setHoveredIndex(null)}          
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === idx + 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.type}
                </div>
                <div className="text-white text-xs">{item.url}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <div onMouseMove={handleMouseMove}>
            <GlareCard
              className="flex flex-row items-center justify-center gap-4 px-4"
              width="160px"
              height="60px"
            >
              <Image src={item.icon} alt={item.type} width={20} height={20} />

              <p className=" text-white font-semibold text-md">                
                {formatString(item.type,8)}
              </p>
            </GlareCard>
          </div>
        </div>
        </Link>
      ))}
    </>
  );
};
