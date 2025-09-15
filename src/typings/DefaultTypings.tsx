export interface ISysGeneralComponentsCommon {
  /* Controla a visibilidade do componente. */
  open?: boolean;
  /* Função de callback chamada quando o estado do componente é alterado para true. */
  onOpen?: (...props: any) => void;
  /* Função de callback chamada quando o estado do componente é alterado para false*/
  onClose?: (...props: any) => void;
  /* Tempo em milissegundos para fechamento automático do diálogo, útil para alertas temporários. */
  duration?: number;
  /*
   * Indica se o carregamento global do sistema deve ser exibido.
   * Útil para bloquear interações durante processos assíncronos.
   */
  loading?: boolean;
}
