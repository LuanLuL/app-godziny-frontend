import React, { ChangeEvent } from "react";
import { TextFieldProps, Typography } from "@mui/material";
import Styles from "./SysTextFieldStyles";
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
      <Styles.ShowNumberCaractersBody>
        <Typography variant="caption">{`${value.length}/${maxLength}`}</Typography>
      </Styles.ShowNumberCaractersBody>
    );
  };

  return (
    <Styles.Container>
      <SysSimpleLabel
        label={label ?? "Digite um texto"}
        disabled={props.disabled ?? false}
      />
      <Styles.MyTextField
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
      <Styles.ErrorMessageBody sx={{ maxWidth: maxWidth }}>
        {error && (
          <Styles.ErrorMessageText variant="caption" color="error">
            {msgError}
          </Styles.ErrorMessageText>
        )}
        {showNumberCaracters && showNumberCaractersComponent()}
      </Styles.ErrorMessageBody>
    </Styles.Container>
  );
};
