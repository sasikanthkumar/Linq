import React from 'react';
import { Link } from 'react-router-dom';


class WhyPartner extends React.Component{
  render(){
    return(
      <div className = 'container-fluid whyPartner'>
        <div className="row rowPaddingBtm">
          <div className="col-md-8 col-md-offset-2 fadeInUp animated">
            <h2 className="whatIsLinqHeading">Why Partner?</h2>
            <p className="whatIsLinqText">We form a close knit network with all our associate partners. The professional rapport which we share with our collaborators entitles us in rendering specialized e-commerce solutions to people across varied demographics through our assisted digital stores.</p>
          </div>
        </div>
        {/*
        <div className="row whyPartnerPartnerWithUsLink">
          <Link to="/partner-with-us-form" ><button className = 'form-links-btn' onClick={this.handleClick}> Partner With Us </button></Link>
        </div>
        */}
      </div>
    );
  }
}

export default WhyPartner;
