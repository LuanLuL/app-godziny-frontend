import React, { useCallback } from "react";
import { List, ListItemIcon, ListItemButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Styles from "./AppSideBarListStyles";
import sysSizing from "../../../../sysMaterialUi/sizing/sysSizes";
import { MyTooltip } from "../../../../sysComponents/myTooltip/MyTooltip";
import SysIcon from "../../../../sysComponents/sysIcon/SysIcons";
import { ItemAppBar } from "../../../appModuleManeger/AppModuleManeger";

interface ISideAppBarListProps {
  items: ItemAppBar[];
  onItemClick?: () => void;
  isDrawerOpen: boolean;
}

const SysListItemButton: React.FC<
  React.ComponentProps<typeof ListItemButton>
> = (props) => (
  <ListItemButton
    {...props}
    sx={{
      borderRadius: sysSizing.radiusXs,
      color: "inherit",
      "& .MuiListItemIcon-root": {
        color: "inherit",
      },
      "&:hover": {
        backgroundColor: (theme) => theme.palette.primary.light,
        color: (theme) => theme.palette.primary.main,
      },
      "&.Mui-selected": {
        color: (theme) => theme.palette.common.white,
        backgroundColor: (theme) => theme.palette.primary.main,
        "& .MuiListItemIcon-root": {
          color: (theme) => theme.palette.common.white,
        },
        "&:hover": {
          backgroundColor: (theme) => theme.palette.primary.main,
        },
      },
      ...props.sx,
    }}
  />
);

const AppSideBarList: React.FC<ISideAppBarListProps> = ({
  items,
  onItemClick,
  isDrawerOpen,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSelected = useCallback(
    (path: string): boolean => {
      console.log(path, location.pathname);
      return (
        location.pathname === path || location.pathname.startsWith(`${path}/`)
      );
    },
    [location.pathname],
  );

  return (
    <List
      sx={{
        p: "8px",
        display: "flex",
        flexDirection: "column",
        gap: sysSizing.spacingFixedMd,
      }}
    >
      {items.map((item) => {
        const selected = isSelected(item.path);
        const tooltipTitle = isDrawerOpen ? "" : item.name;

        return (
          <SysListItemButton
            onClick={() => {
              navigate(item.path);
              onItemClick?.();
            }}
            selected={selected}
            key={item.name}
          >
            <MyTooltip customWidth="auto" title={tooltipTitle}>
              <ListItemIcon
                sx={{
                  minWidth: sysSizing.spacingRemLg,
                  marginRight: sysSizing.spacingFixedSm,
                }}
              >
                <SysIcon name={item.icon} />
              </ListItemIcon>
            </MyTooltip>
            <Styles.EllipsisListItemText>
              {item.name}
            </Styles.EllipsisListItemText>
          </SysListItemButton>
        );
      })}
    </List>
  );
};

export default AppSideBarList;
