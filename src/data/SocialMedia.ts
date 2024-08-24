interface SocialMediaType {
  id: number;
  type: string;
  icon: string;
  url: string;
}

const SocialMedia: SocialMediaType[] = [
  {
    id: 1,
    type: "Instagram",
    icon: "/icons/instagram.png",
    url: "https://instagram.com/ghufronakbar_",
  },
  {
    id: 2,
    type: "Github",
    icon: "/icons/github.png",
    url: "https://github.com/lanstheprodigy",
  },
  {
    id: 3,
    type: "LinkedIn",
    icon: "/icons/linkedin.png",
    url: "https://linkedin.com/in/ghufronakbar",
  },
];

export default SocialMedia;
