import React from 'react';
import { Card } from 'react-bootstrap';

function Info() {
  const cardImageStyle = {
    display: 'block',
    margin: '0 auto', // Center the image horizontally
  };

  const cardTextStyle = {
    textAlign: 'center', // Center the text horizontally
  };

  const glowingImageStyle = {
    filter: 'drop-shadow(0 0 10px #EF6A31)',
  };

  return (
    <div className='info-container'>
      <h5>Plan your trip now</h5>
      <h1>Quick & easy car rental</h1>
      <div className='col-sm-4 col-md-4 col-lg-12 info-card'>
        <Card className="col-sm-4 col-md-4 col-lg-4 info-body" style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="/images/operator.png"
            style={{ ...cardImageStyle, width: '150px', height: '150px', ...glowingImageStyle }}
          />
          <Card.Body>
            <Card.Title className="info-card-title" style={cardTextStyle}>Select Car</Card.Title>
            <Card.Text className="info-text" style={cardTextStyle}>
              We offer a long range of vehicles for all your driving needs. We have the perfect car to meet your needs.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-sm-4 col-md-4 col-lg-4 info-body" style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="/images/car-icon.png"
            style={{ ...cardImageStyle, width: '150px', height: '150px', ...glowingImageStyle }}
          />
          <Card.Body>
            <Card.Title className="info-card-title" style={cardTextStyle}>Contact Operator</Card.Title>
            <Card.Text className="info-text" style={cardTextStyle}>
              Our knowledgeable and friendly operators are always ready to help with any questions or concerns.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-sm-3 col-md-4 col-lg-4 info-body" style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="/images/van-icon.png"
            style={{ ...cardImageStyle, width: '150px', height: '150px', ...glowingImageStyle }}
          />
          <Card.Body>
            <Card.Title className="info-card-title" style={cardTextStyle}>Let's Drive</Card.Title>
            <Card.Text className="info-text" style={cardTextStyle}>
              Whether you're hitting the open road, we've got you covered with our wide range of cars.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Info;
