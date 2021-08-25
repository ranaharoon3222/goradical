import React from 'react'

const Index = () => {
    return (
        <section className="callto-action">
            <div className="container">
                <div className="row align-items-center">
                    <div className="order-2 col-lg-7 col-md-12 order-lg-1">
                        <div className="callto-action-text">
                            <h2>Have Any Project On Mind? Contact Us!</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                congue ipsum id neque placerat, et tempus nibh accumsan.
                                Maecenas hendrerit faucibus ante. Fusce placerat laoreet ligula,
                                non porttito.
                            </p>
                            <a
                                href="contact.html"
                                className="primary__button primary__button-bgPrimary"
                            >
                                Send Message
                            </a>
                        </div>
                    </div>
                    <div className="order-1 col-lg-5 col-md-12 order-lg-2">
                        <div className="callto-action-image">
                            <img src="assets/img/action/image.svg" alt="Call To Action" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="callto-action-mask">
                <img
                    src="assets/img/mask/leftMask.svg"
                    alt="Icon"
                    className="img-fluid first-mask"
                />
            </div>
        </section>

    )
}

export default Index
