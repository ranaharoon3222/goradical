import React from 'react'

const Index = () => {
    return (
        <section className="about-info">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-info-image">
                            <img
                                src="assets/img/about/about_info.svg"
                                alt="Presenting A Project"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-info-text">
                            <h2>We Are Supporting All Kind Of Online Services Since 2020</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptatem.
                            </p>
                            <div className="flex-wrap about-info-project d-flex justify-content-between">
                                <div className="mb-20 project-rating">
                                    <h3>4.8</h3>
                                    <ul className="project-rating-star d-flex">
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star" />
                                        </li>
                                    </ul>
                                    <p>8,784 Ratings</p>
                                </div>
                                <div className="mb-20 project-information">
                                    <h3>7K+</h3>
                                    <p>Successfully</p>
                                    <p>Completed Projects</p>
                                </div>
                                <div className="mb-20 project-information">
                                    <h3>17+</h3>
                                    <p>Expert</p>
                                    <p>Team Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mask-group">
                    <img className="mask1" src="assets/img/mask/mask06.png" alt="mask" />
                </div>
            </div>
        </section>

    )
}

export default Index
