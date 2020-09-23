import React from 'react';
import HomeService from '../Components/Home_service';
import HomeImageSlider from '../Components/Home_Image_slider';

const Home = () => {
  return (
    <>
      <div className='home_slider my-4'>
        <HomeImageSlider />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <HomeService />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
