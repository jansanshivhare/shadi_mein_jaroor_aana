import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeService = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h3 className='text-center'>Our Services</h3>
          </div>
        </div>
        <div className='row py-3'>
          <div className='col-4 py-3'>
            <div className='card' style={{ width: '18rem' }}>
              <img src='...' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Birthday</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <NavLink to='#' className='btn btn-primary'>
                  Go somewhere
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-4 py-3'>
            <div className='card' style={{ width: '18rem' }}>
              <img src='...' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Marry</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <NavLink to='#' className='btn btn-primary'>
                  Go somewhere
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-4 py-3'>
            <div className='card' style={{ width: '18rem' }}>
              <img src='...' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Art</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <NavLink to='#' className='btn btn-primary'>
                  Go somewhere
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-4 py-3'>
            <div className='card' style={{ width: '18rem' }}>
              <img src='...' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Pappu</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <NavLink to='#' className='btn btn-primary'>
                  Go somewhere
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-4 py-3'>
            <div className='card' style={{ width: '18rem' }}>
              <img src='...' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Jansan</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <NavLink to='#' className='btn btn-primary'>
                  Go somewhere
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-4 py-3'>
            <div className='card' style={{ width: '18rem' }}>
              <img src='...' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Mera Naam</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <NavLink to='#' className='btn btn-primary'>
                  Go somewhere
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col '>
            <NavLink to='/service' className='btn btn-primary '>
              View More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeService;
