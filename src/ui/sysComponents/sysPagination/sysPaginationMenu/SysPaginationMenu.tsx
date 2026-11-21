import React from "react";
import { BasicMenu, IoptionsToBasicMenu } from "../../basicMenu/BasicMenu";
import SysIcon from "../../sysIcon/SysIcons";

interface ISysPaginationMenuProps {
  indexOfComponent: string;
  value: number | string;
  options: number[];
  onChange: (value: number) => void;
  disabled?: boolean;
}

export const SysPaginationMenu: React.FC<ISysPaginationMenuProps> = ({
  indexOfComponent,
  value,
  options,
  onChange,
  disabled = false,
}) => {
  const menuOptions: IoptionsToBasicMenu[] = options.map((option) => ({
    label: String(option),
    onClick: () => onChange(option),
  }));

  return (
    <BasicMenu
      sxMap={{
        menu: {
          "& .MuiPaper-root": {
            width: "max-content",
            minWidth: "0",
          },
        },
        menuItem: {
          minWidth: "0 !important",
          width: "max-content",
          whiteSpace: "nowrap",
        },
      }}
      indexOfComponent={indexOfComponent}
      options={menuOptions}
      disabled={disabled}
      custonIcon={
        <SysIcon
          name="arrayDropDown"
          fontSize="small"
          sx={{ color: (t) => t.palette.primary.main }}
        />
      }
    />
  );
};
