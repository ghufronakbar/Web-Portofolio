"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <Image src="/images/500.png" alt="500" width={600} height={600} />
        <div className="flex flex-row gap-4 items-center">
          <div className="text-2xl font-bold">500</div>
          <div>|</div>
          <div className="text-2xl font-normal">There&apos;s some mistakes :(</div>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <div className="text-l font-normal">Return to</div>
          <div className="text-l font-normal text-blue-500" onClick={() => router.push("/")}>Portofolio</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
