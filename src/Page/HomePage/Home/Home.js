import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import FirstSection from '../ForstSection/FirstSection';
import Items from '../Items/Items';
import OurBrand from '../OurBrand/OureBrand';


const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <Items></Items>
            <FirstSection></FirstSection>
            <OurBrand></OurBrand>

            <Footer></Footer>

        </div>
    );
};

export default Home;