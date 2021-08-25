import React from 'react'

const Index = () => {
    return (
        <section className="bannerArea">
            <div className="container custom-container">
                <div className="row d-flex align-items-center">
                    <div className="order-2 col-xl-6 order-xl-0">
                        <div className="bannerArea__wrapper">
                            <h1 className="bannerArea__title">
                                Digital Marketing Agency And Design
                            </h1>
                            <p className="bannerArea__brief">
                                Praesent non pharetra lorem. Quisque vitae eros ut dui egestas
                                ultrices et quis odio. Praesent vitae tincidunt lacus, sed
                                pulvinar velit.
                            </p>
                            <div className="bannerArea__buttons">
                                <a
                                    className="primary__button primary__button-bgPrimary"
                                    href="services.html"
                                >
                                    Our Services
                                </a>
                                <div className="overlay-playbutton">
                                    <a
                                        className="popup-video video-border"
                                        href="https://www.youtube.com/watch?v=hlWiI4xVXKY"
                                    >
                                        <i className="fas fa-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 col-xl-6 order-xl-0">
                        <div className="bannerArea__image">
                            <img src="assets/img/banner/banner.png" alt="banner" />
                        </div>
                    </div>
                </div>
                <div className="mask-group">
                    <img
                        className="mask1"
                        src="assets/img/mask/layerShape-01.png"
                        alt="mask"
                    />
                    <img
                        className="mask2"
                        src="assets/img/mask/layerShape-02.png"
                        alt="mask"
                    />
                    <img
                        className="mask3"
                        src="assets/img/mask/downShape.png"
                        alt="mask"
                    />
                    <img
                        className="mask4"
                        src="assets/img/mask/layers-dot.png"
                        alt="mask"
                    />
                </div>
            </div>
        </section>

    )
}

export default Index
