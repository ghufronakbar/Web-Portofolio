import { metadata } from "@/app/layout";
import Projects from "@/data/Projects";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const project = Projects.find((project) => project.slug === slug);
  if(!project) return metadata;
  return {
    title: project?.name,
    description: project?.description,
    keywords: project?.keywords,
    openGraph: {
      title: project?.name,
      description: project?.description,
      url: `https://www.lanstheprodigy.vercel.app/project/${slug}`,
      images: project?.images[0],
      type: "website",
      siteName: "Lans The Prodigy",
      locale: "id-ID",
    },
    twitter: {
      title: project?.name,
      description: project?.description,
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
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    icons: {
      shortcut: "/favicon.ico",
    },
    authors: [{ name: "Lans The Prodigy" }],
  };
}

const LayoutProjectDetail = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default LayoutProjectDetail;
