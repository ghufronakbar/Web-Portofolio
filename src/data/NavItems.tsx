import { IconHome, IconMessage, IconAdjustmentsCode,  } from "@tabler/icons-react";
import { TbBrandCodesandbox } from "react-icons/tb";


const NavItems = [
  {
    name: "Portofolio",
    link: "/portofolio",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/project",
    icon: <IconAdjustmentsCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export default NavItems;
