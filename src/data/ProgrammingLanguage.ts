export type ProgrammingLanguageType = {  
  name: string;
  image: string;
  percentage: number;
}

const ProgrammingLanguage: ProgrammingLanguageType[] = [
  {    
    name: "NodeJS",
    image: "/images/logo/js.svg",
    percentage: 80,
  },
  {
    name: "TypeScript",
    image: "/images/logo/ts.webp",
    percentage: 60,
  },
  {
    name: "PHP",
    image: "/images/logo/php.png",
    percentage: 50,
  },
  {
    name: "React",
    image: "/images/logo/react.png",
    percentage: 70,
  },
  {
    name: "ExpressJS",
    image: "/images/logo/express.png",
    percentage: 60,
  },
  {
    name: "Kotlin",
    image: "/images/logo/kotlin.png",
    percentage: 60,
  },
  {
    name: "Flutter",
    image: "/images/logo/flutter.png",
    percentage: 40,
  },
  {
    name: "React Native",
    image: "/images/logo/rn.png",
    percentage: 60,
  },
];

export default ProgrammingLanguage;
