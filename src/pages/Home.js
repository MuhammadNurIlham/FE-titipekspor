import React from 'react';


// ===== Component =====
import NavigationBar from '../components/navbar/NavigationBar';
import CarrouselPage from '../components/carrousel/CarrouselPage';
import FeatureService from '../components/feature/FeatureService';
import FeatureClass from '../components/class/FeatureClass';
import SupportBusiness from '../components/business/SupportBusiness';
import RecomendedBuyer from '../components/buyer/RecomendedBuyer';
import Blog from '../components/blog/Blog';
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <div>
            <NavigationBar />
            <CarrouselPage />
            <FeatureService />
            <FeatureClass />
            <SupportBusiness />
            <RecomendedBuyer />
            <Blog />
            <Footer />
        </div>
    )
}

export default Home;