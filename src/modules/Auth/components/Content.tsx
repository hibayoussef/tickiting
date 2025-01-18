import Stack from "@mui/material/Stack";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ContentProps } from "../../../types/formTypes";

export default function Content({ src, alt, maxWidth = 440 }: ContentProps) {
  return (
    <Stack
      sx={{
        flexDirection: "column",
        alignSelf: "center",
        gap: 4,
        maxWidth: maxWidth,
      }}
    >
      <img src={src} alt={alt} style={{ maxWidth: "100%" }} />
    </Stack>
  );
}
