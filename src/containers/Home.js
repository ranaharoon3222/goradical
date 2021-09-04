import React, { useEffect, useState } from 'react';
import { Client } from '../PrismicClient';
import Banner from '../components/Banner';
import Brand from '../components/Brand';
import About from '../components/About';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import Portfolio from '../components/portfolio';
import Loading from '../components/Loader/loadingSpinner';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.getByUID('pages', 'home');
      if (response) {
        setData(response.data);
      }
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return <Loading />;
  }

  const banner = data.body.filter((item) => item.slice_type === 'banner')[0];
  const logoSlider = data.body.filter(
    (item) => item.slice_type === 'logo_slider'
  )[0];
  const aboutUs = data.body.filter((item) => item.slice_type === 'about_us')[0];
  const portfolio = data.body.filter(
    (item) => item.slice_type === 'portfolio'
  )[0];

  console.log(portfolio, 'portfolio');

  return (
    <>
      <Banner banner={banner.primary} />
      <Brand
        slideItems={logoSlider.items}
        title={logoSlider.primary.logo_slider_title[0].text}
      />
      <Portfolio portfolio={portfolio} />
      <About about={aboutUs.primary} />
      <Services />
      <CallToAction />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default Home;
