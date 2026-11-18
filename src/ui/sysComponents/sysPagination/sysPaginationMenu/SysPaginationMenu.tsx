import React from "react";
import { BasicMenu, IoptionsToBasicMenu } from "../../basicMenu/BasicMenu";

interface ISysPaginationMenuProps {
  value: number | string;
  options: number[];
  onChange: (value: number) => void;
  disabled?: boolean;
}

export const SysPaginationMenu: React.FC<ISysPaginationMenuProps> = ({
  value,
  options,
  onChange,
  disabled = false,
}) => {
  const menuOptions: IoptionsToBasicMenu[] = options.map((option) => ({
    label: String(option),
    onClick: () => onChange(option),
  }));

  return <BasicMenu indexOfComponent="SysPagination" options={menuOptions} />;
};
