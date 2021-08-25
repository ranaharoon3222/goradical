import Slider from './slider'
const Index = () => {




    return (
        <section className="testimonial-area">
            <div className="container">
                <div className="text-center section-title mb-50">
                    <h2 className="mb-20">Thousands of Clients Trust Us</h2>
                    <p className="w-65">
                        Sed sit amet suscipit diam, vel iaculis nunc. Mauris interdum
                        sollicitudin ex. Sed sit amet felis id dolor blandit pellentesque.
                        Praesent varius euismod velit, non tincidunt lacu.
                    </p>
                </div>

                <Slider />

                <div className="mask-group2">
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
                    <img className="mask5" src="assets/img/mask/dotblue.svg" alt="mask" />
                    <img
                        className="mask6"
                        src="assets/img/mask/circle-01.svg"
                        alt="mask"
                    />
                    <img
                        className="mask7"
                        src="assets/img/mask/penta-02.svg"
                        alt="mask"
                    />
                </div>
            </div>
        </section>

    )
}

export default Index
