import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container-fluid'>
          <div className='footer__option '>
            <div className='row mt-5 mx-auto text-center'>
              <div className='col-lg-4 col-md-6 col-12 footer__option__item'>
                <h5>ABOUT US</h5>
                <hr />
                <p className='text-left'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus consequatur rem illo quis numquam, minima eos quam
                  eum expedita? Reprehenderit quibusdam perferendis repudiandae
                  rem corrupti.....
                  <NavLink to='/about' className='read__more'>
                    Read more <span className='arrow_right'></span>
                  </NavLink>
                </p>
              </div>
              <div className='col-lg-4 col-md-3 col-6 footer__option__item'>
                <h5>WHO WE ARE</h5>
                <hr />
                <ul>
                  <li>
                    <NavLink to='#'>
                      <span> Team </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>
                      <span> Carrers </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>
                      <span> Contact us </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>
                      <span> Locations </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className='col-lg-4 col-md-3 col-6 footer__option__item'>
                <h5>OUR WORK</h5>
                <hr />
                <ul>
                  <li>
                    <NavLink to='#'>
                      <span> Service </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>
                      <span> Latest </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>
                      <span> Browse Archive </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>
                      <span> Video for web </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='footer__copyright'>
            <div className='text-center mt-4'>
              <hr />
              <p className='footer__copyright__text mb-0 pb-3'>
                Copyright &copy; All rights reserved | This template is made
                with <i aria-hidden='true'>passion</i> by{' '}
                <NavLink to='' target='_blank'>
                  shadi mein jaroor aana
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
