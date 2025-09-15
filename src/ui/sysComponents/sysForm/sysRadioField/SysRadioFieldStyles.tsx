import { ElementType } from "react";
import RadioGroup, { RadioGroupProps } from "@mui/material/RadioGroup";
import FormControlLabel, { FormControlLabelProps } from "@mui/material/FormControlLabel";
import Radio, { RadioProps } from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";

interface IStyles {
  Container: ElementType<RadioGroupProps>;
  MyRadio: ElementType<RadioProps>;
  MyFormControlLabel: ElementType<FormControlLabelProps>;
}

const SysRadioFieldStyles: IStyles = {
  Container: styled(RadioGroup)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: `${sysSizing.base.baseRem1} ${sysSizing.base.baseRem3}`,
  })),
  MyRadio: styled(Radio)(({ theme }) => ({
    "&.Mui-disabled .MuiSvgIcon-root": {
      color: theme.palette.info.light,
    },
  })),
  MyFormControlLabel: styled(FormControlLabel)(({ theme }) => ({
    margin: "0px",
    "& .MuiFormControlLabel-label.Mui-disabled": {
      color: theme.palette.info.light,
    },
  })),
};

export default SysRadioFieldStyles;