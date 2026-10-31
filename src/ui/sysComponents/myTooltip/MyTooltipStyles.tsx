import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

import sysSizing from "../../sysMaterialUi/sizing/sysSizes";

interface IMyTooltip extends TooltipProps {
  customWidth: string;
}

const CustomWidthTooltip = styled(
  ({ className, customWidth, ...props }: IMyTooltip) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ),
)(({ customWidth, theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.sysText?.body,
    color: theme.palette.sysText?.base,
    borderRadius: sysSizing.radiusXs,
    padding: `${sysSizing.spacingRemXs} ${sysSizing.spacingRemSm}`,
    maxWidth: customWidth,
    ...theme.typography.caption,
  },

  [theme.breakpoints.down("sm")]: {
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 220,
    },
  },
}));

export { CustomWidthTooltip };
