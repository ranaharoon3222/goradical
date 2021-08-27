const Index = ({ about }) => {
  const {
    title1,
    description,
    image,
    rating,
    projects,
    team_members,
    reviews,
  } = about;

  return (
    <section className='about-info'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12'>
            <div className='about-info-image'>
              <img
                src={image.url}
                alt='Presenting A Project'
                className='img-fluid'
              />
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className='about-info-text'>
              <h2> {title1} </h2>
              <p>{description}</p>
              <div className='flex-wrap about-info-project d-flex justify-content-between'>
                <div className='mb-20 project-rating'>
                  <h3> {rating} </h3>
                  <ul className='project-rating-star d-flex'>
                    <li>
                      <i className='fas fa-star' />
                    </li>
                    <li>
                      <i className='fas fa-star' />
                    </li>
                    <li>
                      <i className='fas fa-star' />
                    </li>
                    <li>
                      <i className='fas fa-star' />
                    </li>
                    <li>
                      <i className='fas fa-star' />
                    </li>
                  </ul>
                  <p> {reviews} Ratings</p>
                </div>
                <div className='mb-20 project-information'>
                  <h3>{projects}+ </h3>
                  <p>Successfully</p>
                  <p>Completed Projects</p>
                </div>
                <div className='mb-20 project-information'>
                  <h3> {team_members} </h3>
                  <p>Expert</p>
                  <p>Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mask-group'>
          <img className='mask1' src='assets/img/mask/mask06.png' alt='mask' />
        </div>
      </div>
    </section>
  );
};

export default Index;
