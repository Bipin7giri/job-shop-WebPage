"use client";

import Container from "./components/jobContainer/container";
import JobCard from "./components/jobContainer/jobCard";
import NavBar from "./components/NavBar/navBar";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Container />
    </>
  );
}
