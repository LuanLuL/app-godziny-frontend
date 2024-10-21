import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { styled } from "@mui/material";

const QuestionIcon = styled(HelpOutlineOutlinedIcon)(({ theme }) => ({
  width: "18px",
  height: "18px",
  color: theme.palette.info.main,
}));

const InformationIcon = styled(InfoOutlinedIcon)(({ theme }) => ({
  width: "18px",
  height: "18px",
  color: theme.palette.info.main,
}));

export { QuestionIcon, InformationIcon };
