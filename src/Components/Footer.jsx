import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container w-75'>
          <div className='footer__option '>
            <div className='row mt-5 mx-auto text-center'>
              <div className='col-lg-6 col-md-12 footer__option__item'>
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
              <div className='col-lg-3 col-md-6 col-6 footer__option__item'>
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
              <div className='col-lg-3 col-md-6 col-6 footer__option__item'>
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
          <div>
            <h4 className='text-center mt-3'>Follow us on Social Media</h4>
            <hr />
            <div className='row text-center'>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-facebook text-white'
              ></NavLink>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-twitter text-white'
              ></NavLink>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-google text-white'
              ></NavLink>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-linkedin text-white'
              ></NavLink>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-youtube text-white'
              ></NavLink>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-instagram text-white'
              ></NavLink>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-pinterest text-white'
              ></NavLink>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-snapchat-ghost text-white'
              ></NavLink>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-skype text-white'
              ></NavLink>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-android text-white'
              ></NavLink>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-yahoo text-white'
              ></NavLink>
              <NavLink
                to='#'
                class=' m-auto w-100 h-100 col-lg-1 col-md-2 col-sm-2 col-3 fa fa-reddit text-white'
              ></NavLink>
              {/* <NavLink to='#' class='fa fa-dribbble text-white'></NavLink> */}
              {/* <NavLink to='#' class='fa fa-vimeo text-white'></NavLink> */}
              {/* <NavLink to='#' class='fa fa-tumblr text-white'></NavLink> */}
              {/* <NavLink to='#' class='fa fa-vine text-white'></NavLink> */}
              {/* <NavLink to='#' class='fa fa-foursquare text-white'></NavLink> */}
              {/* <NavLink to='#' class='fa fa-stumbleupon text-white'></NavLink> */}
              {/* <NavLink to='#' class='fa fa-flickr text-white'></NavLink> */}
              {/* <NavLink to='#' class='fa fa-rss text-white'></NavLink> */}
            </div>
          </div>
          <div className='footer__copyright'>
            <div className='text-center mt-4'>
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
