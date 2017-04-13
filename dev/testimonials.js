import React from 'react';
import TestimonialTabs from './testimonial-tabs';
import TestimonialsSlider from './testimonials_slider';

class Testimonials extends React.Component{
  render(){
    return(
      <div className = 'container-fluid testimonialsContainer'>
        <div className = 'row'>
          <div className="col-md-8 col-md-offset-2 text-left testimonials-heading fadeInUp animated">
            {/*<span>You deserved happiness</span>*/}
            <h2>Testimonials</h2>
            <p className = 'testmonialsFromOurPartners'>From Our Partners</p>
            {/*<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>*/}
          </div>
        </div>
        {/*
        <TestimonialTabs/>
        */}
        <TestimonialsSlider/>

      </div>
    );
  }
}

export default Testimonials;
