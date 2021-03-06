import React from 'react';
import NavBarHome from './nav-bar-home';
import WhatIsLinq from './what-is-linq';
import OpenAStore from './open-a-store';
import FranchiseRequirements from './franchise-requirements';
import Testimonials from './testimonials';
import FormLinks from './form-links';
import MainIllustration from './main-illustration';
import Footer from './footer';
import ModalTest from './ModalTest';
import ModalTest2 from './ModalTest2';
import GalleryImgs from './galleryImgs';
import WhyPartner from './whyPartner';
import OurPartners from './ourPartners';
import LatestFromOurBlog from './latest-from-our-blog';

class Holder extends React.Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div>
        <NavBarHome />
        <MainIllustration />
        <WhatIsLinq />
        <OpenAStore />
        {/*
        <FormLinks />
        */}
        <FranchiseRequirements />
        <OurPartners />
        <WhyPartner />
        <Testimonials />
        <LatestFromOurBlog />
        <Footer />
      </div>
    );
  }
}

export default Holder;
