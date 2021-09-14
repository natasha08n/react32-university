import { HiBookOpen, HiAcademicCap } from "react-icons/hi";

import { routes } from "./routes";

export const menuConfig = [
  {
    id: 1,
    name: "Университет",
    icon: <HiBookOpen />,
    path: routes.home,
  },
  {
    id: 2,
    name: "Факультеты",
    icon: <HiAcademicCap />,
    path: routes.faculties,
  },
];
