export interface ToolsType  {
  id: number;
  name: string;
  icon: string;
};

export interface LinksType {
  id: number;
  type: string;
  url: string;
  icon: string;
};

export type ProjectsType = {
  id: number;
  slug: string;
  name: string;
  heading: string;
  description: string;
  jobdesc: string;
  date: string;
  types: string[];
  tools: ToolsType[];
  images: string[];
  links: LinksType[];
  keywords: string[];
};

const Projects: ProjectsType[] = [
  {
    id: 1,
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
      {
        id: 1,
        name: "Kotlin",
        icon: "/images/logo/kotlin.png",
      },
      {
        id: 2,
        name: "Firebase",
        icon: "/images/logo/firebase.png",
      },
      { id: 3, name: "C++", icon: "/images/logo/cpp.png" },
      {
        id: 4,
        name: "Google Maps",
        icon: "/images/logo/maps.png",
      },
      {
        id: 5,
        name: "Android Studio",
        icon: "/images/logo/android.png",
      },
    ],
    images: [
      "/images/projects/sampahmas/1.png",
      "/images/projects/sampahmas/2.png",
      "/images/projects/sampahmas/3.png",
      "/images/projects/sampahmas/4.png",
      "/images/projects/sampahmas/5.png",
      "/images/projects/sampahmas/6.png",
      "/images/projects/sampahmas/7.png",
      "/images/projects/sampahmas/8.png",
      "/images/projects/sampahmas/9.png",
    ],
    links: [
      {
        id: 1,
        type: "Mobile App",
        url: "https://github.com/ghufronakbar/Sampahmas-Mobile-Kotlin",
        icon: "/icons/github.png",
      },
      {
        id: 2,
        type: "Web Server",
        url: "https://github.com/ghufronakbar/Sampahmas-VendingMachine-Webserver-JS",
        icon: "/icons/github.png",
      },
      {
        id: 3,
        type: "Object Detection",
        url: "https://github.com/ghufronakbar/Sampahmas-ObjectDetection-IOT",
        icon: "/icons/github.png",
      },
      {
        id: 4,
        type: "User Interface Design",
        url: "https://www.figma.com/design/rWtsf90SoVPv8nKiR4Nuyo/SAMPAHMAS-Waste-Management-System",
        icon: "/icons/figma.png",
      },
      {
        id: 5,
        type: "Video Pitch",
        url: "https://www.instagram.com/reel/C2cA6ewvVjm/",
        icon: "/icons/instagram.png",
      },
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
    ],
  },
  {
    id: 2,
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
      {
        id: 1,
        name: "React Native",
        icon: "/images/logo/rn.png",
      },
      {
        id: 2,
        name: "ExpressJS",
        icon: "/images/logo/express.png",
      },
      {
        id: 3,
        name: "React",
        icon: "/images/logo/react.png",
      },
      {
        id: 4,
        name: "NextJS",
        icon: "/images/logo/next.png",
      },
      {
        id: 5,
        name: "PostgreSQL",
        icon: "/images/logo/postgresql.png",
      },
      {
        id: 6,
        name: "TypeScript",
        icon: "/images/logo/ts.webp",
      },
    ],
    images: [
      "/images/projects/di-desa/1.png",
      "/images/projects/di-desa/2.png",
      "/images/projects/di-desa/3.png",
      "/images/projects/di-desa/4.png",
      "/images/projects/di-desa/5.png",
      "/images/projects/di-desa/6.png",
      "/images/projects/di-desa/7.png",      
    ],
    links: [
      {
        id: 1,
        type: "Mobile App Repository",
        url: "https://github.com/ghufronakbar/DiDesa-Mobile-ReactNative",
        icon: "/icons/github.png",
      },
      {
        id: 2,
        type: "Web Server Repository",
        url: "https://github.com/ghufronakbar/DiDesa-Backend-ExpressJS-Remake",
        icon: "/icons/github.png",
      },
      {
        id: 3,
        type: "Website Repository",
        url: "https://github.com/ghufronakbar/DiDesa-Website-NextJS",
        icon: "/icons/github.png",
      },
      {
        id: 4,
        type: "Website",
        url: "https://didesa.vercel.app",
        icon: "/icons/web.png",
      }
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
    id: 3,
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
      {
        id: 1,
        name: "Flutter",
        icon: "/images/logo/flutter.png",
      },
      {
        id: 2,
        name: "ExpressJS",
        icon: "/images/logo/express.png",
      },
      {
        id: 3,
        name: "React",
        icon: "/images/logo/react.png",
      },
      {
        id: 4,
        name: "NextJS",
        icon: "/images/logo/next.png",
      },
      {
        id: 5,
        name: "PostgreSQL",
        icon: "/images/logo/postgresql.png",
      },
      {
        id: 6,
        name: "Kotlin",
        icon: "/images/logo/kotlin.png",
      },
      {
        id: 7,
        name: "Firebase",
        icon: "/images/logo/firebase.png",
      },
      {
        id: 8,
        name: "Android Studio",
        icon: "/images/logo/android.png",
      },
      {
        id: 9,
        name: "Google Maps",
        icon: "/images/logo/maps.png",
      },
    ],
    images: [
      "/images/projects/lestari/1.png",
      "/images/projects/lestari/2.png",
      "/images/projects/lestari/3.png",
      "/images/projects/lestari/4.png",
      "/images/projects/lestari/5.png",
      "/images/projects/lestari/6.png",
      "/images/projects/lestari/7.png",
      "/images/projects/lestari/8.png",
      "/images/projects/lestari/9.png",
    ],
    links: [
      {
        id: 1,
        type: "Mobile App",
        url: "https://github.com/ghufronakbar/Lestari-Mobile-Flutter",
        icon: "/icons/github.png",
      },
      {
        id: 2,
        type: "Web Server",
        url: "https://github.com/ghufronakbar/Lestari-Backend-ExpressJS",
        icon: "/icons/github.png",
      },
      {
        id: 3,
        type: "Dashboard Admin",
        url: "https://github.com/ghufronakbar/Lestari-DashboardAdmin-NextJS",
        icon: "/icons/github.png",
      },
      {
        id: 4,
        type: "Mobile App (Beta)",
        url: "https://github.com/ghufronakbar/Lestari-Mobile-Kotlin",
        icon: "/icons/github.png",
      },
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
    id: 4,
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
      {
        id: 1,
        name: "Kotlin",
        icon: "/images/logo/kotlin.png",
      },
      {
        id: 2,
        name: "ExpressJS",
        icon: "/images/logo/express.png",
      },
      {
        id: 3,
        name: "React",
        icon: "/images/logo/react.png",
      },
      {
        id: 4,
        name: "NextJS",
        icon: "/images/logo/next.png",
      },
      {
        id: 5,
        name: "MySQL",
        icon: "/images/logo/mysql.png",
      },
      {
        id: 6,
        name: "Android Studio",
        icon: "/images/logo/android.png",
      },
    ],
    images: [
      "/images/projects/event-ease/1.png",
      "/images/projects/event-ease/2.png",
      "/images/projects/event-ease/3.png",
      "/images/projects/event-ease/4.png",
      "/images/projects/event-ease/5.png",
      "/images/projects/event-ease/6.png",
      "/images/projects/event-ease/7.png",
      "/images/projects/event-ease/8.png",
      "/images/projects/event-ease/9.png",
    ],
    links: [
      {
        id: 1,
        type: "Mobile App",
        url: "https://github.com/ghufronakbar/EventEase-Mobile-Kotlin",
        icon: "/icons/github.png",
      },
      {
        id: 2,
        type: "Web Server",
        url: "https://github.com/ghufronakbar/EventEase-Backend-ExpressJS",
        icon: "/icons/github.png",
      },
      {
        id: 3,
        type: "Dashboard Admin",
        url: "https://github.com/ghufronakbar/EventEase-DashboardAdmin-NextJS",
        icon: "/icons/github.png",
      },
      {
        id: 4,
        type: "Dashboard Organization",
        url: "https://github.com/ghufronakbar/EventEase-DashboardOrganization-NextJS",
        icon: "/icons/github.png",
      },
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
    id: 5,
    slug: "supersos-emergency-call-system",
    name: "SuperSOS",
    heading: "Emergency Call / SOS System",
    date: "2024-04-01",
    tools: [
      {
        id: 1,
        name: "Kotlin",
        icon: "/images/logo/kotlin.png",
      },
      {
        id: 2,
        name: "ExpressJS",
        icon: "/images/logo/express.png",
      },
      {
        id: 3,
        name: "React",
        icon: "/images/logo/react.png",
      },
      {
        id: 4,
        name: "NextJS",
        icon: "/images/logo/next.png",
      },
      {
        id: 5,
        name: "MySQL",
        icon: "/images/logo/mysql.png",
      },
      {
        id: 6,
        name: "Android Studio",
        icon: "/images/logo/android.png",
      },
    ],
    types: ["Project", "Website", "Mobile App"],
    description:
      "It is an emergency call or SOS system that involves the user and the agency, where the agency requires a permission to be able to use the application. Equipped with location-based services.",
    jobdesc:
      "As the leader of this project, I organize the course of making this application starting from system design, especially for database design, functional and non-functional needs and the tech stack used. I also served as the backend engineer and created the dashboard/back office for the admin. I also did the documentation of this system including API documentation. The tech stack used is ExpressJS as a server side or backend service, NextJS as a client side which is used as an interface for the dashboard / back office for the admin, and Kotlin as a native Android application. As well as using MySQL as a database.",
    images: [
      "/images/projects/super-sos/1.png",
      "/images/projects/super-sos/2.png",
      "/images/projects/super-sos/3.png",
      "/images/projects/super-sos/4.png",
      "/images/projects/super-sos/5.png",
      "/images/projects/super-sos/6.png",
      "/images/projects/super-sos/7.png",
      "/images/projects/super-sos/8.png",
      "/images/projects/super-sos/9.png",
    ],
    links: [
      {
        id: 1,
        type: "Mobile App",
        url: "https://github.com/ghufronakbar/SuperSOS-Mobile-Kotlin",
        icon: "/icons/github.png",
      },
      {
        id: 2,
        type: "Web Server",
        url: "https://github.com/ghufronakbar/SuperSOS-Backend-ExpressJS",
        icon: "/icons/github.png",
      },
      {
        id: 3,
        type: "Dashboard Admin",
        url: "https://github.com/ghufronakbar/SuperSOS-DashboardAdmin-NextJS",
        icon: "/icons/github.png",
      },
      {
        id: 4,
        type: "Dashboard Instances",
        url: "https://github.com/ghufronakbar/SuperSOS-DashboardInstances-NextJS",
        icon: "/icons/github.png",
      },
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
    id: 6,
    slug: "coffee-ordering-system",
    name: "Goffee",
    heading: "Coffee Ordering System",
    date: "2024-05-01",
    types: ["Project", "Website", "Mobile App"],
    tools: [
      {
        id: 1,
        name: "Kotlin",
        icon: "/images/logo/kotlin.png",
      },
      {
        id: 2,
        name: "ExpressJS",
        icon: "/images/logo/express.png",
      },
      {
        id: 3,
        name: "React",
        icon: "/images/logo/react.png",
      },
      {
        id: 4,
        name: "NextJS",
        icon: "/images/logo/next.png",
      },
      {
        id: 5,
        name: "MySQL",
        icon: "/images/logo/mysql.png",
      },
      {
        id: 6,
        name: "Android Studio",
        icon: "/images/logo/android.png",
      },
    ],
    description:
      "An ordering system at a coffee shop, users can checkout the cart containing the menu to be purchased. Users can choose to takeaway and delivery. Admin can manage a menu by managing the menu on the admin dashboard. There is a graph to do an in-depth analysis of sales.",
    jobdesc:
      "As the leader of this project, I organize the course of making this application starting from system design, especially for database design, functional and non-functional needs and the tech stack used. I also served as the backend engineer and created the dashboard/back office for the admin. I also did the documentation of this system including API documentation. The tech stack used is ExpressJS as a server side or backend service, NextJS as a client side which is used as an interface for the dashboard / back office for the admin, and Kotlin as a native Android application. As well as using MySQL as a database.",
    images: [
      "/images/projects/goffee/1.png",
      "/images/projects/goffee/2.png",
      "/images/projects/goffee/3.png",
      "/images/projects/goffee/4.png",
      "/images/projects/goffee/5.png",
      "/images/projects/goffee/6.png",
      "/images/projects/goffee/7.png",
      "/images/projects/goffee/8.png",
      "/images/projects/goffee/9.png",
    ],
    links: [
      {
        id: 1,
        type: "Mobile App",
        url: "https://github.com/ghufronakbar/Goffee-Mobile-Kotlin",
        icon: "/icons/github.png",
      },
      {
        id: 2,
        type: "Web Server",
        url: "https://github.com/ghufronakbar/Goffee-Backend-ExpressJS",
        icon: "/icons/github.png",
      },
      {
        id: 3,
        type: "Dashboard Admin",
        url: "https://github.com/ghufronakbar/Goffee-DashboardAdmin-NextJS",
        icon: "/icons/github.png",
      },
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
    id: 7,
    slug: "radin-grocery-ordering-system",
    name: "Radin",
    heading: "Grocery Ordering System",
    date: "2024-05-01",
    types: ["Project", "Website", "Mobile App"],
    tools: [
      {
        id: 1,
        name: "Kotlin",
        icon: "/images/logo/kotlin.png",
      },
      {
        id: 2,
        name: "ExpressJS",
        icon: "/images/logo/express.png",
      },
      {
        id: 3,
        name: "React",
        icon: "/images/logo/react.png",
      },
      {
        id: 4,
        name: "NextJS",
        icon: "/images/logo/next.png",
      },
      {
        id: 5,
        name: "MySQL",
        icon: "/images/logo/mysql.png",
      },
      {
        id: 6,
        name: "Android Studio",
        icon: "/images/logo/android.png",
      },
    ],
    description:
      "An ordering system at a grocery store, users can checkout the cart containing the products to be purchased. There are also options for takeaway and delivery. Users can choose to takeaway and delivery. Admin can manage a menu by managing products based on stock on the admin dashboard. There is a graph to do an in-depth analysis of sales.",
    jobdesc:
      "As the leader of this project, I organize the course of making this application starting from system design, especially for database design, functional and non-functional needs and the tech stack used. I also served as the backend engineer and created the dashboard/back office for the admin. I also did the documentation of this system including API documentation. The tech stack used is ExpressJS as a server side or backend service, NextJS as a client side which is used as an interface for the dashboard / back office for the admin, and Kotlin as a native Android application. As well as using MySQL as a database.",
    images: [
      "/images/projects/radin/1.png",
      "/images/projects/radin/2.png",
      "/images/projects/radin/3.png",
      "/images/projects/radin/4.png",
      "/images/projects/radin/5.png",
      "/images/projects/radin/6.png",
      "/images/projects/radin/7.png",
      "/images/projects/radin/8.png",
    ],
    links: [
      {
        id: 1,
        type: "Mobile App",
        url: "https://github.com/ghufronakbar/Radin-Mobile-Kotlin",
        icon: "/icons/github.png",
      },
      {
        id: 2,
        type: "Web Server",
        url: "https://github.com/ghufronakbar/Radin-Backend-ExpressJS",
        icon: "/icons/github.png",
      },
      {
        id: 3,
        type: "Dashboard Admin",
        url: "https://github.com/ghufronakbar/Radin-DashboardAdmin-NextJS",
        icon: "/icons/github.png",
      },
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
    id: 8,
    slug: "ice-production-calculation-system",
    name: "Fuzzy Tsukamoto Calculation",
    heading: "Ice Production Calculation System",
    date: "2024-05-01",
    types: ["Mini Project", "Website"],
    tools: [
      {
        id: 1,
        name: "ExpressJS",
        icon: "/images/logo/express.png",
      },
      {
        id: 2,
        name: "React",
        icon: "/images/logo/react.png",
      },
      {
        id: 3,
        name: "NextJS",
        icon: "/images/logo/next.png",
      },
      {
        id: 4,
        name: "PostgreSQL",
        icon: "/images/logo/postgresql.png",
      },
      {
        id: 5,
        name: "Vercel",
        icon: "/images/logo/vercel.svg",
      },
    ],
    description:
      "A system to calculate ice production efficiently using the tsukamoto fuzzy method. This system will calculate how many efficient results to calculate production with a predetermined algorithm.",
    jobdesc:
      "I tried to create a website to calculate effective ice production using the Fuzzy Tsukamoto method. This application is made with client and server. With the server side using ExpressJS as a Backend Service and NextJS as a client side as an interface for users. Using PostgreSQL as a database.",
    images: [
      "/images/projects/fuzzy/1.png",
      "/images/projects/fuzzy/2.png",
      "/images/projects/fuzzy/3.png",
      "/images/projects/fuzzy/4.png",
      "/images/projects/fuzzy/5.png",
      "/images/projects/fuzzy/6.png",
      "/images/projects/fuzzy/7.png",
      "/images/projects/fuzzy/8.png",
      "/images/projects/fuzzy/9.png",
    ],
    links: [
      {
        id: 1,
        type: "Web Server",
        url: "https://github.com/ghufronakbar/PenghitunganFuzzyTsukamoto-Backend-ExpressJS",
        icon: "/icons/github.png",
      },
      {
        id: 2,
        type: "User Website",
        url: "https://github.com/ghufronakbar/PenghitunganFuzzyTsukamoto-NextJS",
        icon: "/icons/github.png",
      },
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
  {
    id: 9,
    slug: "check-your-khodam",
    name: "Check Your Khodam",
    heading: "Information System Analyzing the Djinn",
    date: "2024-07-01",
    types: ["Mini Project", "Website", "Public"],
    tools: [
      {
        id: 1,
        name: "React",
        icon: "/images/logo/react.png",
      },
      {
        id: 2,
        name: "NextJS",
        icon: "/images/logo/next.png",
      },
      {
        id: 3,
        name: "Vercel",
        icon: "/images/logo/vercel.svg",
      },
    ],
    description:
      "It is a website that was created because it followed the trend of the time. Created using Next JS as a frontend and backend. Using Web Socket to ensure realtime data fetching.",
    jobdesc: "The website creation process is done in monolite using NextJS. There is no need for a database in this application. Using socket.io to do realtime data fetching for other users.",
    images: [
      "/images/projects/check-khodam/1.png",
      "/images/projects/check-khodam/2.png",
      "/images/projects/check-khodam/3.png",
      "/images/projects/check-khodam/4.png",
      "/images/projects/check-khodam/5.png",
      "/images/projects/check-khodam/6.png",
      "/images/projects/check-khodam/7.png",
      "/images/projects/check-khodam/8.png",
      "/images/projects/check-khodam/9.png",
    ],
    links: [
      {
        id: 1,
        type: "Website",
        url: "https://github.com/ghufronakbar/Check-Khodam-NextJS",
        icon: "/icons/github.png",
      },
      {
        id: 2,
        type: "Deployed Website",
        url: "https://cek-khodam-online.up.railway.app/",
        icon: "/icons/web.png",
      },
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
    ],
  },
  {
    id: 10,
    slug: "berijalan-redesign-user-interfaces",
    name: "Berijalan Redesign",
    heading: "Redesign of Berijalan Website",
    date: "2024-07-01",
    types: ["Design"],
    tools: [
      {
        id: 1,
        name: "Figma",
        icon: "/images/logo/figma.png",
      },
    ],
    description:
      "Redesigning the Berijalan Member of Astra website at the FTI Fest UKDW 2023 competition. Applying a minimalist concept for the design. The website was created using Figma as a design tool. Secured 3rd place in the Berijalan Member of ASTRA web UI/UX redesign competition organized by UKDW during FTI FEST 2023, showcasing excellence in web redesign. ",
    jobdesc:
      "As a helper in making the redesign, I was assigned to create components in the process of redesigning the website. I also played a role in determining the design concept to be created. Applied Design Thinking methodology to create an intuitive and user-friendly interface, highlighting a commitment to innovation and improved user experience. Presented the results to the company as a replacement for the current working web.",
    images: [
      "/images/projects/redesign-berijalan/1.png",
      "/images/projects/redesign-berijalan/2.png",
      "/images/projects/redesign-berijalan/3.png",
      "/images/projects/redesign-berijalan/4.png",
      "/images/projects/redesign-berijalan/5.png",
      "/images/projects/redesign-berijalan/6.png",
      "/images/projects/redesign-berijalan/7.png",
      "/images/projects/redesign-berijalan/8.png",
      "/images/projects/redesign-berijalan/9.png",
    ],
    links: [
      {
        id: 1,
        type: "User Interface Design",
        url: "https://www.figma.com/design/BQ3Jl9SCdBEJdyj2Yr4Vt4/FTI-FEST-UKDW-2023",
        icon: "/icons/figma.png",
      },
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
];

export default Projects;
