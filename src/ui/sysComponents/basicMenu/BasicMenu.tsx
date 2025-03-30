import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BasicMenuStyles } from "./BasicMenuStyles";
import Typography from "@mui/material/Typography";

export type IoptionsToBasicMenu = {
  label: string;
  onClick: () => void;
};

interface IBasicMenuProps {
  indexOfComponent: string;
  options: IoptionsToBasicMenu[];
}

export const BasicMenu: React.FC<IBasicMenuProps> = ({
  indexOfComponent,
  options = [],
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={BasicMenuStyles.iconButton}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={BasicMenuStyles.menu}
      >
        {options.map((item, index) => (
          <MenuItem
            key={`Component${indexOfComponent}basicMenu${index}`}
            onClick={() => {
              item.onClick();
              handleClose();
            }}
          >
            <Typography variant="body2">{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
