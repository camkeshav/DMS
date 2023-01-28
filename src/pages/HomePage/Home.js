import React from 'react';
import { Footer, InfoSection } from '../../components';
import Features from '../../components/Feature/feature';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <Features />

            {/* <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} />.
            */}
            <Footer />
        </>
    )
}

export default Home;