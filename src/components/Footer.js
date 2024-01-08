import React from 'react';

function Footer() {
  return (
    <section>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='row'>
            <div className='col-xs-12 col-sm-6 col-md-6 col-lg-3'>
              <ul className='list-attributes'>
                <li>
                  <h4>Car Rental</h4>
                </li>
                <li>
                  <p>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                </li>
                <li>
                  <a className='footer-link' href="tel:123456789">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                    &nbsp;(123)-456-789
                  </a>
                </li>
                <li>
                  <a className='footer-link' href="mailto: carrental@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                    &nbsp;(123)-456-789
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-xs-12 col-sm-6 col-md-6 col-lg-3'>
              <ul className='list-attributes'>
                <li>
                  <h4>Company</h4>
                </li>
                <li>
                  <a className='footer-link' href='#home'>New York</a>
                </li>
                <li>
                  <a className= 'footer-link' href='#home'>Careers</a>
                </li>
                <li>
                  <a className='footer-link' href='#home'>Mobile</a>
                </li>
                <li>
                  <a className='footer-link' href='#home'>Blog</a>
                </li>
                <li>
                  <a className='footer-link' href='#home'>How we work</a>
                </li>
              </ul>
            </div>

            <div className='col-xs-12 col-sm-6 col-md-6 col-lg-3'>
              <ul className='list-attributes'>
                <li>
                  <h4>Working Hours</h4>
                </li>
                <li>
                  <p>Mon - Fri: 9:00AM - 9:00PM</p>
                </li>
                <li>
                  <p>Sat: 9:00AM - 9:00PM</p>
                </li>
                <li>
                  <p>Sun: Closed</p>
                </li>
              </ul>
            </div>

            <div className='col-xs-12 col-sm-6 col-md-6 col-lg-3'>
              <ul className='list-attributes'>
                <li>
                  <h4>Subscription</h4>
                </li>
                <li>
                  <p>Enter your email for the latest news and updates.</p>
                </li>
                <div className='subscription-container'>
                  <li>
                    <input className='footer-form' type='email' placeholder='Enter Email Address' />
                  </li>
                  <li>
                    <button className='footer-btn'>Submit</button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
