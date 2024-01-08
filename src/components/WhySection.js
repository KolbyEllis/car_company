import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';


function WhySection() {
  return (
    <section>
      <div className='why-pic-container'>
        <img className='why-pic' src='/images/cars3.png' alt="3 cars" />
      </div>
      <div className='why-text-container'>
        <div className='why-text-container-left'>
          <h5>Why Choose Us</h5>
          <h1 className='why-text-title'>Best valued deals you will ever find</h1>
          <p className='why-text-sub-title'>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
          <button className="why-btn">Find Details <FontAwesomeIcon className="arrow-icon" icon={faGreaterThan} size="xs" /></button>
        </div>
        <div className='why-text-container-right'>
          <div className='why-text-container-box'>
          <div className="why-icons-container">
            <img className='why-icons' src='/images/cross-country.png' alt='icon1' />
            </div>
            <div className='why-text-container-text'>
              <h5>Cross Country Drive</h5>
              <p className='why-text-paragraph'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
            </div>
          </div>     
          <div className='why-text-container-box'>
          <div className="why-icons-container">
            <img className='why-icons' src='/images/pricing-icon.png' alt='icon1' />
            </div>
            <div className='why-text-container-text'>
              <h5>All Inclusive Pricing</h5>
              <p className='why-text-paragraph'>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
            </div>
          </div>  
          <div className='why-text-container-box'>
          <div className="why-icons-container">
            <img className='why-icons' src='/images/charges-icon.png' alt='icon1' />
            </div>
            <div className='why-text-container-text'>
              <h5>No Hidden Charges</h5>
              <p className='why-text-paragraph'>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
}

export default WhySection;
