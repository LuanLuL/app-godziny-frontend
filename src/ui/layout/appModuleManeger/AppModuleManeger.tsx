import FolderZipIcon from "@mui/icons-material/FolderZip";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import { SvgIconProps } from "@mui/material/SvgIcon/SvgIcon";

export interface IRoutes {
  label: string;
  path: string;
  icon: React.ReactElement<SvgIconProps>;
  protect: boolean;
}

export const sysAppBarOptions: IRoutes[] = [
  {
    label: "Exemplo",
    path: "/example",
    icon: <FolderZipIcon sx={{ width: 23, height: 23 }} />,
    protect: false,
  },
  {
    label: "Atividades",
    path: "/atividades",
    icon: <EventNoteIcon sx={{ width: 23, height: 23 }} />,
    protect: false,
  },
  {
    label: "Cursos",
    path: "/cursos",
    icon: <SchoolIcon sx={{ width: 23, height: 23 }} />,
    protect: true,
  },
  {
    label: "Usuários",
    path: "/usuarios",
    icon: <BadgeIcon sx={{ width: 23, height: 23 }} />,
    protect: true,
  },
];

export const getValueAppHeader = (path: string): number => {
  const suffix = path.split("/")[1];
  return sysAppBarOptions.findIndex((route) => route.path.includes(suffix));
};
