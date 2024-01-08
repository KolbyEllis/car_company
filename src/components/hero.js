import React from "react";
import { Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-container-left">
          <h5 className="hero-title">Plan your trip now</h5>
          <h1 className="hero-cta">
            Save <span style={{ color: "#EF6A31" }}>big</span> with our <br /> car rental
          </h1>
          <p className="hero-subtext">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,<br />flexible pick-up options and much more.
          </p>
          <div className="btn-container">
            <Button className="book-ride-btn">
              Book Ride <FontAwesomeIcon className="checkmark-icon" icon={faCircleCheck} size="xs" />
            </Button>
            <Button className="learn-more-btn">
              Learn More <FontAwesomeIcon className="arrow-icon" icon={faGreaterThan} size="xs" />
            </Button>
          </div>
        </div>
        <div className="hero-container-right">
          <div className="overlay">
          <Image className="hero-bg" src="/images/hero-bg.png" alt="city" />
            <Image className="mercedes" src="/images/mercedes.png" alt="mercedes car" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;