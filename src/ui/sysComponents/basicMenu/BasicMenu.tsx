import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Styles from "./BasicMenuStyles";
import Typography from "@mui/material/Typography";
import SysIcon from "../sysIcon/SysIcons";
import { MenuProps, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";

export type IoptionsToBasicMenu = {
  label: string;
  onClick: () => void;
};

interface IBasicMenuProps extends Omit<
  MenuProps,
  "open" | "anchorEl" | "onClose"
> {
  indexOfComponent: string;
  options: IoptionsToBasicMenu[];
  custonIcon?: React.ReactNode;
  sxMap?: {
    menu?: SxProps<Theme>;
    menuItem?: SxProps<Theme>;
  };
  disabled?: boolean;
}

const ITEMS_PER_LOAD = 200;
const SCROLL_THRESHOLD = 150;

export const BasicMenu: React.FC<IBasicMenuProps> = ({
  indexOfComponent,
  options = [],
  custonIcon = (
    <SysIcon name="moreVert" sx={{ color: (t) => t.palette.common.black }} />
  ),
  sxMap,
  disabled = false,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [visibleCount, setVisibleCount] = React.useState(ITEMS_PER_LOAD);

  const visibleCountRef = React.useRef(ITEMS_PER_LOAD);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    visibleCountRef.current = ITEMS_PER_LOAD;
    setVisibleCount(ITEMS_PER_LOAD);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (event: React.UIEvent<HTMLUListElement>) => {
    const element = event.currentTarget;

    const reachedThreshold =
      element.scrollHeight - element.scrollTop - element.clientHeight <=
      SCROLL_THRESHOLD;

    if (reachedThreshold && visibleCountRef.current < options.length) {
      const nextCount = Math.min(
        visibleCountRef.current + ITEMS_PER_LOAD,
        options.length,
      );

      visibleCountRef.current = nextCount;
      setVisibleCount(nextCount);
    }
  };

  return (
    <>
      <Styles.IconButtonBody
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disabled={disabled}
      >
        {custonIcon}
      </Styles.IconButtonBody>

      <Styles.MenuBody
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
            onScroll: handleScroll,
            style: {
              maxHeight: "calc(100vh - 96px)",
              overflowY: "auto",
            },
          },
        }}
        sx={sxMap?.menu}
        {...props}
      >
        {options.slice(0, visibleCount).map((item, index) => (
          <MenuItem
            key={`Component${indexOfComponent}basicMenu${index}`}
            onClick={() => {
              item.onClick();
              handleClose();
            }}
            sx={sxMap?.menuItem}
          >
            <Typography variant="body2">{item.label}</Typography>
          </MenuItem>
        ))}
      </Styles.MenuBody>
    </>
  );
};
