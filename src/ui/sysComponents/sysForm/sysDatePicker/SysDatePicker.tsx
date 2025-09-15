import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";
import Styles, {
  datePickerInputPropsSx,
  datePickerPopperSx,
} from "./SysDatePickerStyles";
import { SysSimpleLabel } from "../sysSimpleLabel/SysSimpleLabel";

type ISysDatePicker = {
  label: string;
  value: Date | null;
  placeholder?: string;
  maxWidth?: string;
  error?: boolean;
  msgError?: string;
  format?: string;
  disabled?: boolean;
  changeValue: (date: Date | null) => void;
};

export const SysDatePicker: React.FC<ISysDatePicker> = ({
  label,
  value,
  placeholder = `Selecione ${label}`,
  maxWidth = "1000px",
  error = false,
  msgError = "Algo deu errado, por favor, tente novamente.",
  format = "dd/MM/yyyy",
  disabled = false,
  changeValue,
}) => {
  const handleChange = (date: Date | null) => {
    changeValue(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <Styles.Container>
        <SysSimpleLabel
          label={label ?? "Selecione uma data"}
          disabled={disabled}
        />
        <Styles.MyDatePicker
          value={value}
          onChange={handleChange}
          format={format}
          slotProps={{
            textField: {
              placeholder,
              error,
              InputProps: { sx: datePickerInputPropsSx },
            },
            field: { clearable: true },
            popper: { sx: datePickerPopperSx },
          }}
          disabled={disabled}
        />
        <Styles.ErrorMessageBody sx={{ maxWidth: maxWidth }}>
          {error && (
            <Styles.ErrorMessageText variant="caption" color="error">
              {msgError}
            </Styles.ErrorMessageText>
          )}
        </Styles.ErrorMessageBody>
      </Styles.Container>
    </LocalizationProvider>
  );
};
