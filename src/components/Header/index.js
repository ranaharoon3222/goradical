import React, { useEffect, useState } from 'react';
import { Client } from '../../PrismicClient';
import Spinner from '../Loader/loadingSpinner';

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.getByUID('header', 'header');
      if (response) {
        setData(response.data);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  if (data.length === 0) {
    return <Spinner />;
  }

  const logo = data.logo.url;
  const phone = data.phone;
  const menus = data.body;

  return (
    <div>
      <header id='header' className='header-area'>
        <div className='container custom-container'>
          <nav className='menu-area d-flex align-items-center'>
            <div className='logo'>
              <a href='/'>
                <img src={logo} alt='logo' style={{ maxWidth: '200px' }} />
              </a>
            </div>

            <ul className='main-menu d-flex align-items-center'>
              {menus.map((menu, menuIndex) => {
                const primary = menu.primary;

                return (
                  <li key={menu + menuIndex}>
                    <a href={primary.link.url}> {primary.menu} </a>
                    {menu.items.length !== 0 && (
                      <ul className='sub-menu'>
                        {menu.items.map((item, index) => {
                          return (
                            <li key={index + item}>
                              <a href={item.link.url}> {item.sub_menu} </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className='ml-auto right-content'>
              <div className='contact-number'>
                <a
                  className='primary__button primary__button-bgBlack'
                  href={`tel:${phone}`}
                >
                  <img src='assets/img/logo/phone-alt.svg' alt='phone alt' />+
                  {phone}
                </a>
              </div>
            </div>
            <div className='hamburger-menu'>
              <span />
              <span />
              <span />
            </div>
          </nav>
          <aside>
            <div className='sidebar-menu'>
              <div className='close-sidebar'>
                <span />
                <span />
              </div>
              <div className='logo'>
                <a href='/'>
                  <img src={logo} width='150px' alt='logo' />
                </a>
              </div>
              <ul className='main-menu'>
                {menus.map((menu, menuIndex) => {
                  const primary = menu.primary;

                  return (
                    <li key={menu + menuIndex}>
                      <a href={primary.link.url}> {primary.menu} </a>
                      {menu.items.length !== 0 && (
                        <ul className='sub-menu'>
                          {menu.items.map((item, index) => {
                            return (
                              <li key={index + item}>
                                <a href={item.link.url}> {item.sub_menu} </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
              <a
                className='primary__button primary__button-bgBlack contacprimary__button'
                href='tel:+987 45478 547'
              >
                <img src='assets/img/logo/phone-alt.svg' alt='phone alt' />
                {phone}
              </a>
            </div>
            <div className='overlay' />
          </aside>
        </div>
      </header>
    </div>
  );
};

export default Index;
