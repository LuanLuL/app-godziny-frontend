import {
  alpha,
  SxProps,
  Theme,
  Typography,
  TypographyProps,
} from "@mui/material";
import Styles from "./SysEmptyStateStyles";

interface ISysEmptyStateProps {
  imagePath: string;
  imageSize?: { width?: number; height?: number };
  title: string;
  description: string;
  sxMap?: {
    container?: SxProps<Theme>;
    textContainer?: SxProps<Theme>;
    img?: SxProps<Theme>;
    title?: SxProps<Theme>;
    description?: SxProps<Theme>;
  };
}

export const SysEmptyState: React.FC<ISysEmptyStateProps> = ({
  imagePath,
  imageSize = { width: 190, height: 130 },
  title,
  description,
  sxMap,
}) => {
  return (
    <Styles.Container sx={sxMap?.container}>
      <img src={imagePath} alt="Empty State" style={{ ...imageSize }} />
      <Styles.TextContainer sx={sxMap?.textContainer}>
        <Typography
          sx={sxMap?.title}
          color="common.black"
          variant={"subtitle1"}
        >
          {title}
        </Typography>
        <Typography
          variant={"body2"}
          sx={{
            color: (theme) => alpha(theme.palette.common.black, 0.72),
            ...sxMap?.description,
          }}
        >
          {description}
        </Typography>
      </Styles.TextContainer>
    </Styles.Container>
  );
};
