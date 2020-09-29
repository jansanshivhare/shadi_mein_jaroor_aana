import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeService = () => {
  return (
    <>
      <div className='container-fluid homeservice'>
        <div className='row '>
          <div className='col'>
            <h3 className='text-center my-5'>Our Services</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
            <div
              className='card center-block mx-auto'
              style={{ width: '18rem' }}
            >
              <img
                src={require('../img/back2.jpg')}
                className=' w-100 card-img-top'
                style={{ height: 200 }}
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>Birthday</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='text-center'>
                  <NavLink to='#' className='btn btn-primary'>
                    Go somewhere
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
            <div
              className='card center-block mx-auto'
              style={{ width: '18rem' }}
            >
              <img
                src={require('../img/back3.jpg')}
                className=' w-100 card-img-top'
                style={{ height: 200 }}
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>Marry</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='text-center'>
                  <NavLink to='#' className='btn btn-primary'>
                    Go somewhere
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
            <div
              className='card center-block mx-auto'
              style={{ width: '18rem' }}
            >
              <img
                src={require('../img/back4.jpg')}
                className=' w-100 card-img-top'
                style={{ height: 200 }}
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>Art</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='text-center'>
                  <NavLink to='#' className='btn btn-primary'>
                    Go somewhere
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
            <div
              className='card center-block mx-auto'
              style={{ width: '18rem' }}
            >
              <img
                src={require('../img/back5.jpg')}
                className=' w-100 card-img-top'
                style={{ height: 200 }}
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>Pappu</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='text-center'>
                  <NavLink to='#' className='btn btn-primary'>
                    Go somewhere
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
            <div
              className='card center-block mx-auto'
              style={{ width: '18rem' }}
            >
              <img
                src={require('../img/back6.jpg')}
                className=' w-100 card-img-top'
                style={{ height: 200 }}
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>Jansan</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='text-center'>
                  <NavLink to='#' className='btn btn-primary'>
                    Go somewhere
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
            <div
              className='card center-block mx-auto'
              style={{ width: '18rem' }}
            >
              <img
                src={require('../img/back.jpg')}
                className=' w-100 card-img-top'
                style={{ height: 200 }}
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>Mera Naam</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='text-center'>
                  <NavLink to='#' className='btn btn-primary'>
                    Go somewhere
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <NavLink to='/service' className='btn btn-primary '>
          View More
        </NavLink>
      </div>
    </>
  );
};

export default HomeService;
