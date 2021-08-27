import useEmbla from '../../hooks/embla';

const Index = ({ slideItems, title }) => {
  const { viewportRef, Arows } = useEmbla({
    options: {
      slidesToScroll: 1,
      skipSnaps: false,
      loop: true,
    },
    autoplay: true,
  });

  return (
    <section className='brand-area '>
      <div className='container'>
        <div className='text-center small-section'>
          <h3> {title} </h3>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='brand-slider-active'>
              <div className='embla'>
                <div className='embla__viewport' ref={viewportRef}>
                  <div className='embla__container'>
                    {slideItems.map((item, index) => {
                      return (
                        <div
                          className='embla__slide'
                          key={index}
                          style={{ minWidth: '25%' }}
                        >
                          <div className='single-brand'>
                            <img
                              src={item?.image.url}
                              alt='brand logo'
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
