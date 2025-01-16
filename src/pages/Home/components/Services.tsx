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
        py: 8,
        color: "white",
        backgroundImage: "url('/path-to-your-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Box textAlign="center" mb={5}>
          <Typography component="h2" variant="h4" fontWeight="bold" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} mb={5}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "inherit",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "cyan",
                    mb: 2,
                    borderBottom: "4px solid cyan",
                    display: "inline-block",
                  }}
                >
                  {service.title}
                </Typography>
                <List>
                  {service.items.map((item, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemIcon>
                        <DocumentIcon sx={{ color: "cyan" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ variant: "body2", color: "grey.400" }}
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
