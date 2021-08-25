import useEmbla from '../../hooks/embla'


const Slider = () => {
    const { slides, viewportRef, Arows } = useEmbla({
        options: {
            slidesToScroll: 1,
            skipSnaps: false,
            loop: true
        }
    })

    return (
        <div className="testimonial-wrapper">
            <div className="testimonial-slider">
                <div className="embla">
                    <div className="embla__viewport" ref={viewportRef}>
                        <div className="embla__container">
                            {slides.map((index) => (
                                <div className="embla__slide" key={index}>
                                    <div className="testimonial-item">
                                        <div className="client-profile d-flex align-items-center justify-content-between">
                                            <div className="mb-20 d-flex align-items-center">
                                                <img
                                                    src="assets/img/testimonial/ellipse1.png"
                                                    alt="client"
                                                />
                                                <div className="ml-2 client-name">
                                                    <h6>Mark Parker</h6>
                                                    <span>Envato Customer</span>
                                                </div>
                                            </div>
                                            <ul className="rating">
                                                <li>
                                                    <i className="fas fa-star" />
                                                    <span>(4.8)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                            ut scelerisque arcu, at porttitor lacus. Integer iaculis quis
                                            magna a aliquam. Vestibulum iaculis.
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <Arows />
        </div>


    )
}

export default Slider
