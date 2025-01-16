import { CssBaseline } from "@mui/material";
import Footer from "../../../components/layout/Footer";
import AppAppBar from "../../../components/layout/Header";
import AboutUsSection from "../components/Aboutus";
import MobileAppSection from "../components/MobileApp";
import ServicesSection from "../components/Services";
import WelcomeSection from "../components/Welcome";

const Home = (props: { disableCustomTheme?: boolean }) => {
  return (
    <>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <WelcomeSection />
      <AboutUsSection />
      <MobileAppSection />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default Home;
