import React from "react";
import CarReservation from "../components/CarReservation";
import Search from "../components/search";
import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";

function VehicleModels() {
    return (
    <div>
        <CarReservation />
        <div className="book-container">
            <h1 className="book-title">Book With Us Today</h1>
        <Search />
        </div>
        <AboutBanner />
        <Footer />
    </div>



        );
    }
export default VehicleModels;