import React from 'react';

function Download() {
  return (
    <section>
      <div className='download-container'>
        <div className='download-app'>
        <div className='download-text'>
          <h1>Download our app to get the most out of it</h1>
          <p>Explore the road with our app – Your key to car rental freedom. Discover the best deals, easy bookings, and a smooth journey ahead. Download now!</p>
          <div className='download-image-container'>
            <img className='download-image' src='/images/googleplay-download.png' alt='download on Google Play' />
            <img className='download-image' src='/images/appstore-download.png' alt='download on the App Store' />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Download;
