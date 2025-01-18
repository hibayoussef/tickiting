import { Hidden, Stack } from "@mui/material";
import React from "react";
import Content from "../components/Content"; // استيراد مكون Content
import { CenterLayoutProps } from "../../../types/formTypes";

const CenterLayout: React.FC<CenterLayoutProps> = ({
  children,
  image,
  alt,
}) => {
  return (
    <Stack
      direction="column"
      component="main"
      mt="3rem"
      sx={{
        justifyContent: "center",
        height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
        marginTop: "10rem",
        minHeight: "100%",
      }}
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        sx={{
          justifyContent: "center",
          gap: { xs: 6, sm: 12 },
          p: 2,
          mx: "auto",
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{
            justifyContent: "center",
            gap: { xs: 6, sm: 12 },
            p: { xs: 2, sm: 4 },
            m: "auto",
          }}
        >
          <Hidden mdDown>{image && <Content src={image} alt={alt} />}</Hidden>

          {children}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CenterLayout;
