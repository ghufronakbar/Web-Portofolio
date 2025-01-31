import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import NavItems from "@/data/NavItems";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import UnderConstruction from "@/components/notification/UnderConstruction";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lans The Prodigy | Ghufron Akbar",
  description: "Ghufron Akbar Portofolio",
  keywords: [
    "Web Portofolio",
    "Lans The Prodigy",
    "Ghufron Akbar",
    "Ghufron",
    "Akbar",
    "Ghufron Akbar Maulana",
    "Lans",
    "Fullstack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "React",
    "JavaScript",
    "TypeScript",
    "Vercel",
    "Web Portofolio",
  ],
  authors: [
    { name: "Lans The Prodigy", url: "https://lanstheprodigy.vercel.app" },
  ],
  creator: "Lans The Prodigy",
  publisher: "Lans The Prodigy",
  icons: {
    icon: "/images/letter-l.png",
    shortcut: "/images/letter-l.png",
  },
  openGraph: {
    title: "Lans The Prodigy | Ghufron Akbar",
    description: "Software Engineer",
    url: "https://lanstheprodigy.vercel.app",
    siteName: "Lans The Prodigy",
    images: [
      {
        url: "https://lanstheprodigy.vercel.app",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id-ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <html lang="en">        
        <body className={`${inter.className} hide-scrollbar`}>
          <FloatingNav navItems={NavItems} />
            {/* <BackgroundBeams /> */}
            <Spotlight
              className="fixed h-full w-full transition-all duration-300 ease-in-out -z-50"
              fill="white"
            />
            {children}
          {/* <UnderConstruction /> */}
        </body>
      </html>
    </>
  );
};

export default RootLayout;
