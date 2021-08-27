import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Brand from '../components/Brand';
import About from '../components/About';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import Pricing from '../components/Pricing';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import { Client } from '../PrismicClient';

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
    return 'Loading...';
  }

  console.log(data);

  const banner = data.body.filter((item) => item.slice_type === 'banner')[0];
  const logoSlider = data.body.filter(
    (item) => item.slice_type === 'logo_slider'
  )[0];
  const aboutUs = data.body.filter((item) => item.slice_type === 'about_us')[0];

  return (
    <>
      <Banner banner={banner.primary} />
      <Brand
        slideItems={logoSlider.items}
        title={logoSlider.primary.logo_slider_title[0].text}
      />
      <About about={aboutUs.primary} />
      <Services />
      <CallToAction />
      <Pricing />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default Home;
