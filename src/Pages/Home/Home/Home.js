import React from 'react';
import Categories from '../Categories/Categories';
import ExploreCars from '../ExploreCars/ExploreCars';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Categories></Categories>
            <ExploreCars></ExploreCars>
        </div>
    );
};

export default Home;