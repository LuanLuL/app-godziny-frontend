import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { IconTooltip } from "../../sysComponents/iconTooltip/IconTooltip";
import TuneIcon from "@mui/icons-material/Tune";
import {
  BasicMenu,
  IoptionsToBasicMenu,
} from "../../sysComponents/basicMenu/BasicMenu";
import { SysButton } from "../../sysComponents/sysForm/sysButton/SysButton";
import { SysToggleField } from "../../sysComponents/sysForm/sysToggleField/SysToggleField";
import { SysTextField } from "../../sysComponents/sysForm/sysTextField/SysTextField";
import {
  IOptionToSysRadioField,
  SysRadioField,
} from "../../sysComponents/sysForm/sysRadioField/SysRadioField";
import { SysDatePicker } from "../../sysComponents/sysForm/sysDatePicker/SysDatePicker";
import SysAppContext from "../../../app/AppContext";
import DeleteDialog from "../../sysComponents/showDialog/custom/deleteDialog/DeleteDialog";
import ConfirmDialog from "../../sysComponents/showDialog/custom/confirmDialog/ConfirmDialog";
type Form = {
  toggleInput: boolean;
  textInput: string;
  radioInput: string;
  dateInput: Date | null;
};

export const Example = () => {
  const { showNotification, showDialog, closeDialog } =
    useContext(SysAppContext);

  const [valueForm, setValueForm] = useState<Form>({
    toggleInput: false,
    textInput: "",
    radioInput: "",
    dateInput: null,
  });

  const handleChange = (event: any) => {
    setValueForm({
      ...valueForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleBoolean = (event: any) => {
    setValueForm({
      ...valueForm,
      [event.target.name]: event.target.checked,
    });
  };

  const handleDateChange = (date: Date | null) => {
    setValueForm({
      ...valueForm,
      dateInput: date,
    });
  };

  const optionsToBasicMenu: IoptionsToBasicMenu[] = [
    {
      label: "Opção 1",
      onClick: () => {
        console.log("Selecionei a opção 1");
      },
    },
    {
      label: "Opção 2",
      onClick: () => {
        console.log("Selecionei a opção 2");
      },
    },
    {
      label: "Opção 3",
      onClick: () => {
        console.log("Selecionei a opção 3");
      },
    },
    {
      label: "Opção 4",
      onClick: () => {
        console.log("Selecionei a opção 4");
      },
    },
    {
      label: "Opção 5",
      onClick: () => {
        console.log("Selecionei a opção 5");
      },
    },
  ];

  const optionsToRadioField: IOptionToSysRadioField[] = [
    {
      label: "Opção 1",
      value: "option1",
    },
    {
      label: "Opção 2",
      value: "option2",
    },
    {
      label: "Opção 3",
      value: "option3",
    },
  ];

  console.log(valueForm);

  return (
    <Box
      sx={{
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <IconTooltip
            title="Informe alguma coisa para o usuário aqui!"
            type="info"
            disableInteractive
          >
            <></>
          </IconTooltip>
          <IconTooltip
            title="Retire as possíveis dúvidas do usuário aqui!"
            type="help"
            disableInteractive
          >
            <></>
          </IconTooltip>
        </Box>
        <BasicMenu indexOfComponent="1" options={optionsToBasicMenu} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <SysButton
            mode="primary"
            label="Primary"
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              showNotification({
                open: true,
                duration: 6000,
                type: "default",
                message: "Teste número 1",
              });
              console.log("Clicou no primary button!", event);
            }}
          />
          <SysButton
            mode="primary"
            label="Primary disabled"
            disabled
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              console.log("Clicou no primary button desabilitado!", event);
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <SysButton
            mode="secondary"
            label="Secondary"
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              showNotification({
                open: true,
                duration: 6000,
                type: "error",
                message: "Teste número 2",
              });
              console.log("Clicou no secondary button!", event);
            }}
          />
          <SysButton
            mode="secondary"
            label="Secondary disabled"
            disabled
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              console.log("Clicou no secondary button desabilitado!", event);
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <SysButton
            onClick={() => {
              DeleteDialog({
                showDialog,
                closeDialog,
                title: "Tem certeza que deseja excluir?",
                message: "Esta ação não poderá ser desfeita.",
                onDeleteConfirm: () => {
                  showNotification({
                    message: "Excluído com sucesso!",
                  });
                },
              });
            }}
            mode={"primary"}
            label={"Exibir diálogo de exclusão"}
          />
          <SysButton
            onClick={() => {
              ConfirmDialog({
                showDialog,
                closeDialog,
                title: "Confirmar cadastro",
                message:
                  "Tem certeza que deseja confirmar o cadastro dos dados preenchidos?",
                onConfirm: () => {
                  showNotification({
                    message: "Dados salvos!",
                  });
                },
              });
            }}
            label={"Exibir diálogo de confirmação"}
            mode={"primary"}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <SysButton
            mode="secondary"
            label="Icon"
            startIcon={<TuneIcon />}
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              console.log("Clicou no secondary button com icon!", event);
            }}
          />
          <SysButton
            mode="link"
            label=" http://link"
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              console.log("Clicou no link button!", event);
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <SysToggleField
            label="Label toggleInput"
            name="toggleInput"
            msgchecked="Positivo"
            msgunchecked="Negativo"
            changeValue={handleBoolean}
            value={valueForm.toggleInput}
          />
          <SysToggleField
            label="Label toggleInput Disabled"
            name="toggleInput"
            msgchecked="Disabled"
            msgunchecked="Disabled"
            changeValue={handleBoolean}
            value={valueForm.toggleInput}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "300px",
          }}
        >
          <SysTextField
            label="Label textInput"
            name="textInput"
            placeholder="Digite o valor do textInput"
            value={valueForm.textInput}
            changeValue={handleChange}
            maxWidth="300px"
          />
          <SysTextField
            label="Label textInput Error"
            name="textInput"
            placeholder="Digite o valor do textInput"
            value={valueForm.textInput}
            changeValue={handleChange}
            maxWidth="300px"
            error
            msgError="É preciso digitar no mínimo 30 caracteres neste campo"
            showNumberCaracters
            maxLength={30}
          />
          <SysTextField
            label="Label textInput Disabled"
            name="textInput"
            placeholder="Digite o valor do textInput"
            value={valueForm.textInput}
            changeValue={handleChange}
            maxWidth="300px"
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "420px",
          }}
        >
          <SysRadioField
            label="Label radioInput Check"
            name="radioInput"
            value={valueForm.radioInput}
            options={optionsToRadioField}
            changeValue={handleChange}
            maxWidth="420px"
            useCheckedIcon
          />
          <SysRadioField
            label="Label radioInput"
            name="radioInput"
            value={valueForm.radioInput}
            options={optionsToRadioField}
            changeValue={handleChange}
            maxWidth="420px"
          />
          <SysRadioField
            label="Label radioInput Disabled"
            name="radioInput"
            value={valueForm.radioInput}
            options={optionsToRadioField}
            changeValue={handleChange}
            maxWidth="420px"
            disabled
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "300px",
          }}
        >
          <SysDatePicker
            label="Data de nascimento"
            value={valueForm.dateInput}
            changeValue={handleDateChange}
            maxWidth="300px"
            placeholder="Selecione uma data"
          />
          <SysDatePicker
            label="Data com erro"
            value={valueForm.dateInput}
            changeValue={handleDateChange}
            maxWidth="300px"
            error
            msgError="É necessário selecionar uma data válida"
          />
          <SysDatePicker
            label="Data desabilitada"
            value={valueForm.dateInput}
            changeValue={handleDateChange}
            maxWidth="300px"
            disabled
          />
        </Box>
      </Box>
    </Box>
  );
};
