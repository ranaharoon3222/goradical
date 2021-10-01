import useEmbla from '../../hooks/embla';
import './slider.css';

const Index = ({ slideItems }) => {
  const { viewportRef, Arows } = useEmbla({
    options: {
      slidesToScroll: 1,
      skipSnaps: false,
      loop: true,
      inViewThreshold: 1,
    },
    autoplay: false,
  });

  return (
    <section className='slider-home'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='brand-slider-active'>
              <div className='embla'>
                <div className='embla__viewport custom' ref={viewportRef}>
                  <div className='embla__container'>
                    {slideItems.map((item, index) => {
                      return (
                        <div className='embla__slide home-slide' key={index}>
                          <div className=''>
                            <img
                              src={item?.image.url}
                              alt='brand'
                              className='img-fluid'
                            />
                          </div>
                        </div>
                      );
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
  );
};

export default Index;
