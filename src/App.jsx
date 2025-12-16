import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import HeroHeader from "./components/header/HeroHeader";
import ServicesLanding from "./components/services/ServicesLanding";
import RecentWork from "./components/works/RecentWork";
import PortfolioLanding from "./components/portfolio/PortfolioLanding";
import ContactSection from "./components/contact/ContactSection";

import ContactPage from "./components/contctUs/ContactPage";

function Home() {
  return (
    <>
      <HeroHeader />
      <ServicesLanding />
      <RecentWork />
      <PortfolioLanding />
      <ContactSection />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioLanding />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}
