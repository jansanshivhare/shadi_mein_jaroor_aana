import React from 'react';
// import { NavLink } from 'react-router-dom';

const HomeImageSlider = () => {
  return (
    <>
      <div
        id='carouselExampleIndicators'
        className='HomeImageSlider border border-danger carousel slide w-100 mx-auto'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              className='d-block w-100'
              src={require('../img/wedd_1.jpg')}
              alt='First slide'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h2>XYZ Weds ABC</h2>
              <p>..........</p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src={require('../img/wedd_2.jpg')}
              alt='Second slide'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h2>Alakh Weds Pooja</h2>
              <p>...........</p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src={require('../img/wedd_3.jpg')}
              alt='Third slide'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h2>Jansan Ye Single hi marega</h2>
              <p>.........</p>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </>
  );
};

export default HomeImageSlider;
