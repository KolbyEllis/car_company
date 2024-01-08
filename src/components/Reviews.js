import React from 'react';


function Reviews() {
  return (
    <section>
      <div className='test-container'>
        <div className='test-title'>
          <h5>Reviewed by People</h5>
          <h1>Client's Testimonials</h1>
          <p>Discover the positive impact we've made on our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        </div>
        <div className='test-box-container'>
          <div className='test-box-left'>
            <p className='test-text'>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
            <div className='author-container'>
            <img className='test-profile-pic' src='/images/test-person1.png' alt='testimonial profile pic 1' />
            <div className='author-text'>
            <h5>Parry Hotter</h5>
            <p>Joplin, Missouri</p>
            </div>
            </div>
          </div>
          <div className='test-box-right'>
          <p className='test-text'>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
            <div className='author-container'>
            <img className='test-profile-pic' src='images/test-person2.png' alt='testimonial profile pic 2' />
            <div className='author-text'>
            <h5>Ron Rizzly</h5>
            <p>Spokane, Washington</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
