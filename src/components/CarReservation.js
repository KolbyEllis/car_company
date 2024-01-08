import React, { useState } from 'react';
import { Col, Nav, Row, Tab, Table } from 'react-bootstrap';

function CarReservation() {
  const [activeTab, setActiveTab] = useState('AudiA1');

  const handleTabClick = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <div className="reservation-container">
      <h5>Vehicle Models</h5>
      <h1>Our rental fleet</h1>
      <p className="reservation-container-text">
        Choose from a variety of our amazing vehicles to rent for your next

        adventure or business trip
      </p>

      <Tab.Container activeKey={activeTab}>
        <Row className="tab-row">
          <Col xs={12} sm={12} md={12} lg={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="AudiA1" onClick={() => handleTabClick("AudiA1")} className={activeTab === "AudiA1" ? "active-tab-clicked" : ""}>Audi A1 S-Line</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="VWGolf6" onClick={() => handleTabClick("VWGolf6")} className={activeTab === "VWGolf6" ? "active-tab-clicked" : ""}>VW Golf 6</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="ToyotaCamry" onClick={() => handleTabClick("ToyotaCamry")} className={activeTab === "ToyotaCamry" ? "active-tab-clicked" : ""}>Toyota Camry</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="BMW320" onClick={() => handleTabClick("BMW320")} className={activeTab === "BMW320" ? "active-tab-clicked" : ""}>BMW 320 ModernLine</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="MercedesGLK" onClick={() => handleTabClick("MercedesGLK")} className={activeTab === "MercedesGLK" ? "active-tab-clicked" : ""}>Mercedes-Benz GLK</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="VWPassatCC" onClick={() => handleTabClick("VWPassatCC")} className={activeTab === "VWPassatCC" ? "active-tab-clicked" : ""}>VW Passat CC</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs={12} sm={10} md={12} lg={9}>
            <Tab.Content>
            <Tab.Pane eventKey="AudiA1">
                <Row>
                <div className='car-table-container'>
                  <Col xs={12} sm={7} md={6} lg={8}>
                    <img className="car" src="/images/audi.png" alt="Audi A1" />
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="table-with-image">
                      <Table bordered>
                        <thead>
                          <tr>
                            <th className="golf" scope="col" colSpan="2">
                              <div className="table-header">
                                <h5>
                                  <strong>$45 </strong>&nbsp;
                                </h5>
                                <p className="table-subtext">/ rent per day</p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Model</td>
                            <td>Audi</td>
                          </tr>
                          <tr>
                            <td>Mark</td>
                            <td>A1</td>
                          </tr>
                          <tr>
                            <td>Year</td>
                            <td>2012</td>
                          </tr>
                          <tr>
                            <td>Doors</td>
                            <td>4/5</td>
                          </tr>
                          <tr>
                            <td>AC</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Transmission</td>
                            <td>Manual</td>
                          </tr>
                          <tr>
                            <td>Fuel</td>
                            <td>Gasoline</td>
                          </tr>
                        </tbody>
                      </Table>
                      <button className="reserve-btn">RESERVE NOW</button>
                    </div>
                  </Col>
                  </div>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="VWGolf6">
                <Row>
                <div className='car-table-container'>
                  <Col xs={12} sm={7} md={6} lg={8}>
                    <img className="car" src="/images/vwgolf.jpg" alt="Audi A1" />
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="table-with-image">
                      <Table bordered>
                        <thead>
                          <tr>
                            <th className="golf" scope="col" colSpan="2">
                              <div className="table-header">
                                <h5>
                                  <strong>$37 </strong>&nbsp;
                                </h5>
                                <p className="table-subtext">/ rent per day</p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Model</td>
                            <td>Golf 6</td>
                          </tr>
                          <tr>
                            <td>Mark</td>
                            <td>Volkswagen</td>
                          </tr>
                          <tr>
                            <td>Year</td>
                            <td>2008</td>
                          </tr>
                          <tr>
                            <td>Doors</td>
                            <td>4/5</td>
                          </tr>
                          <tr>
                            <td>AC</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Transmission</td>
                            <td>Manual</td>
                          </tr>
                          <tr>
                            <td>Fuel</td>
                            <td>Diesel</td>
                          </tr>
                        </tbody>
                      </Table>
                      <button className="reserve-btn">RESERVE NOW</button>
                    </div>
                  </Col>
                  </div>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="ToyotaCamry">
                <Row>
                <div className='car-table-container'>
                  <Col xs={12} sm={7} md={6} lg={8}>
                    <img className="car" src="/images/camry.jpg" alt="Audi A1" />
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="table-with-image">
                      <Table bordered>
                        <thead>
                          <tr>
                            <th className="golf" scope="col" colSpan="2">
                              <div className="table-header">
                                <h5>
                                  <strong>$30 </strong>&nbsp;
                                </h5>
                                <p className="table-subtext">/ rent per day</p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Model</td>
                            <td>Camry</td>
                          </tr>
                          <tr>
                            <td>Mark</td>
                            <td>Toyota</td>
                          </tr>
                          <tr>
                            <td>Year</td>
                            <td>2006</td>
                          </tr>
                          <tr>
                            <td>Doors</td>
                            <td>4/5</td>
                          </tr>
                          <tr>
                            <td>AC</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Transmission</td>
                            <td>Automatic</td>
                          </tr>
                          <tr>
                            <td>Fuel</td>
                            <td>Hybrid</td>
                          </tr>
                        </tbody>
                      </Table>
                      <button className="reserve-btn">RESERVE NOW</button>
                    </div>
                  </Col>
                  </div>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="BMW320">
                <Row>
                <div className='car-table-container'>
                  <Col xs={12} sm={7} md={6} lg={8}>
                    <img className="car" src="/images/bmw.jpg" alt="Audi A1" />
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="table-with-image">
                      <Table bordered>
                        <thead>
                          <tr>
                            <th className="golf" scope="col" colSpan="2">
                              <div className="table-header">
                                <h5>
                                  <strong>$35 </strong>&nbsp;
                                </h5>
                                <p className="table-subtext">/ rent per day</p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Model</td>
                            <td>320</td>
                          </tr>
                          <tr>
                            <td>Mark</td>
                            <td>BMW</td>
                          </tr>
                          <tr>
                            <td>Year</td>
                            <td>2006</td>
                          </tr>
                          <tr>
                            <td>Doors</td>
                            <td>4/5</td>
                          </tr>
                          <tr>
                            <td>AC</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Transmission</td>
                            <td>Automatic</td>
                          </tr>
                          <tr>
                            <td>Fuel</td>
                            <td>Hybrid</td>
                          </tr>
                        </tbody>               
                      </Table>
                      <button className="reserve-btn">RESERVE NOW</button>
                    </div>
                  </Col>
                  </div>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="MercedesGLK">
                <Row>
                <div className='car-table-container'>
                  <Col xs={12} sm={7} md={6}  lg={8}>
                    <img className="car" src="/images/glk.jpg" alt="Audi A1" />
                  </Col>
                  <Col xs={12} sm={6} md={6}  lg={4}>
                    <div className="table-with-image">
                      <Table bordered>
                        <thead>
                          <tr>
                            <th className="golf" scope="col" colSpan="2">
                              <div className="table-header">
                                <h5>
                                  <strong>$50 </strong>&nbsp;
                                </h5>
                                <p className="table-subtext">/ rent per day</p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Model</td>
                            <td>Benz GLK</td>
                          </tr>
                          <tr>
                            <td>Mark</td>
                            <td>Mercedes</td>
                          </tr>
                          <tr>
                            <td>Year</td>
                            <td>2006</td>
                          </tr>
                          <tr>
                            <td>Doors</td>
                            <td>4/5</td>
                          </tr>
                          <tr>
                            <td>AC</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Transmission</td>
                            <td>Manual</td>
                          </tr>
                          <tr>
                            <td>Fuel</td>
                            <td>Diesel</td>
                          </tr>
                        </tbody>
                      </Table>
                      <button className="reserve-btn">RESERVE NOW</button>
                    </div>
                  </Col>
                  </div>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="VWPassatCC">
                <Row>
                <div className='car-table-container'>
                  <Col xs={12} sm={7} md={6} lg={8}>
                    <img className="car" src="/images/passat.jpg" alt="Audi A1" />
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={4}>
                    <div className="table-with-image">
                      <Table bordered>
                        <thead>
                          <tr>
                            <th className="golf" scope="col" colSpan="2">
                              <div className="table-header">
                                <h5>
                                  <strong>$25 </strong>&nbsp;
                                </h5>
                                <p className="table-subtext">/ rent per day</p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Model</td>
                            <td>Passat cc</td>
                          </tr>
                          <tr>
                            <td>Mark</td>
                            <td>Volkswagen</td>
                          </tr>
                          <tr>
                            <td>Year</td>
                            <td>2008</td>
                          </tr>
                          <tr>
                            <td>Doors</td>
                            <td>4/5</td>
                          </tr>
                          <tr>
                            <td>AC</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Transmission</td>
                            <td>Automatic</td>
                          </tr>
                          <tr>
                            <td>Fuel</td>
                            <td>Gasoline</td>
                          </tr>
                        </tbody>
                      </Table>
                      <button className="reserve-btn">RESERVE NOW</button>
                    </div>
                  </Col>
                  </div>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default CarReservation;
