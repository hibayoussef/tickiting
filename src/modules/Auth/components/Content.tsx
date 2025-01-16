import Stack from "@mui/material/Stack";
import CreateAccountImage from "../../../components/images/d";
import d from "../../../assets/images/sss.png";

export default function Content() {
  return (
    <Stack
      sx={{
        flexDirection: "column",
        alignSelf: "center",
        gap: 4,
        maxWidth: 450,
      }}
    >
      <img src={d} alt="" />
    </Stack>
  );
}
