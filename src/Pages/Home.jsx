import React from 'react';
// import HomeService from '../Components/Home_service';
import HomeImageSlider from '../Components/Home_Image_slider';
import HomeService from '../Components/Service';

const Home = () => {
  return (
    <>
      <div className='my-0 '>
        <div className='home_slider'>
          <HomeImageSlider />
        </div>
        <div className='container'>
          <HomeService />
        </div>
      </div>
      {/* <div className=' container-fluid h-full my-5 mx-auto text-center'> */}
      <div className='w-100 my-5 iframe-container'>
        <iframe
          title='maroon_sugar'
          src='https://www.youtube.com/embed/09R8_2nJtjg?start=80'
          frameborder='0'
          allow='accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;
