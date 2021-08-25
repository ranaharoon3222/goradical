import React from 'react'
import Banner from '../components/Banner'
import Brand from '../components/Brand'
import About from '../components/About'
import Services from '../components/Services'
import CallToAction from '../components/CallToAction'
import Pricing from '../components/Pricing'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'

const Home = () => {
    return (
        <>
            <Banner />
            <Brand />
            <About />
            <Services />
            <CallToAction />
            <Pricing />
            <Testimonial />
            <Newsletter />
        </>
    )
}

export default Home
