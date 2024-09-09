"use client";

import Image from "next/image";
import Link from "next/link";

const NotFound = () => {  
  return (
    <div className="flex justify-center items-center h-screen w-screen fixed z-40 bg-transparent" >
      <div className="flex flex-col items-center gap-4">
        <Image src="/images/404.png" alt="404" width={800} height={800} className="object-cover w-full" />
        <div className="flex flex-row gap-4 items-center">
          <div className="text-2xl font-bold">404</div>
          <div>|</div>
          <div className="text-2xl font-normal">What are you looking for?</div>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <div className="text-l font-normal">Return to</div>
          <Link  className="text-l font-normal text-blue-500 curson-pointer" href={'/'}>Portofolio</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
