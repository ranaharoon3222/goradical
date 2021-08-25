import React from 'react'

const Index = () => {
    return (
        <footer>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="order-4 col-lg-4 col-md-6 order-lg-0">
                            <div className="footer-area-about mb-50">
                                <h4>About Us</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                    ut scelerisque arcu, at porttitor lacus. Integer.
                                </p>
                                <div className="footer-area-links">
                                    <a href="#soon">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#soon">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#soon">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 mr-lg-65 col-md-4 col-6 order-lg-0 order-md-1">
                            <div className="footer-area-lists mb-30">
                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <a href="about-us.html">About us</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="#soon">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#soon">Press</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="order-2 col-lg-2 mr-lg-65 col-md-4 col-6 order-lg-0">
                            <div className="footer-area-lists mb-30">
                                <h4>Products</h4>
                                <ul>
                                    <li>
                                        <a href="#soon">Features</a>
                                    </li>
                                    <li>
                                        <a href="#soon">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#soon">News</a>
                                    </li>
                                    <li>
                                        <a href="#soon">Help desk</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Support</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 order-lg-0 order-md-3">
                            <div className="footer-area-lists">
                                <h4>Legal</h4>
                                <ul>
                                    <li>
                                        <a href="#soon">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#soon">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#soon">Return Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-area-shape">
                    <img
                        src="assets/img/mask/penta-02.svg"
                        alt="shape"
                        className="img-fluid ft-shape-01"
                    />
                    <img
                        src="assets/img/mask/downShape.svg"
                        alt="shape"
                        className="img-fluid ft-shape-02"
                    />
                    <img
                        src="assets/img/mask/circle-01.svg"
                        alt="shape"
                        className="img-fluid ft-shape-03"
                    />
                </div>
            </div>
            {/* copyright area */}
            <div className="copyright">
                <div className="container">
                    <div className="row align-items-center copyright-area">
                        <div className="col-lg-5 col-md-4 col-sm-12">
                            <div className="copyright-area-text">
                                <p>Copyright 2020. All Rights Reserved by us!</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <div className="copyright-area-logo">
                                <a href="index.html">
                                    <img
                                        src="assets/img/logo/logo.png"
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-12">
                            <div className="copyright-area-top text-lg-right">
                                <a href="#header" id="to-top">
                                    Back to Top <i className="fas fa-angle-up" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Index
