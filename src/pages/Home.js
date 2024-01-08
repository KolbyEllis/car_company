import React from "react";
import Hero from "../components/hero";
import Search from "../components/search";
import Info from "../components/Info";
import CarReservation from "../components/CarReservation";
import HomeBanner from "../components/HomeBanner";
import WhySection from "../components/WhySection";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <section>
<Hero />
<Search />
<Info />
<CarReservation />
<HomeBanner />
<WhySection />
<Reviews />
<Faq />
<Download />
<Footer />
</section>
  );
}

export default Home;
