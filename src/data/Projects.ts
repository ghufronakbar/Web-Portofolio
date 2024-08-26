import { IconMap, IconType, ToolType } from "@/models/Icon";

export type ToolItemType = {
  name: string;
  icon: IconType;
};

export type LinkItemType = {
  name: string;
  url: string;
  icon: IconType;
};

const generateTool = (name: ToolType): ToolItemType => {
  const icon = IconMap[name];
  return { name, icon };
};

const generateUrl = (
  name: string,
  iconName: ToolType,
  url: string
): LinkItemType => {
  const icon = IconMap[iconName];
  return { name, icon, url };
};

const generateImages = (count: number, projectFolder: string): string[] => {
  const prefixFolder = "/images/projects";
  const images: string[] = [];
  for (let i = 1; i <= count; i++) {
    images.push(`${prefixFolder}/${projectFolder}/${i}.png`);
  }
  return images;
};

export type ProjectItemType = {
  slug: string;
  name: string;
  heading: string;
  description: string;
  jobdesc: string;
  date: string;
  types: string[];
  tools: ToolItemType[];
  images: string[];
  links: LinkItemType[];
  keywords: string[];
};

const Projects: ProjectItemType[] = [
  {
    slug: "sampahmas-waste-management-system",
    name: "Sampahmas",
    heading: "Waste Management System",
    description:
      "Sampahmas is a waste management application that is integrated with a waste vending machine. We designed the application in an attractive and easy-to-use manner for various groups. We provide various features such as the location of the nearest machine, redeeming garbage to points so that points can be exchanged for various goods or vouchers in the mart menu and we provide daily tasks so that you are more eager to collect sampahmas points.",
    jobdesc:
      "I became the leader of software engineering of the development of a waste management application that is integrated with vending machines. Take a lead of technologies and active role in the development, launch and operational management of the Sampahmas app. This app provides an innovative solution for plastic waste management with vending machine integration. Coordinate the application development team and oversee the entire development cycle, from planning to launch.",
    date: "2023-11-01",
    types: ["Project", "Website", "Mobile App", "Design", "Team Project"],
    tools: [
      generateTool("Kotlin"),
      generateTool("Firebase"),
      generateTool("C++"),
      generateTool("Google Maps"),
      generateTool("Android Studio"),
      generateTool("TailwindCSS"),
    ],
    images: generateImages(9, "sampahmas"),
    links: [
      generateUrl(
        "Mobile App",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Sampahmas-Mobile-Kotlin"
      ),
      generateUrl(
        "Web Server",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Sampahmas-VendingMachine-Webserver-JS"
      ),
      generateUrl(
        "Object Detection",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Sampahmas-ObjectDetection-IOT"
      ),
      generateUrl(
        "User Interface Design",
        "Figma",
        "https://www.figma.com/design/rWtsf90SoVPv8nKiR4Nuyo/SAMPAHMAS-Waste-Management-System"
      ),
      generateUrl(
        "Video Pitch",
        "Instagram",
        "https://www.instagram.com/reel/C2cA6ewvVjm/"
      ),
      generateUrl(
        "Award",
        "LinkedIn",
        "https://www.linkedin.com/in/ghufronakbar/overlay/1720518467305/single-media-viewer"
      ),
      generateUrl("Website", "Web", "https://sampahmas.vercel.app"),
    ],
    keywords: [
      "Sampahmas",
      "Waste Management System",
      "Kotlin",
      "Firebase",
      "Google Maps",
      "Android Studio",
      "Location Based Services",
      "C++",
      "Internet of Things",
      "TailwindCSS",
      "Vending Machine",
      "Object Detection",
      "Video Pitch",                  
      "Figma",
      "Website",
      "Mobile App",
      "TailwindCSS",
      "Vercel",
    ],
  },
  {
    slug: "didesa-village-information-system",
    name: "DiDesa - Digitalisasi Desa",
    heading: "Village Information System",
    description:
      "DiDesa is an interactive application as a means of Village Information System to support its effectiveness in information media facilities. In this system there is information about the village, means of advertising UMKM, news for local residents, and village head elections.",
    jobdesc:
      "As the leader of this project, I organize the course of making this application starting from system design, especially for database design, functional and non-functional needs and the tech stack used. I also served as the backend engineer and created the website for client side. I also did the documentation of this system including API documentation. The tech stack used is ExpressJS as a server side or backend service, NextJS as a client side which is used as an interface for the dashboard / back office for the admin, and React Native as a mobile application. As well as using PostgreSQL as a database. ",
    date: "2024-04-01",
    types: ["Project", "Website", "Mobile App"],
    tools: [
      generateTool("React Native"),
      generateTool("ExpressJS"),
      generateTool("React"),
      generateTool("NextJS"),
      generateTool("PostgreSQL"),
      generateTool("TypeScript"),
    ],
    images: generateImages(7, "di-desa"),
    links: [
      generateUrl(
        "Mobile App Repository",
        "GitHub",
        "https://GitHub.com/ghufronakbar/DiDesa-Mobile-ReactNative"
      ),
      generateUrl(
        "Web Server Repository",
        "GitHub",
        "https://GitHub.com/ghufronakbar/DiDesa-Backend-ExpressJS-Remake"
      ),
      generateUrl(
        "Website Repository",
        "GitHub",
        "https://GitHub.com/ghufronakbar/DiDesa-Website-NextJS"
      ),
      generateUrl("Website", "Web", "https://didesa.vercel.app"),
    ],
    keywords: [
      "DiDesa - Digitalisasi Desa",
      "Village Information System",
      "DiDesa",
      "Digitalisasi Desa",
      "NodeJS",
      "ExpressJS",
      "PostgreSQL",
      "React",
      "NextJS",
      "React Native",
      "TypeScript",
    ],
  },
  {
    slug: "lestari-wildlife-data-collection-application",
    name: "Lestari",
    heading: "Wildlife Data Collection Application",
    description:
      "Lestari is an application for wildlife data collection. In this application only authorized users can collect data. The wildlife data collected in this application is confidential but can be obtained with the approval of the authorized party.",
    jobdesc:
      "As the leader of this project, I organize the course of making this application starting from system design, especially for database design, functional and non-functional needs and the tech stack used. I also served as the backend engineer and created the dashboard/back office for the admin. I also did the documentation of this system including API documentation. The tech stack used is ExpressJS as a server side or backend service, NextJS as a client side which is used as an interface for the dashboard / back office for the admin, and Flutter as a mobile application. As well as using PostgreSQL as a database.",
    date: "2024-03-01",
    types: ["Project", "Website", "Mobile App"],
    tools: [
      generateTool("Flutter"),
      generateTool("ExpressJS"),
      generateTool("React"),
      generateTool("NextJS"),
      generateTool("PostgreSQL"),
      generateTool("Kotlin"),
      generateTool("Firebase"),
      generateTool("Android Studio"),
      generateTool("Google Maps"),
    ],
    images: generateImages(7, "lestari"),
    links: [
      generateUrl(
        "Mobile App",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Lestari-Mobile-Flutter"
      ),
      generateUrl(
        "Web Server",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Lestari-Backend-ExpressJS"
      ),
      generateUrl(
        "Dashboard Admin",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Lestari-DashboardAdmin-NextJS"
      ),
      generateUrl(
        "Mobile App (Beta)",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Lestari-Mobile-Kotlin"
      ),
    ],
    keywords: [
      "Lestari",
      "Wildlife Data Collection Application",
      "NodeJS",
      "React",
      "ExpressJS",
      "Kotlin",
      "Android Studio",
      "PostgreSQL",
      "NextJS",
      "Flutter",
      "Location Based Services",
    ],
  },
  {
    name: "Netflix Clone",
    slug: "netflix-clone-simping-content",
    heading: "Clone Netflix Website for Simping Content",
    date: "2024-08-01",
    types: ["Website", "Mini Project", "Clone"],
    description:
      "It is a clone website of the leading streaming website Netflix. This website aims to show love content to couples. There are play videos, shows various albums with some photos and descriptions displayed, and notes for couples. Can use both Indonesian and English on this website.",
    jobdesc:
      "As my mini project, I made this website as a client side only website using NextJS. The website is styled using TailwindCSS. Then for deployment using Vercel.",
    tools: [
      generateTool("NextJS"),
      generateTool("Vercel"),
      generateTool("TailwindCSS"),
      generateTool("TypeScript"),
    ],
    images: generateImages(9, "netflix-clone"),
    links: [
      generateUrl("Website", "Web", "https://eremika.vercel.app/"),
      generateUrl(
        "Repository",
        "GitHub",
        "https://GitHub.com/ghufronakbar/WebsiteBucinNetflix"
      ),
    ],
    keywords: [
      "Netflix Clone",
      "Website Bucin",
      "Clone",
      "NextJS",
      "TailwindCSS",
      "Vercel",
    ],
  },
  {
    name: "Website Pengaduan Masyarakat",
    slug: "pengaduan-masyarakat-purwodadi",
    heading: "Public Complaint Website for Purwodadi Village Residents",
    date: "2024-08-01",
    types: ["Website", "Community Service", "Mini Project"],
    tools: [
      generateTool("PHP"),
      generateTool("MySQL"),
      generateTool("TailwindCSS"),
    ],
    description:
      "This is a website that handles public complaints for Purwodadi Sub-district. On this website there is a landing page that introduces the identity of the Kalurahan. The complaint feature is based on two-way communication with the administrators of the village, the results of which are displayed transparently. If you object to telling your identity you can anonymously send it.",
    jobdesc:
      "As my mini project as a community service, I made this website as a monolith website using PHP Native and MySQL. I also took care of server issues such as deploying, setting up domains and taking care of SSL and website legality due to sensitive information.",
    images: generateImages(6, "purwodadi"),
    links: [
      generateUrl("Website", "Web", "https://laporpurwodadi.site/"),
      generateUrl(
        "Repository",
        "GitHub",
        "https://GitHub.com/ghufronakbar/WebsiteDesa"
      ),
    ],
    keywords: [
      "Website Pengaduan Masyarakat",
      "Purwodadi",
      "Complaint",
      "PHP",
      "MySQL",
      "TailwindCSS",
    ],
  },
  {
    slug: "berijalan-redesign-user-interfaces",
    name: "Berijalan Redesign",
    heading: "Redesign of Berijalan Website",
    date: "2024-07-01",
    types: ["Design"],
    tools: [generateTool("Figma")],
    description:
      "Redesigning the Berijalan Member of Astra website at the FTI Fest UKDW 2023 competition. Applying a minimalist concept for the design. The website was created using Figma as a design tool. Secured 3rd place in the Berijalan Member of ASTRA web UI/UX redesign competition organized by UKDW during FTI FEST 2023, showcasing excellence in web redesign. ",
    jobdesc:
      "As a helper in making the redesign, I was assigned to create components in the process of redesigning the website. I also played a role in determining the design concept to be created. Applied Design Thinking methodology to create an intuitive and user-friendly interface, highlighting a commitment to innovation and improved user experience. Presented the results to the company as a replacement for the current working web.",
    images: generateImages(9, "berijalan-redesign"),
    links: [
      generateUrl(
        "User Interface Design",
        "Figma",
        "https://www.figma.com/design/BQ3Jl9SCdBEJdyj2Yr4Vt4/FTI-FEST-UKDW-2023"
      ),
      generateUrl(
        "Award",
        "LinkedIn",
        "https://www.linkedin.com/in/ghufronakbar/overlay/1720518467305/single-media-viewer/"
      ),
    ],
    keywords: [
      "Berijalan",
      "Redesign",
      "Website",
      "Astra",
      "Figma",
      "UI Design",
      "UI/UX",
    ],
  },
  {
    slug: "check-your-khodam",
    name: "Check Your Khodam",
    heading: "Information System Analyzing the Djinn",
    date: "2024-07-01",
    types: ["Mini Project", "Website", "Public"],
    tools: [
      generateTool("React"),
      generateTool("NextJS"),
      generateTool("Railway"),
      generateTool("Socket.io"),
    ],
    description:
      "It is a website that was created because it followed the trend of the time. Created using Next JS as a frontend and backend. Using Web Socket to ensure realtime data fetching.",
    jobdesc:
      "The website creation process is done in monolite using NextJS. There is no need for a database in this application. Using socket.io to do realtime data fetching for other users.",
    images: generateImages(4, "check-khodam"),
    links: [
      generateUrl(
        "Website",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Check-Khodam-NextJS"
      ),
      generateUrl(
        "Deployed Website",
        "Web",
        "https://cek-khodam-online.up.railway.app/"
      ),
    ],
    keywords: [
      "Check Your Khodam",
      "Check Khodam Online",
      "Information System",
      "Djinn",
      "NodeJS",
      "React",
      "NextJS",
      "Socket.io",
      "Web Socket",
    ],
  },

  {
    slug: "event-ease-ticket-purchase-system",
    name: "Event Ease",
    heading: "Information System For Ticket Purchases",
    types: ["Project", "Website", "Mobile App"],
    description:
      "It is a ticket booking system held by an organization. The organization requires approval from the admin regarding the account created and the event being held. Users can purchase tickets with existing stock. ",
    jobdesc:
      "As the leader of this project, I organize the course of making this application starting from system design, especially for database design, functional and non-functional needs and the tech stack used. I also served as the backend engineer and created the dashboard/back office for the admin. I also did the documentation of this system including API documentation. The tech stack used is ExpressJS as a server side or backend service, NextJS as a client side which is used as an interface for the dashboard / back office for the admin, and Kotlin as a native Android application. As well as using MySQL as a database.",
    date: "2024-06-01",
    tools: [
      generateTool("Kotlin"),
      generateTool("ExpressJS"),
      generateTool("React"),
      generateTool("NextJS"),
      generateTool("MySQL"),
      generateTool("Android Studio"),
    ],
    images: generateImages(7, "event-ease"),
    links: [
      generateUrl(
        "Mobile App",
        "GitHub",
        "https://GitHub.com/ghufronakbar/EventEase-Mobile-Kotlin"
      ),
      generateUrl(
        "Web Server",
        "GitHub",
        "https://GitHub.com/ghufronakbar/EventEase-Backend-ExpressJS"
      ),
      generateUrl(
        "Dashboard Admin",
        "GitHub",
        "https://GitHub.com/ghufronakbar/EventEase-DashboardAdmin-NextJS"
      ),
      generateUrl(
        "Dashboard Organization",
        "GitHub",
        "https://GitHub.com/ghufronakbar/EventEase-DashboardOrganization-NextJS"
      ),
    ],
    keywords: [
      "EventEase",
      "Event Ticketing System",
      "NodeJS",
      "React",
      "ExpressJS",
      "Kotlin",
      "Android Studio",
      "MySQL",
      "NextJS",
    ],
  },
  {
    slug: "supersos-emergency-call-system",
    name: "SuperSOS",
    heading: "Emergency Call / SOS System",
    date: "2024-04-01",
    tools: [
      generateTool("Kotlin"),
      generateTool("ExpressJS"),
      generateTool("React"),
      generateTool("NextJS"),
      generateTool("MySQL"),
      generateTool("Android Studio"),
    ],
    types: ["Project", "Website", "Mobile App"],
    description:
      "It is an emergency call or SOS system that involves the user and the agency, where the agency requires a permission to be able to use the application. Equipped with location-based services.",
    jobdesc:
      "As the leader of this project, I organize the course of making this application starting from system design, especially for database design, functional and non-functional needs and the tech stack used. I also served as the backend engineer and created the dashboard/back office for the admin. I also did the documentation of this system including API documentation. The tech stack used is ExpressJS as a server side or backend service, NextJS as a client side which is used as an interface for the dashboard / back office for the admin, and Kotlin as a native Android application. As well as using MySQL as a database.",
    images: generateImages(7, "supersos"),
    links: [
      generateUrl(
        "Mobile App",
        "GitHub",
        "https://GitHub.com/ghufronakbar/SuperSOS-Mobile-Kotlin"
      ),
      generateUrl(
        "Web Server",
        "GitHub",
        "https://GitHub.com/ghufronakbar/SuperSOS-Backend-ExpressJS"
      ),
      generateUrl(
        "Dashboard Admin",
        "GitHub",
        "https://GitHub.com/ghufronakbar/SuperSOS-DashboardAdmin-NextJS"
      ),
      generateUrl(
        "Dashboard Instances",
        "GitHub",
        "https://GitHub.com/ghufronakbar/SuperSOS-DashboardInstances-NextJS"
      ),
    ],
    keywords: [
      "SuperSOS",
      "Emergency Call",
      "SOS System",
      "NodeJS",
      "React",
      "ExpressJS",
      "Kotlin",
      "Android Studio",
      "MySQL",
      "NextJS",
    ],
  },
  {
    slug: "coffee-ordering-system",
    name: "Goffee",
    heading: "Coffee Ordering System",
    date: "2024-05-01",
    types: ["Project", "Website", "Mobile App"],
    tools: [
      generateTool("Kotlin"),
      generateTool("ExpressJS"),
      generateTool("React"),
      generateTool("NextJS"),
      generateTool("MySQL"),
      generateTool("Android Studio"),
    ],
    description:
      "An ordering system at a coffee shop, users can checkout the cart containing the menu to be purchased. Users can choose to takeaway and delivery. Admin can manage a menu by managing the menu on the admin dashboard. There is a graph to do an in-depth analysis of sales.",
    jobdesc:
      "As the leader of this project, I organize the course of making this application starting from system design, especially for database design, functional and non-functional needs and the tech stack used. I also served as the backend engineer and created the dashboard/back office for the admin. I also did the documentation of this system including API documentation. The tech stack used is ExpressJS as a server side or backend service, NextJS as a client side which is used as an interface for the dashboard / back office for the admin, and Kotlin as a native Android application. As well as using MySQL as a database.",
    images: generateImages(7, "goffee"),
    links: [
      generateUrl(
        "Mobile App",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Goffee-Mobile-Kotlin"
      ),
      generateUrl(
        "Web Server",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Goffee-Backend-ExpressJS"
      ),
      generateUrl(
        "Dashboard Admin",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Goffee-DashboardAdmin-NextJS"
      ),
    ],
    keywords: [
      "Goffee",
      "Coffee Ordering System",
      "Cafe",
      "NodeJS",
      "React",
      "ExpressJS",
      "Kotlin",
      "Android Studio",
      "MySQL",
      "NextJS",
    ],
  },
  {
    slug: "radin-grocery-ordering-system",
    name: "Radin",
    heading: "Grocery Ordering System",
    date: "2024-05-01",
    types: ["Project", "Website", "Mobile App"],
    tools: [
      generateTool("Kotlin"),
      generateTool("ExpressJS"),
      generateTool("React"),
      generateTool("NextJS"),
      generateTool("MySQL"),
      generateTool("Android Studio"),
    ],
    description:
      "An ordering system at a grocery store, users can checkout the cart containing the products to be purchased. There are also options for takeaway and delivery. Users can choose to takeaway and delivery. Admin can manage a menu by managing products based on stock on the admin dashboard. There is a graph to do an in-depth analysis of sales.",
    jobdesc:
      "As the leader of this project, I organize the course of making this application starting from system design, especially for database design, functional and non-functional needs and the tech stack used. I also served as the backend engineer and created the dashboard/back office for the admin. I also did the documentation of this system including API documentation. The tech stack used is ExpressJS as a server side or backend service, NextJS as a client side which is used as an interface for the dashboard / back office for the admin, and Kotlin as a native Android application. As well as using MySQL as a database.",
    images: generateImages(7, "radin"),
    links: [
      generateUrl(
        "Mobile App",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Radin-Mobile-Kotlin"
      ),
      generateUrl(
        "Web Server",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Radin-Backend-ExpressJS"
      ),
      generateUrl(
        "Dashboard Admin",
        "GitHub",
        "https://GitHub.com/ghufronakbar/Radin-DashboardAdmin-NextJS"
      ),
    ],
    keywords: [
      "Radin",
      "Grocery Ordering System",
      "Grocery Store",
      "NodeJS",
      "React",
      "ExpressJS",
      "Kotlin",
      "Android Studio",
      "MySQL",
      "NextJS",
    ],
  },
  {
    slug: "ice-production-calculation-system",
    name: "Fuzzy Tsukamoto Calculation",
    heading: "Ice Production Calculation System",
    date: "2024-05-01",
    types: ["Mini Project", "Website"],
    tools: [
      generateTool("ExpressJS"),
      generateTool("React"),
      generateTool("NextJS"),
      generateTool("PostgreSQL"),
      generateTool("Vercel"),
    ],
    description:
      "A system to calculate ice production efficiently using the tsukamoto fuzzy method. This system will calculate how many efficient results to calculate production with a predetermined algorithm.",
    jobdesc:
      "I tried to create a website to calculate effective ice production using the Fuzzy Tsukamoto method. This application is made with client and server. With the server side using ExpressJS as a Backend Service and NextJS as a client side as an interface for users. Using PostgreSQL as a database.",
    images: generateImages(7, "fuzzy-calculation"),
    links: [
      generateUrl(
        "Web Server",
        "GitHub",
        "https://GitHub.com/ghufronakbar/PenghitunganFuzzyTsukamoto-Backend-ExpressJS"
      ),
      generateUrl(
        "User Website",
        "GitHub",
        "https://GitHub.com/ghufronakbar/PenghitunganFuzzyTsukamoto-NextJS"
      ),
    ],
    keywords: [
      "Fuzzy Tsukamoto Calculation",
      "Ice Production Calculation System",
      "Ice Production",
      "Fuzzy",
      "Tsukamoto",
      "NodeJS",
      "React",
      "ExpressJS",
      "PostgreSQL",
      "NextJS",
    ],
  },
];

export default Projects;
