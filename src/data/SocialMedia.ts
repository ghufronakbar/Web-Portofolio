export type SocialMediaType = {  
  type: string;
  icon: string;
  url: string;
}

const SocialMedia: SocialMediaType[] = [
  {
    type: "Instagram",
    icon: "/icons/instagram.png",
    url: "https://instagram.com/ghufronakbar_",
  },
  {
    type: "Github",
    icon: "/icons/github.png",
    url: "https://github.com/lanstheprodigy",
  },
  {
    type: "LinkedIn",
    icon: "/icons/linkedin.png",
    url: "https://linkedin.com/in/ghufronakbar",
  },
];

export default SocialMedia;
