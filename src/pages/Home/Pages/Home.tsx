import { Box, CssBaseline } from "@mui/material";
import Footer from "../../../components/layout/Footer";
import AppAppBar from "../../../components/layout/Header";
import AboutUsSection from "../components/Aboutus";
import MobileAppSection from "../components/MobileApp";
import ServicesSection from "../components/Services";
import WelcomeSection from "../components/Welcome";
import E from "../../../assets/images/Ellipse_1.png"
const Home = (props: { disableCustomTheme?: boolean }) => {
  return (
    <>
      <CssBaseline enableColorScheme />
      {/* <AppAppBar /> */}
      <WelcomeSection />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20px", // لتحديد موقع القوس بالضبط بين الأقسام
          left: 0,
          width: "100%",
          height: "auto",
          zIndex: 2,
        }}
      >
        <img
          src={E} // ضع مسار صورة القوس هنا
          alt="divider"
          style={{ width: "100%" }}
        />
      </Box>

      <AboutUsSection />
      <MobileAppSection />
      <ServicesSection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
