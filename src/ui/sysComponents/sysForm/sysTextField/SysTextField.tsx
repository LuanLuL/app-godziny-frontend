import React, { ChangeEvent } from "react";
import { Box, TextFieldProps, Typography, useTheme } from "@mui/material";
import { MyTextField, SysTextFieldStyles } from "./SysTextFieldStyles";

type ISysTextField = {
  label: string;
  value: string;
  placeholder?: string;
  maxWidth?: string;
  error?: boolean;
  msgError?: string;
  showNumberCaracters?: boolean;
  maxLength?: number;
  changeValue: (event: ChangeEvent<HTMLInputElement>) => void;
} & TextFieldProps;

export const SysTextField: React.FC<ISysTextField> = ({
  label,
  value,
  placeholder = `Digite o ${label}`,
  maxWidth = "1000px",
  error = false,
  msgError = "Algo deu errado, por favor, tente novamente.",
  showNumberCaracters = false,
  maxLength = 15,
  changeValue,
  ...props
}) => {
  const theme = useTheme();

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    changeValue(event);
  }

  const showNumberCaractersComponent = () => {
    return (
      <Box sx={SysTextFieldStyles.showNumberCaractersText}>
        <Typography variant="caption">{`${value.length}/${maxLength}`}</Typography>
      </Box>
    );
  };

  return (
    <Box sx={SysTextFieldStyles.container}>
      <Typography
        sx={{
          maxWidth: maxWidth,
          color: props.disabled
            ? theme.palette.info.light
            : "rgba(0,0,0, 0.72)",
          ...SysTextFieldStyles.label,
        }}
        variant="body2"
      >
        {label ?? "Digite um texto"}
      </Typography>
      <MyTextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        sx={{
          maxWidth: maxWidth,
        }}
        error={error}
        disabled={props.disabled}
        inputProps={{ maxLength: showNumberCaracters ? maxLength : undefined }}
        {...props}
      />
      <Box sx={[SysTextFieldStyles.errorMessageBody, { maxWidth: maxWidth }]}>
        {error && (
          <Typography
            variant="caption"
            color="error"
            sx={SysTextFieldStyles.errorMessageText}
          >
            {msgError}
          </Typography>
        )}
        {showNumberCaracters && showNumberCaractersComponent()}
      </Box>
    </Box>
  );
};
