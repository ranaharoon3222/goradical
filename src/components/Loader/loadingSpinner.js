import React from 'react';
import './spinner.css';

const loadingSpinner = () => {
  return (
    <section className='spinnerWrapper'>
      <div className='spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
        <div className='bounce3'></div>
      </div>
    </section>
  );
};

export default loadingSpinner;
