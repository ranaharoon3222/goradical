import React, { useEffect, useState } from 'react';
import { Client } from '../PrismicClient';
// import Brand from '../components/Brand';
import About from '../components/About';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import Testimonial from '../components/Testimonial';
// import Newsletter from '../components/Newsletter';
import Portfolio from '../components/portfolio';
import Slider from '../components/Slider';
import Trending from '../components/Trending';
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

  // const logoSlider = data.body.filter(
  //   (item) => item.slice_type === 'logo_slider'
  // )[0];
  const aboutUs = data.body.filter((item) => item.slice_type === 'about_us')[0];
  const portfolio = data.body.filter(
    (item) => item.slice_type === 'portfolio'
  )[0];

  const slider = data.body.filter((item) => item.slice_type === 'slider')[0];
  const trending = data.body.filter(
    (item) => item.slice_type === 'trending'
  )[0];
  console.log(trending);

  return (
    <>
      <Slider slideItems={slider.items} />
      <Trending slideItems={trending.items} />
      <Portfolio portfolio={portfolio} />
      <About about={aboutUs.primary} />
      <Services />
      <CallToAction />
      <Testimonial />
    </>
  );
};

export default Home;
