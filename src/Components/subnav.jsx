import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNav = () => {
  return (
    <>
      <div id='subNavHolder' className='color1'>
        <div>
          <ul className='row container-fluid my-0'>
            <li className='dropdown col-lg-1 col-md-1 col-sm-1 col-12 m-auto '>
              <NavLink to='#'>
                <span>
                  <img
                    src={require('../img/heart.png')}
                    alt='Experience Camlin'
                    align='absmiddle'
                    width='30rem'
                  />
                </span>
              </NavLink>
              {/* <ul className="dropdown-content">
        <li><NavLink to="#">Experience Camlin</NavLink></li>
        </ul> */}
            </li>

            <div className='col-lg-11 col-md-11 col-sm-11 col-12 row'>
              <li className='dropdown col-lg-2 col-md-4 col-sm-4 col-12'>
                {' '}
                <NavLink to='#'>
                  <span>ACTIVITIES</span>
                </NavLink>
                <ul className='dropdown-content'>
                  <li>
                    <NavLink to='#'>Camel Art Foundation</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>Camel Art Contest</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>Design My Notebook</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>World's Largest Rangoli</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>Mechanical Pen Pencil</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>Camlin KidZania</NavLink>
                  </li>
                </ul>
              </li>
              <li className='dropdown col-lg-2 col-md-4 col-sm-4 col-12'>
                <NavLink to='#'>
                  <span>STUDENTS</span>
                </NavLink>
                <ul className='dropdown-content'>
                  <li>
                    <NavLink to='#'>All India Camel Art Contest</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>Did You Know</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>Products</NavLink>
                  </li>
                </ul>
              </li>
              <li className='dropdown col-lg-2 col-md-4 col-sm-4 col-12'>
                <NavLink to='#'>
                  <span>ART &amp; Craft</span>
                </NavLink>
                <ul className='dropdown-content'>
                  <li>
                    <NavLink to='#'>Artist of the Month</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>Camel Art Foundation</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>Products</NavLink>
                  </li>
                  <li>
                    <NavLink to='-2.html'>FAQs</NavLink>
                  </li>
                </ul>
              </li>
              <li className='dropdown col-lg-2 col-md-4 col-sm-4 col-12'>
                <NavLink to='#'>
                  <span>PROFESSIONALS</span>
                </NavLink>
                <ul className='dropdown-content'>
                  <li>
                    <NavLink to='#'>Eco Friendly Office Tips</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>Products</NavLink>
                  </li>
                </ul>
              </li>
              <li className='dropdown col-lg-2 col-md-4 col-sm-4 col-12'>
                <NavLink to='#'>
                  <span>HOBBYISTS</span>
                </NavLink>
                <ul className='dropdown-content'>
                  <li>
                    <NavLink to='#'>Do it Yourself</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>Products</NavLink>
                  </li>
                </ul>
              </li>
              <li className='dropdown col-lg-2 col-md-4 col-sm-4 col-12'>
                {' '}
                <NavLink to='#'>
                  <span>Know more</span>
                </NavLink>
                <ul className='dropdown-content'>
                  <li>
                    <NavLink to='#'> Camel Art Contest</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>Did You Know</NavLink>
                  </li>
                  <li>
                    <NavLink to='#'>FAQs</NavLink>
                  </li>
                </ul>
              </li>
            </div>

            <div className='clear'></div>
          </ul>
          <div className='clear'></div>
        </div>
      </div>
    </>
  );
};
export default SubNav;
