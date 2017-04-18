import React from 'react';
import TestimonialTabs from './testimonial-tabs';
import TestimonialsSlider from './testimonials_slider';

class Testimonials extends React.Component{
  render(){
    return(
      <div className = 'container-fluid testimonialsContainer'>
        <div className = 'row'>
          <div className = 'col-md-12'>
            <h2 className = 'whatIsLinqHeading animated'>Testimonials</h2>
          </div>
        </div>
        {/*
        <div className = 'row linqAdvantagesRow'>
          <div className = 'col-md-12 fromOurPartnersColumn'>
            <h3 className = 'linqAdvantages'>From Our Partners</h3>
          </div>
        </div>
        */}
        <TestimonialsSlider/>
      </div>
    );
  }
}

export default Testimonials;
