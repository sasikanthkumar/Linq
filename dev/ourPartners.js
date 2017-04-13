import React from 'react';

class OurPartners extends React.Component{
  render(){
    return(
      <div className = 'container-fluid ourPartnersContainer'>
        <div className = 'row'>
          <h1 className = 'ourPartnersHeading'>Our Partners</h1>
          <div className = 'col-md-offset-2 col-md-2 col-xs-12'>
            <img className = 'img-responsive ourPartnersImg' src = './images/partner1.png'/>
          </div>
          <div className = 'col-md-offset-1 col-md-2 col-xs-12'>
            <img className = 'img-responsive ourPartnersImg' src = './images/partner2.png'/>
          </div>
          <div className = 'col-md-offset-1 col-md-2 col-xs-12'>
            <img className = 'img-responsive ourPartnersImg' src = './images/partner3.png'/>
          </div>
        </div>
        <div className = 'row secondRow'>
          <div className = 'col-md-offset-2 col-md-2 col-xs-12'>
            <img className = 'img-responsive ourPartnersImg via' src = './images/via.png'/>
          </div>
          <div className = 'col-md-offset-1 col-md-2 col-md-3 col-xs-12'>
            <img className = 'img-responsive ourPartnersImg' src = './images/partner5.png'/>
          </div>
          <div className = 'col-md-offset-1 col-md-2 col-xs-12'>
            <img className = 'img-responsive ourPartnersImg' src = './images/partner6.png'/>
          </div>
        </div>
      </div>
    );
  }
}

export default OurPartners;
