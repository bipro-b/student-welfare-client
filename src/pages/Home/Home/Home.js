import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Objective from '../Objective/Objective';
import Worked from '../Worked/Worked';
import Review from '../Review/Review'
import Footer from '.././../Shared/Footer/Footer';
const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Objective />
            <Worked />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;