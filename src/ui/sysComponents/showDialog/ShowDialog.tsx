/* eslint-disable */
import React, { ReactNode, useEffect } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogProps,
  SxProps,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Styles from "./ShowDialogStyles";
import { DialogTransitions } from "./transitions";
import { ISysGeneralComponentsCommon } from "../../../typings/DefaultTypings";

export interface IShowDialogProps
  extends ISysGeneralComponentsCommon,
    Omit<DialogProps, "open"> {
  open?: boolean;
  close?: (event: object, reason: "backdropClick" | "escapeKeyDown") => void;
  onOpen?: () => void;
  onClose?: () => void;
  /** Título exibido no topo do diálogo, fornece contexto sobre o seu conteúdo. */
  title?: string;
  /** Ícone opcional posicionado antes do título. */
  prefixIcon?: ReactNode;
  /** Ícone opcional posicionado após o título, podendo ser utilizado para ações adicionais. */
  sufixIcon?: ReactNode;
  /** Mensagem ou descrição exibida no corpo do diálogo, fornecendo informações detalhadas ao usuário. */
  message?: string;
  /** Personalização do cabeçalho do diálogo com um único elemento JSX ou um conjunto de elementos. */
  header?: ReactNode;
  /** Conteúdo principal do diálogo, permitindo a inserção de elementos JSX complexos ou simples. */
  body?: ReactNode;
  /** Elementos JSX para ações do diálogo, como botões de confirmação ou cancelamento. */
  actions?: ReactNode;
  /** Estilização customizada do diálogo seguindo padrões Material-UI, para temas e layout. */
  sx?: SxProps<Theme>;
  /** Estilos personalizados aplicados especificamente ao fundo do diálogo. */
  backgroundSx?: SxProps<Theme>;
  /** Se `true`, exibe o diálogo em tela cheia, ideal para dispositivos móveis ou conteúdos detalhados. */
  fullScreen?: boolean;
  /** Ponto de quebra para alteração do diálogo para tela cheia, ajustável conforme tamanho da tela. */
  fullScreenMediaQuery?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Tipo de transição de animação para a abertura/fechamento do diálogo, adicionando dinamismo visual. */
  transition?: "slide" | "grow" | "zoom" | "fade";
  /**
   * Permite a inserção de conteúdo personalizado no diálogo, possibilitando uma reestruturação total para
   * atender necessidades específicas de design e funcionalidade, indo além das propriedades padrão.
   */
  children?: ReactNode;
}

export const ShowDialog: React.FC<IShowDialogProps> = ({
  open,
  close,
  title,
  message,
  header,
  prefixIcon,
  sufixIcon,
  body,
  actions,
  duration,
  sx,
  backgroundSx,
  fullScreen,
  fullScreenMediaQuery,
  transition,
  children,
  ...dialogProps
}) => {
  useEffect(() => {
    if (!duration) return;
    let timer: number | undefined;
    if (open && duration)
      timer = window.setTimeout(() => close?.({}, "backdropClick"), duration);
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [open]);

  const theme = useTheme();
  const isFullScreen = useMediaQuery(
    theme.breakpoints.down(fullScreenMediaQuery ?? "xs")
  );
  const hasChildren = !!children;
  return (
    <Dialog
      {...dialogProps}
      open={open ?? false}
      onClose={close}
      TransitionComponent={DialogTransitions(transition ?? "zoom")}
      PaperProps={
        dialogProps.PaperProps ?? {
          sx: sx,
        }
      }
      sx={backgroundSx}
      fullScreen={fullScreen || (!!fullScreenMediaQuery && isFullScreen)}
    >
      <>
        {hasChildren ? (
          children
        ) : (
          <>
            {header || (
              <Styles.DialogTitleStyled>
                {prefixIcon}
                {title}
                <Box flexGrow={1} />
                {sufixIcon}
              </Styles.DialogTitleStyled>
            )}
            {(!!body || !!message) && (
              <Styles.DialogContentStyled>
                {body ? body : <DialogContentText>{message}</DialogContentText>}
              </Styles.DialogContentStyled>
            )}
            {!!actions && <DialogActions>{actions}</DialogActions>}
          </>
        )}
      </>
    </Dialog>
  );
};
