import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Styles from "./BasicMenuStyles";
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
      <Styles.IconButtonBody
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Styles.IconButtonBody>
      <Styles.MenuBody
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
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
      </Styles.MenuBody>
    </>
  );
};
