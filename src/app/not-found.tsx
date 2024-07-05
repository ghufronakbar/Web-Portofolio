"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <Image src="/images/404.png" alt="404" width={600} height={600} />
        <div className="flex flex-row gap-4 items-center">
          <div className="text-2xl font-bold">404</div>
          <div>|</div>
          <div className="text-2xl font-normal">What are you looking for?</div>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <div className="text-l font-normal">Return to</div>
          <div className="text-l font-normal text-blue-500" onClick={() => router.push("/")}>Portofolio</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
