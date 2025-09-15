import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { styled } from "@mui/material";
import { ElementType } from "react";

type HelpOutlineOutlinedIconProps = React.ComponentProps<
  typeof HelpOutlineOutlinedIcon
>;
type InfoOutlinedIconProps = React.ComponentProps<typeof InfoOutlinedIcon>;

interface IStyles {
  QuestionIcon: ElementType<HelpOutlineOutlinedIconProps>;
  InformationIcon: ElementType<InfoOutlinedIconProps>;
}

const IconTootipStyles: IStyles = {
  QuestionIcon: styled(HelpOutlineOutlinedIcon)(({ theme }) => ({
    width: "18px",
    height: "18px",
    color: theme.palette.info.main,
  })),
  InformationIcon: styled(InfoOutlinedIcon)(({ theme }) => ({
    width: "18px",
    height: "18px",
    color: theme.palette.info.main,
  })),
};

export default IconTootipStyles;
