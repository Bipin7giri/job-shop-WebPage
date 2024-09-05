"use client";

import Container from "./components/JobContainer/container";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/detailsFooter";
import FooterLink from "./components/Footer/footerlinks";
export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Container />
      <Footer />
      <FooterLink />
    </>
  );
}
