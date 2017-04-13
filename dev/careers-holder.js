import React from 'react';
import Careers from './careers';
import NavBarCareers from './nav-bar-careers';
import Footer from './footer';


class CareersHolder extends React.Component{
  render(){
    return(
      <div>
        <NavBarCareers />
        <Careers />
        <Footer />
      </div>
    );
  }

}
export default CareersHolder;
