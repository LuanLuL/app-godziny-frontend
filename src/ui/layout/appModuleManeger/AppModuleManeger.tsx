import FolderZipIcon from "@mui/icons-material/FolderZip";
import { SymbolsIconsNames } from "../../sysComponents/sysIcon/SymbolsNames";
import { ReactNode } from "react";
import { Example } from "../../sysPages/example/Example";

export interface ItemAppBar {
  path: string;
  name: string;
  icon: SymbolsIconsNames;
  component: ReactNode;
}

export const headerItems: ItemAppBar[] = [
  {
    path: "/",
    name: "início",
    icon: "home",
    component: <Example />,
  },
  {
    path: "/exemplo",
    name: "Exemplo",
    icon: "assignmentLate",
    component: <Example />,
  },
  {
    path: "/pesquisa-geral",
    name: "Pesquisa Geral",
    icon: "search",
    component: <Example />,
  },
];

export const getValueAppHeader = (path: string): number => {
  const suffix = path.split("/")[1];
  return headerItems.findIndex((route) => route.path.includes(suffix));
};
