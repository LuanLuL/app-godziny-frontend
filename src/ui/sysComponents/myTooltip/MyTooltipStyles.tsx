import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

interface IMyTooltip extends TooltipProps {
  customWidth: number;
}

const CustomWidthTooltip = styled(
  ({ className, customWidth, ...props }: IMyTooltip) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ customWidth, theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: customWidth,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 220,
  },
}));

export { CustomWidthTooltip };
