import React from 'react';
import { Link } from 'react-router-dom';

class WhatIsLinq extends React.Component{
  render(){
    return(
      <div className = 'container-fluid whatIsLinqContainer'>
        <div className = 'row rowPaddingBtm'>
          <div className = 'col-md-8 col-md-offset-2 fadeInUp animated'>
            {/*<Link to="/partner-with-us-form" ><button className = 'form-links-btn' onClick={this.handleClick}> Partner With Us </button></Link>*/}

            <h2 className = 'whatIsLinqHeading'>What Is Linq?</h2>
            <p className = 'whatIsLinqText'>An aggregation of various e-commerce avenues onto a unified digitalised platform. Put into perspective, it’s an online super bazaar with an extensive assemblage of retail, travel, health care, insurance, pharmacy, money-transfer, matrimony and various other services under a single roof.As a single point digital platform, we have a string of highly regarded global organizations driving the LINQ ecosystem forward.</p>
          </div>
        </div>
        <div className = 'row'>
          <div className = 'col-md-12'>
            <h3 className = 'linqAdvantages'>LinQ Advantages</h3>
          </div>
          <div className="col-md-3 col-sm-6">
					  <div className = 'whatIsLinqCard fadeInUp animated'>

              <span className="icon">
							       <img src = './images/linq_advan1.svg' className = 'img-responsive linqAdvanImg'></img>
						  </span>
              <h4 className = 'whatIsLinqCardHeading'>EXTENSIVE SERVICES</h4>
              <p className = 'whatIsLinqCardText'>We aggregate a wide range of internet services into a unified digital offline store.</p>
            </div>
				  </div>
          <div className="col-md-3 col-sm-6">
					  <div className = 'whatIsLinqCard  fadeInUp animated'>
              <span className="icon">
                <img src = './images/linq_advan2.svg' className = 'img-responsive linqAdvanImg'></img>
              </span>
              <h4 className = 'whatIsLinqCardHeading'>VALUE FOR MONEY</h4>
              <p className = 'whatIsLinqCardText'>At LinQ stores, we empower customers to make an informed choice thus entitling them to the best possible unparalleled deals on products.</p>
            </div>
				  </div>
          <div className=" col-md-3 col-sm-6">
					  <div className = 'whatIsLinqCard  fadeInUp animated'>
              <span className="icon">
                <img src = './images/linq_advan3.svg' className = 'img-responsive linqAdvanImg'></img>
              </span>
              <h4 className = 'whatIsLinqCardHeading'>FREE & TRUSTED ASSISTANCE</h4>
              <p className = 'whatIsLinqCardText'>We ease out the process for the buyer, by placing an order and having it procured, “free of charge”.</p>
            </div>
				  </div>
          <div className="col-md-3 col-sm-6">
            <div className = 'whatIsLinqCard fadeInUp animated'>
              <span className="icon">
                <img src = './images/linq_advan4.svg' className = 'img-responsive linqAdvanImg'></img>
              </span>
              <h4 className = 'whatIsLinqCardHeading'>HASSLE FREE RETURNS</h4>
              <p className = 'whatIsLinqCardText'>LinQ renders a simple and hassle free return policy at no additional cost.</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}


export default WhatIsLinq;
