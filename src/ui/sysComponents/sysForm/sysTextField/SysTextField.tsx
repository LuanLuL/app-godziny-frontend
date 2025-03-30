import React, { ChangeEvent } from "react";
import { Box, TextFieldProps, Typography } from "@mui/material";
import { MyTextField, SysTextFieldStyles } from "./SysTextFieldStyles";
import { SysSimpleLabel } from "../sysSimpleLabel/SysSimpleLabel";

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
      <SysSimpleLabel
        label={label ?? "Digite um texto"}
        disabled={props.disabled ?? false}
      />
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
