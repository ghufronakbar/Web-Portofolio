import {
  IconHome,
  IconMessage,
  IconAdjustmentsCode,
} from "@tabler/icons-react";

export interface NavItemsType {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const NavItems: NavItemsType[] = [
  {
    name: "Portofolio",
    link: "/portofolio",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/project",
    icon: (
      <IconAdjustmentsCode className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default NavItems;
