import React from 'react';

const Index = () => {
    return (
        <div>
            <header id='header' className='header-area'>
                <div className='container custom-container'>
                    <nav className='menu-area d-flex align-items-center'>
                        <div className='logo'>
                            <a href='index.html'>
                                <img src='assets/img/logo/logo.png' alt='logo' />
                            </a>
                        </div>
                        <ul className='main-menu d-flex align-items-center'>
                            <li>
                                <a className='active' href='#soon'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='#soon'>Services</a>
                                <ul className='sub-menu'>
                                    <li>
                                        <a href='services.html'>Services</a>
                                    </li>
                                    <li>
                                        <a href='service-details.html'>Services Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href='#soon'>About Us</a>
                            </li>
                            <li>
                                <a href='#soon'>Portfolio</a>
                                <ul className='sub-menu'>
                                    <li>
                                        <a href='project.html'>Project</a>
                                    </li>
                                    <li>
                                        <a href='project-details.html'>Project Detail</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href='contact.html'>Contact Us</a>
                            </li>
                        </ul>
                        <div className='ml-auto right-content'>
                            <div className='search-bar'>
                                <img src='assets/img/logo/search.svg' alt='search logo' />
                            </div>
                            <div className='contact-number'>
                                <a
                                    className='primary__button primary__button-bgBlack'
                                    href='tel:+987 45478 547'
                                >
                                    <img src='assets/img/logo/phone-alt.svg' alt='phone alt' />
                                    +987 45478 547
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
                                <a href='index.html'>
                                    <img src='assets/img/logo/logo.png' alt='logo' />
                                </a>
                            </div>
                            <form className='asidesearch-bar'>
                                <input type='text' name='search' />
                                <img src='assets/img/logo/search.svg' alt='search logo' />
                            </form>
                            <ul className='main-menu'>
                                <li>
                                    <a className='active' href='index.html'>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href='services.html'>Services</a>
                                </li>
                                <li>
                                    <a href='about-us.html'>About Us</a>
                                </li>
                                <li>
                                    <a href='project.html'>Portfolio</a>
                                </li>
                                <li>
                                    <a href='blog.html'>Blog</a>
                                </li>
                                <li>
                                    <a href='contact.html'>Contact Us</a>
                                </li>
                            </ul>
                            <a
                                className='primary__button primary__button-bgBlack contacprimary__button'
                                href='tel:+987 45478 547'
                            >
                                <img src='assets/img/logo/phone-alt.svg' alt='phone alt' />
                                +987 45478 547
                            </a>
                        </div>
                        <div className='overlay' />
                    </aside>
                </div>
                <div className='search-box'>
                    <div className='search-form'>
                        <form action='#'>
                            <input type='text' placeholder='Enter Your Kayword' />
                            <button type='submit'>
                                <img src='assets/img/logo/search.svg' alt='search logo' />
                            </button>
                        </form>
                    </div>
                    <a className='search-close' href='#soon'>
                        <i className='fas fa-times' />
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Index;
