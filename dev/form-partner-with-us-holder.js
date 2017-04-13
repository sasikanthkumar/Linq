import React from 'react';
import FormPartnerWithUs from './form-partner-with-us';
import NavBarPartnerWithUs from './nav-bar-partner-with-us';
import Footer from './footer';
import FormCoverImage from './form-cover-image';

class FormPartnerWithUsHolder extends React.Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div>
        <NavBarPartnerWithUs />
        <div>
          <div className= 'formCoverImage formCoverImagePartnerWithUs'>
            <h1 className = 'coverHeading'>Partner With Us</h1>
          </div>
        </div>
        <FormPartnerWithUs />
        <Footer />
      </div>
    );
  }
}

export default FormPartnerWithUsHolder;
