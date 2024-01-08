import React from "react";
import { Form } from "react-bootstrap";
import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";

function Contact() {
    return (
        <div>
        <div className="contact-container">
        <div className="contact-text-container">
      <h2 className="contact-heading">
      Need additional information?

      </h2>
      <div>
        <p>
        A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.
        </p>
   
        </div>
      </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="your.email@yahoo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicComments">
        <Form.Label>What Can We Help You With?</Form.Label>
        <Form.Control type="comment" placeholder="Write Here..." />
      </Form.Group>
      <button className="contact-btn">Send Message</button>
    </Form>
    </div>
        <AboutBanner />
        <Footer />
        </div>
        );
    }
export default Contact;