import React, { useState } from 'react';
import Modal from './modal';

const Card = ({ img, title }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Modal
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
        img={img}
        title={title}
      />
      <div
        className='my-2 xl:my-4 px-2 xl:px-3 w-1/2 xl:w-1/4'
        onClick={openModal}
      >
        {/* card */}
        <div className='  flex items-center justify-center '>
          <div className='max-w-md w-full bg-white xl:rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:scale-105 transform transition-all duration-500'>
            <div className='img-scroll xl:p-3 h-72 overflow-auto flex flex-wrap  '>
              <img
                className='xl:rounded-xl  object-contain mx-auto'
                src={img}
                alt='Dog'
              />
            </div>
            <div className='flex justify-between px-3 pb-3'>
              <div className='flex items-center space-x-4'>
                {/* <h1 className='text-xs pt-2 xl:text-lg text-gray-900 font-bold'>
                  {title}
                </h1> */}
              </div>
            </div>
          </div>
        </div>

        {/* end card  */}
      </div>
    </>
  );
};

export default Card;
