"use client";

import Image from "next/image";

import { useState } from "react";

const UnderConstruction = () => {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <>
      {isShow && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 mx-6"
          onClick={() => setIsShow(false)}
        >
          <div className="bg-black px-6 py-12 rounded-lg shadow-lg flex flex-col items-center md:gap-4 gap-2 border border-white/[0.2]">
            <Image
              src="/images/under-construction.png"
              alt="404"
              width={600}
              height={600}
              className="w-1/2"
            />
            <div className="flex flex-row gap-2 md:gap-4 items-center">
              <div className="text-xl md:text-2xl font-bold">Alert</div>
              <div className="text-xl md:text-2xl font-normal">|</div>
              <div className="text-xl md:text-2xl font-normal">
                Under Construction
              </div>
            </div>
            <div className="md:text-l font-normal">
              Some images may not work properly
            </div>
            <div className="relative flex flex-row gap-1 items-center -mt-2">
              <div className="text-l font-normal">Let&apos;s watch</div>
              <div
                className="text-l font-normal text-blue-500 cursor-pointer"
                onClick={() => {
                  setIsShow(false);
                }}
              >
                My Portfolio
              </div>
            </div>
            <button
              className="text-l font-normal text-white bg-blue-500 px-4 py-2 rounded-lg mt-4"
              onClick={() => {
                setIsShow(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UnderConstruction;
