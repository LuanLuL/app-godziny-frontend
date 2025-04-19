import FolderZipIcon from "@mui/icons-material/FolderZip";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import { SvgIconProps } from "@mui/material/SvgIcon/SvgIcon";

export interface IAppHeaderButton {
  label: string;
  path: string;
  active: boolean;
  isProtected: boolean;
  icon: React.ReactElement<SvgIconProps>;
  action: () => void;
  resources?: any[];
}

export interface IAppSideBarButton {
  label: string;
  path: string;
  active: boolean;
  isProtected: boolean;
  icon: React.ReactElement<SvgIconProps>;
  action: () => void;
  resources?: any[];
}

export const sysAppBarOptions: IAppHeaderButton[] = [
  {
    label: "Exemplo",
    path: "/example",
    icon: <FolderZipIcon sx={{ width: 23, height: 23 }} />,
    active: true,
    isProtected: false,
    action: () => {},
  },
  {
    label: "Atividades",
    path: "/atividades",
    icon: <EventNoteIcon sx={{ width: 23, height: 23 }} />,
    active: true,
    isProtected: false,
    action: () => {},
  },
  {
    label: "Cursos",
    path: "/cursos",
    icon: <SchoolIcon sx={{ width: 23, height: 23 }} />,
    active: true,
    isProtected: false,
    action: () => {},
  },
  {
    label: "Usuários",
    path: "/usuarios",
    icon: <BadgeIcon sx={{ width: 23, height: 23 }} />,
    active: true,
    isProtected: false,
    action: () => {},
  },
];

export const getValueAppHeader = (path: string): number => {
  const suffix = path.split("/")[1];
  return sysAppBarOptions.findIndex((route) => route.path.includes(suffix));
};
