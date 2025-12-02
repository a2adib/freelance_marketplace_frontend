import React from 'react';
import Slider from '../component/Slider';
import PopularSection from '../component/PopularSection';
import TopRatedProviders from '../component/TopRatedProviders';
import HowItWorks from '../component/HowItWorks';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider/>
            <PopularSection/>
            <TopRatedProviders />
            <HowItWorks />
        </div>
    );
};

export default Home;