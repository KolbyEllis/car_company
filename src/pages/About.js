import React from "react";
import Footer from "../components/Footer";
import WhySection from "../components/WhySection";
import Info from "../components/Info";
import AboutBanner from "../components/AboutBanner";
import AboutUs from "../components/AboutUs";

function About() {
    return (
        <div>
        <AboutUs />
        <WhySection />
        <Info />
        <AboutBanner />
        <Footer />
        </div>
        );
    }
export default About;