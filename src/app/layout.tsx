import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import NavItems from "@/data/NavItems";
import { TracingBeam } from "@/components/ui/tracing-beam";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lans The Prodigy | Ghufron Akbar",
  viewport: "width=device-width, initial-scale=1.0",
  description: "Ghufron Akbar Portofolio",
  keywords: [
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
  themeColor: "#ffffff",
  openGraph: {
    title: "Lans The Prodigy | Ghufron Akbar",
    description: "Software Engineer",
    url: "https://lanstheprodigy.vercel.app",
    siteName: "Lans The Prodigy",
    images: [
      {
        url: "https://lans-the-prodigy.vercel.app/api/og",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
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
  const navItems = NavItems;
  return (
    <>
      <html lang="en">
        <head>
        <link rel="icon" href="/images/letter-l.png" sizes="any" />
        </head>
        <body className={inter.className}>
          <FloatingNav navItems={navItems} />
          <TracingBeam className="px-6">{children}</TracingBeam>
        </body>
      </html>
    </>
  );
}

export default RootLayout