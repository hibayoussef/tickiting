import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DocumentIcon from "@mui/icons-material/DescriptionRounded";

import GroupImage from "../../../assets/images/services.png"; // استيراد الصورة

const services = [
  {
    title: "IT Services",
    items: [
      "Lorem Ipsum Dolor Sit Amet, Consectetur",
      "Lorem Ipsum Dolor Sit Amet, Consectetur",
      "Lorem Ipsum Dolor Sit Amet, Consectetur",
    ],
  },
  {
    title: "Smart Home",
    items: [
      "Lorem Ipsum Dolor Sit Amet, Consectetur",
      "Lorem Ipsum Dolor Sit Amet, Consectetur",
      "Lorem Ipsum Dolor Sit Amet, Consectetur",
    ],
  },
  {
    title: "Software Services",
    items: [
      "Lorem Ipsum Dolor Sit Amet, Consectetur",
      "Lorem Ipsum Dolor Sit Amet, Consectetur",
      "Lorem Ipsum Dolor Sit Amet, Consectetur",
    ],
  },
];

export default function ServicesSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
        color: "white",
        background: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 253, 253, 0.6)), url(${GroupImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        {/* العنوان الرئيسي */}
        <Box textAlign="center" mb={5}>
          <Typography
            component="h2"
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "cyan",
            }}
          >
            Our Services
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.300" }}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor
          </Typography>
        </Box>

        {/* البطاقات */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 3,
                  backgroundColor: "rgba(0, 0, 0, 0.8)", // خلفية معتمة للبطاقة
                  color: "inherit",
                  borderRadius: "12px",
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.5)",
                  height: "100%",
                }}
              >
                {/* العنوان */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "cyan",
                    mb: 2,
                    position: "relative",
                    pb: 1,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "30%",
                      height: "3px",
                      backgroundColor: "cyan",
                    },
                  }}
                >
                  {service.title}
                </Typography>

                {/* القائمة */}
                <List>
                  {service.items.map((item, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemIcon>
                        <DocumentIcon sx={{ color: "cyan" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          variant: "body2",
                          color: "grey.300",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
