import React from 'react'

const Index = () => {
    return (
        <section className="newsletter-area pt-180">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="newsletter-area-text">
                            <h2>Subscribe Now for Get Special Features!</h2>
                            <p>Let's subscribe with us and find the fun.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="newsletter-area-form">
                            <form action="#">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="mail"
                                        placeholder="Enter your E-mail"
                                        required
                                        className="form-control"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="primary__button primary__button-bgPrimary"
                                >
                                    Subscribe Now
                                    <i className="fas fa-arrow-right" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Index
