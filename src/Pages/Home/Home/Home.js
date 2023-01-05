import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Categories from '../Categories/Categories';
import ExploreCars from '../ExploreCars/ExploreCars';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
    useTitle("Home");

    return (
        <div>
            <HeroSection></HeroSection>
            <AdvertisedItem></AdvertisedItem>
            <Categories></Categories>
            <ExploreCars></ExploreCars>
        </div>
    );
};

export default Home;