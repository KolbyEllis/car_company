import React from 'react';
import { Accordion } from 'react-bootstrap';

function Faq() {
    
  return (
    <section className='faq-section'>
      <div className='content-container'>
        <div className='content-text-box'>
          <div className='centered-text'>
            <h5>FAQ</h5>
            <h2>Frequently Asked Questions</h2>
            <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
          </div>
        </div>
        <div className='accordion-container'>
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="accordion-item" eventKey="0">
              <Accordion.Header className='accordion-header'>1. What is special about comparing rental car deals?</Accordion.Header>
              <Accordion.Body>
              Comparing rental car deals is important as it helps find the best deal 
              that fits your budget and requirements, ensuring you get the most value 
              for your money. By comparing various options, you can find deals that offer
               lower prices, additional services, or better car models. You can find car 
               rental deals by researching online and comparing prices from different rental 
               companies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2. How do I find the car rental deals?
                </Accordion.Header>
              <Accordion.Body>
              You can find car rental deals by researching online 
                and comparing prices from different rental companies. Websites such 
                as Expedia, Kayak, and Travelocity allow you to compare prices and 
                view available rental options. It is also recommended to sign up for 
                email newsletters and follow rental car companies on social media to be 
                informed of any special deals or promotions.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>3. How do I find such low rental car prices?</Accordion.Header>
              <Accordion.Body>
              Book in advance: Booking your rental car ahead of time can 
              often result in lower prices. Compare prices from multiple 
              companies: Use websites like Kayak, Expedia, or Travelocity to 
              compare prices from multiple rental car companies. Look for discount 
              codes and coupons: Search for discount codes and coupons that you can 
              use to lower the rental price. Renting from an off-airport location can 
              sometimes result in lower prices.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
