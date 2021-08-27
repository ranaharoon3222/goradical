const Index = ({ banner }) => {
  const { banner_title, description, image, button_link, button } = banner;

  return (
    <section className='bannerArea'>
      <div className='container custom-container'>
        <div className='row d-flex align-items-center'>
          <div className='order-2 col-xl-6 order-xl-0'>
            <div className='bannerArea__wrapper'>
              <h1 className='bannerArea__title'>{banner_title[0].text}</h1>
              <p className='bannerArea__brief'>{description[0].text}</p>
              <div className='bannerArea__buttons'>
                <a
                  className='primary__button primary__button-bgPrimary'
                  href={button_link.url}
                >
                  {button?.[0].text}
                </a>
                <div className='overlay-playbutton'>
                  <a
                    className='popup-video video-border'
                    href='https://www.youtube.com/watch?v=hlWiI4xVXKY'
                  >
                    <i className='fas fa-play' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='order-1 col-xl-6 order-xl-0'>
            <div className='bannerArea__image'>
              <img src={image.url} alt='banner' />
            </div>
          </div>
        </div>
        <div className='mask-group'>
          <img
            className='mask1'
            src='assets/img/mask/layerShape-01.png'
            alt='mask'
          />
          <img
            className='mask2'
            src='assets/img/mask/layerShape-02.png'
            alt='mask'
          />
          <img
            className='mask3'
            src='assets/img/mask/downShape.png'
            alt='mask'
          />
          <img
            className='mask4'
            src='assets/img/mask/layers-dot.png'
            alt='mask'
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
