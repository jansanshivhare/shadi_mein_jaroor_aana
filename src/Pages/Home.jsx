import React from 'react';
import HomeService from '../Components/Home_service';
import HomeImageSlider from '../Components/Home_Image_slider';

const Home = () => {
  return (
    <>
      <div className='my-0 pt-4'>
        <div className='home_slider'>
          <HomeImageSlider />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto '>
              <HomeService />
            </div>
          </div>
        </div>
      </div>
      <div className='my-5 text-center'>
        <iframe
          className='p-2 text-center'
          title='maroon_sugar'
          width='480'
          height='300'
          src='https://www.youtube.com/embed/09R8_2nJtjg?start=80'
          frameborder='0'
          allow='accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
        <iframe
          className='p-2 text-center'
          title='cool_meditation_music'
          width='480'
          height='300'
          src='https://www.youtube.com/embed/lCOF9LN_Zxs'
          frameborder='0'
          allow='accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Home;
