import React, { useState } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { faCalendarDays, faCar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
  const [pickupDate, setPickupDate] = useState(null);

  return (
    <Container fluid className="search-container">
      <Row>
        <h5 className='search-title'>Book a car</h5>
        <Col className='search-col'sm={12} md={4} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label className="form-label" htmlFor="carTypeSelect"><FontAwesomeIcon className="search-icon" icon={faCar} size="xs" /> Select Your Car Type</Form.Label>
            <Form.Select id="carTypeSelect">
              <option className='form-select'>Select your car type</option>
            </Form.Select>
          </Form.Group>
        
          <Form.Group className="mb-3 datepicker-group">
            <Form.Label><FontAwesomeIcon className="search-icon" icon={faCalendarDays} size="xs" /> Pick-up</Form.Label>
              <DatePicker
                selected={pickupDate}
                onChange={(date) => setPickupDate(date)}
                dateFormat="MM/dd/yyyy"
                className="date-selection"
                placeholderText='MM/dd/yyyy'
            />
          </Form.Group>
        </Col>
        <Col className='search-col' sm={12} md={4} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="dropoffLocation"><FontAwesomeIcon className="search-icon" icon={faLocationDot} size="xs" /> Pick-Up</Form.Label>
            <Form.Select id="dropoffLocation">
              <option>Select pick up location</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 datepicker-group">
            <Form.Label><FontAwesomeIcon className="search-icon" icon={faCalendarDays} size="xs" /> Pick-up</Form.Label>
              <DatePicker
                selected={pickupDate}
                onChange={(date) => setPickupDate(date)}
                dateFormat="MM/dd/yyyy"
                className="date-selection"
                placeholderText="MM/dd/yyyy" 
            />
          </Form.Group>
        </Col>
        <Col className='search-col' sm={12} md={4} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="dropoffDate"><FontAwesomeIcon className="search-icon" icon={faLocationDot} size="xs" /> Drop-Off</Form.Label>
            <Form.Select id="dropoffDate">
              <option>Select drop off location</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button type="submit" className="search-btn">Search</Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
