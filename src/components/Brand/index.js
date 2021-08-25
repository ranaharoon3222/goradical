import React from 'react'
import useEmbla from '../../hooks/embla'

const Index = () => {
    const { slides, viewportRef, Arows } = useEmbla({
        options: {
            slidesToScroll: 1,
            skipSnaps: false,
            loop: true,
        },
        autoplay: true
    })

    return (
        <section className="brand-area ">
            <div className="container">
                <div className="text-center small-section">
                    <h3>As Seen On</h3>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="brand-slider-active">
                            <div class="embla">
                                <div className="embla__viewport" ref={viewportRef}>
                                    <div class="embla__container">
                                        {slides.map(index => {
                                            return (
                                                <div className="embla__slide" key={index} style={{ minWidth: "25%" }}>
                                                    <div className="single-brand">
                                                        <img
                                                            src="assets/img/brand/acer.gif"
                                                            alt="brand logo"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>

                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Arows />
                </div>
            </div>
        </section>

    )
}

export default Index
