import { Box } from "@mui/material";
import { IconTooltip } from "../../sysComponents/iconTooltip/IconTooltip";
import TuneIcon from "@mui/icons-material/Tune";
import {
  BasicMenu,
  optionsToBasicMenu,
} from "../../sysComponents/basicMenu/BasicMenu";
import { SysButton } from "../../sysComponents/sysForm/primaryButton/SysButton";

export const Example = () => {
  const optionsToBasicMenu: optionsToBasicMenu[] = [
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

  return (
    <Box sx={{ padding: "40px 20px" }}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
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
    </Box>
  );
};
