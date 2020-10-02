import React from 'react';
// import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className='pt-2'>
        <div className='contact-us container-fluid contact-form border border-danger rounded-lg'>
          <div className='w-75 mx-auto'>
            <form method='post'>
              <h1 className='text-center text-warning p-5'>
                We'd love to hear from you
              </h1>
              {/* <h5 className='text-center p-5 mx-auto w-50'>
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </h5> */}

              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='txtName'
                      className='form-control'
                      placeholder='Your Name *'
                      value=''
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='txtEmail'
                      className='form-control'
                      placeholder='Your Email *'
                      value=''
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='txtPhone'
                      className='form-control'
                      placeholder='Your Phone Number *'
                      value=''
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <textarea
                      name='txtMsg'
                      className='form-control w-100'
                      placeholder='Your Message *'
                      style={{ height: 150 }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className='form-group text-right p-5'>
                <input
                  type='submit'
                  name='btnSubmit'
                  className='btnContact'
                  value='Send Message'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;