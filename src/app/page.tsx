"use client";

import Container from "./components/jobContainer/container";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/detailsFooter";
import FooterLink from "./components/Footer/footerlinks";
import Carousel from "./components/Carousel/carousel";
export default function LandingPage() {
  return (
    <>
      <NavBar />
      {/* <Carousel /> */}
      <Container />
      <Footer />
      <FooterLink />
    </>
  );
}
