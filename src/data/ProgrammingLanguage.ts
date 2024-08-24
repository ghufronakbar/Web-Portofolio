interface ProgrammingLanguageType {
  id: number;
  name: string;
  image: string;
  percentage: number;
}

const ProgrammingLanguage: ProgrammingLanguageType[] = [
  {
    id: 3,
    name: "JavaScript",
    image: "/images/logo/js.svg",
    percentage: 80,
  },
  {
    id: 4,
    name: "TypeScript",
    image: "/images/logo/ts.webp",
    percentage: 60,
  },
  {
    id: 5,
    name: "PHP",
    image: "/images/logo/php.png",
    percentage: 50,
  },
  {
    id: 6,
    name: "React",
    image: "/images/logo/react.png",
    percentage: 70,
  },
  {
    id: 7,
    name: "ExpressJS",
    image: "/images/logo/express.png",
    percentage: 60,
  },
  {
    id: 8,
    name: "Kotlin",
    image: "/images/logo/kotlin.png",
    percentage: 60,
  },
  {
    id: 9,
    name: "Flutter",
    image: "/images/logo/flutter.png",
    percentage: 40,
  },
  {
    id: 11,
    name: "React Native",
    image: "/images/logo/rn.png",
    percentage: 60,
  },
];

export default ProgrammingLanguage;
