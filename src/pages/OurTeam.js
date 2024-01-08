import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";

function OurTeam() {
  return (
    <div className="team-container">
      <h1>Our Team</h1>

      <Container>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className="team-card" style={{ height: "100%" }}>
              <Card.Img className="team-pic" variant="top" src="/images/miller.png" />
              <Card.Body>
                <Card.Title>Luke Miller</Card.Title>
                <Card.Text className="card-text">
                  Salesman
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className="team-card" style={{ height: "100%" }}>
              <Card.Img className="team-pic" variant="top" src="/images/diaz.png" />
              <Card.Body>
                <Card.Title>Michael Diaz</Card.Title>
                <Card.Text className="card-text">
                  Owner
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className="team-card" style={{ height: "100%" }}>
              <Card.Img className="team-pic" variant="top" src="/images/ross.png" />
              <Card.Body>
                <Card.Title>Briana Ross</Card.Title>
                <Card.Text className="card-text">
                  Photographer
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className="team-card" style={{ height: "100%" }}>
              <Card.Img className="team-pic" variant="top" src="/images/rivera.png" />
              <Card.Body>
                <Card.Title>Lauren Rivera</Card.Title>
                <Card.Text className="card-text">
                  Car Detailist
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className="team-card" style={{ height: "100%" }}>
              <Card.Img className="team-pic" variant="top" src="/images/rizz.png" />
              <Card.Body>
                <Card.Title>Martin Rizz</Card.Title>
                <Card.Text className="card-text">
                  Mechanic
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className="team-card" style={{ height: "100%" }}>
              <Card.Img className="team-pic" variant="top" src="/images/hunt.png" />
              <Card.Body>
                <Card.Title>Caitlyn Hunt</Card.Title>
                <Card.Text className="card-text">
                  Manager
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <AboutBanner />
      <Footer />
    </div>
  );
}

export default OurTeam;
