import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import { Button, Link } from "@mui/material";
import Group from "../../../assets/images/about-us.png";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Information & Exams System",
    description:
      "Admission and Registration • Courses and Classes • Questions Bank and Exams",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Learning Management System",
    description:
      "Courses and Content • Assignments and Interactive Activities • Teaching and Learning",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Requests System",
    description:
      "Online Web-requests • Applying and Tracking Requests • Grading Objections",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "SVUPedia",
    description:
      "Books and Courses description • Students and Researchers • Published Papers and Projects",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "SVU Email",
    description:
      "Web-mail • Mail-lists • For the Academic and Administrative Staff",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Mobile Apps",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
  },
];

export default function AboutUsSection() {
  return (
    <Box
      id="about-us"
      sx={(theme) => ({
        width: "100%",
        height: "115vh",
        marginTop: "0.6rem",
        paddingTop: "1rem",
        backgroundImage: `url(${Group})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // overflow: "hidden",
        position: "relative",
        // ...theme.applyStyles("dark", {}),
      })}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            paddingTop: "4rem",
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Why Choose us?
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.800" }}>
            Some of the features that make you choose the{" "}
            <Link color="#009CDF">ticket system</Link>
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} mb={5}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: "#ffffff", // خلفية سوداء
                  color: "gray.800", // نص أبيض
                  borderRadius: "16px", 
                  // borderColor: "hsla(220, 25%, 25%, 0.3)",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Stack direction="column" spacing={2}>
                  <Box sx={{ opacity: "50%", fontSize: "2rem" }}>
                    {item.icon}
                  </Box>
                  <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Box>
                    {/* هنا يتم عرض كل جملة في سطر جديد */}
                    <Typography variant="body2" sx={{ color: "grey.400" }}>
                      Admission and Registration
                    </Typography>
                    <Typography variant="body2" sx={{ color: "grey.400" }}>
                      Courses and Classes
                    </Typography>
                    <Typography variant="body2" sx={{ color: "grey.400" }}>
                      Questions Bank and Exams
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" color="info" size="small">
          Submit Ticket
        </Button>
      </Container>
    </Box>
  );
}
