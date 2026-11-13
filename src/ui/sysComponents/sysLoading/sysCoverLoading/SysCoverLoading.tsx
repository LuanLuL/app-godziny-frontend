import { SxProps, Theme, Typography, TypographyProps } from "@mui/material";
import Styles from "../components/SysLoadingStyles";

interface ISysCoverLoading {
  label?: string;
  size?: "small" | "medium" | "large";
  sxMap?: {
    container?: SxProps<Theme>;
    loading?: SxProps<Theme>;
    label?: SxProps<Theme>;
  };
}

export const SysCoverLoading: React.FC<ISysCoverLoading> = ({
  label,
  size = "medium",
  sxMap,
}) => {
  const typografyVariant: Record<
    "small" | "medium" | "large",
    TypographyProps["variant"]
  > = {
    small: "caption",
    medium: "body1",
    large: "h6",
  };

  return (
    <Styles.LoadingOverlay>
      <Styles.Container sx={sxMap?.container}>
        <Styles.Content size={size}>
          <Styles.Loading sx={sxMap?.loading} size={size} />
          {label && (
            <Typography
              sx={{
                color: (theme) => theme.palette.primary.main,
                ...sxMap?.label,
              }}
              variant={typografyVariant[size]}
            >
              {label}
            </Typography>
          )}
        </Styles.Content>
      </Styles.Container>
    </Styles.LoadingOverlay>
  );
};
