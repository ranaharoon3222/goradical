import React, { useState } from 'react';
import Card from './card';

const Index = ({ portfolio }) => {
  const [activeItem, setActiveItem] = useState('logo');
  const logo = 'logo';
  const web_design = 'web design';
  const wordpress = 'wordpress';
  const shopify = 'shopify';

  const handleActiveItem = (name) => {
    setActiveItem(name);
  };

  const btns = [
    {
      name: logo,
      active: activeItem === logo,
    },
    {
      name: web_design,
      active: activeItem === web_design,
    },
    {
      name: wordpress,
      active: activeItem === wordpress,
    },
    {
      name: shopify,
      active: activeItem === shopify,
    },
  ];

  const allItems = btns.map((btn) => {
    return (
      activeItem === btn.name &&
      portfolio.items
        .filter((item) => item.type === activeItem)
        .map((filterItem, i) => {
          console.log(filterItem);
          return (
            <Card
              key={i}
              title={filterItem.title1}
              img={filterItem.image.url}
            />
          );
        })
    );
  });

  return (
    <>
      <div className='text-center mt-5'>
        {btns.map((btn, i) => {
          return (
            <button
              key={btn.name}
              className={`primary__button ${
                btn.active && 'primary__button-bgPrimary'
              } `}
              onClick={() => handleActiveItem(btn.name)}
            >
              {btn.name.toUpperCase()}
            </button>
          );
        })}
      </div>

      <div className='flex flex-wrap  py-16 bg-[#ff465e0d]  xl:mx-[45px] px-3 rounded-3xl my-12'>
        {allItems}
      </div>
    </>
  );
};

export default Index;
