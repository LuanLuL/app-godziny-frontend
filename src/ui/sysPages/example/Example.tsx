import { Box } from "@mui/material";
import { IconTooltip } from "../../sysComponents/iconTooltip/IconTooltip";
import {
  BasicMenu,
  optionsToBasicMenu,
} from "../../sysComponents/basicMenu/BasicMenu";

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
      <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
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
        <BasicMenu indexOfComponent="1" options={optionsToBasicMenu} />
      </Box>
    </Box>
  );
};
