import Stack from "@mui/material/Stack";

interface ContentProps {
  src: string;
  alt: string;
  maxWidth?: number;
}

export default function Content({ src, alt, maxWidth = 450 }: ContentProps) {
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
