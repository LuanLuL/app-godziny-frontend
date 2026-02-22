import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import symbolsIconsNames, { SymbolsIconsNames } from "./SymbolsNames";

export interface ISysIconProps extends SvgIconProps {
  name: SymbolsIconsNames;
  viewBoxProp?: string | undefined;
  transformProp?: string | undefined;
}

const SysIcon: React.FC<ISysIconProps> = ({
  name = "add",
  viewBoxProp = "0 -960 960 960",
  transformProp = "translate(0, 0)",
  ...props
}) => {
  return (
    <SvgIcon viewBox={viewBoxProp} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
      >
        <path d={symbolsIconsNames[name]} transform={transformProp} />
      </svg>
    </SvgIcon>
  );
};

export default SysIcon;
