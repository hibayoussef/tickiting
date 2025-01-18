import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Group from "../../../assets/images/Group.png";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "80%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: "37px",
  outline: "9px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1.3px solid",
  borderColor: theme.palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: `url(${
    process.env.TEMPLATE_IMAGE_URL || "https://mui.com"
  }/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
     backgroundImage: `url(${Group})`,
    borderColor: theme.palette.grey[700],
  }),
}));

export default function WelcomeSection() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage: `url(${Group})`,
        backgroundRepeat: "no-repeat",
        ...theme.applyStyles("dark", {}),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{
            alignItems: "center",
            width: { xs: "100%", sm: "70%" },
            marginTop: "5rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(2rem, 9vw, 2.3rem)",
            }}
          >
            Welcome&nbsp;To&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "2.3rem",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              TICKETING SYSTEM
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Type your query or submit your ticke.
          </Typography>
        </Stack>
        <StyledBox id="image" />
      </Container>
    </Box>
  );
}
