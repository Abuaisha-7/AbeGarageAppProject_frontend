import React from 'react'
// import banner image
import bannerImage from '../../assets/images/banner/banner.jpg';
// import About us component
import AboutUs from '../components/AbowtUsSection/AbowtUsSection';
// import our services component
import OurServices from '../components/OurServices/OurServices';
// import Feature component
import FeatureSection from '../components/Home/FeaturesSection/FeaturesSection';
// import WhyChooseUs component
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
// import BottomBanner component
import BottomBanner from '../components/BottomBanner/BottomBanner';
// import CTASection component
import CTASection from '../components/CTA_Section/CTASection';

const Home = () => {
  return (
    <div>
        <section className="video-section">
            <div data-parallax='{"y": 50}' className="sec-bg"
            style={{ backgroundImage: `url(${bannerImage})` }}></div>
            <div className="auto-container">
                <h5>Working since 1999</h5>
                <h2>Tuneup Your Car <br /> to Next Level</h2>
                <div className="video-box">
                    <div className="video-btn"><a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                            className="overlay-link lightbox-image video-fancybox ripple"><i className="flaticon-play"></i></a>
                    </div>
                    <div className="text">Watch intro video <br/> about us</div>
                </div>
            </div>
        </section>
        <AboutUs />
        <OurServices />
        <FeatureSection />
        <WhyChooseUs />
        <BottomBanner />
        <CTASection />
        
    </div>
  )
}

export default Home