import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeImageSlider = () => {
  return (
    <>
      <div id='demo' className='carousel slide' data-ride='carousel'>
        <ul className='carousel-indicators'>
          <li data-target='#demo' data-slide-to='0' className='active'></li>
          <li data-target='#demo' data-slide-to='1'></li>
          <li data-target='#demo' data-slide-to='2'></li>
        </ul>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src={require('../img/wedd_1.jpg')}
              alt='Indian Wedding pics'
              width='1100'
              height='500'
            />
            <div className='carousel-caption'>
              <NavLink to='#'>
                <h1>Los Angeles</h1>
                <p>We had such a great time in LA!</p>
              </NavLink>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src={require('../img/wedd_3.jpg')}
              alt='Indian Wedding pics'
              width='1100'
              height='500'
            />
            <div className='carousel-caption'>
              <NavLink to='#'>
                <h3>Chicago</h3>
                <p>Thank you, Chicago!</p>
              </NavLink>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src={require('../img/wedd_2.jpg')}
              alt='Indian Wedding pics'
              width='1100'
              height='500'
            />
            <div className='carousel-caption'>
              <NavLink to='#'>
                <h3>New York</h3>
                <p>We love the Big Apple!</p>
              </NavLink>
            </div>
          </div>
        </div>
        <a className='carousel-control-prev' href='#demo' data-slide='prev'>
          <span className='carousel-control-prev-icon'></span>
        </a>
        <a className='carousel-control-next' href='#demo' data-slide='next'>
          <span className='carousel-control-next-icon'></span>
        </a>
      </div>
    </>
  );
};

export default HomeImageSlider;
