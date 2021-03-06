import React from 'react';
import { Link } from 'react-router-dom';

class WhatIsLinq extends React.Component{
  render(){
    return(
      <div className = 'container-fluid whatIsLinqContainer'>
        <div className = 'row rowPaddingBtm'>
          <div className = 'col-md-8 col-md-offset-2'>
            {/*<Link to="/partner-with-us-form" ><button className = 'form-links-btn' onClick={this.handleClick}> Partner With Us </button></Link>*/}
            <h2 className = 'whatIsLinqHeading animated'>What is a LinQ store?</h2>
            <p className = 'whatIsLinqText animated'>A LinQ store is an online super bazaar with an aggregation of various e-commerce services like retail, travel, health care, insurance, pharmacy, money-transfer, matrimony and others under a single platform. ontonified digitalised platform. As a single point digital platform, we have a string of highly regarded global organizations driving the LINQ ecosystem forward.<br></br><br></br>
            LinQ stores are providing business opportunities for enterprising individuals who want to start a business of their own in their local town.<br></br><br></br>
            If you are looking to start a business in your town, opening a LinQ store would definitely be an exciting option.
            </p>
          </div>
        </div>
        <div className = 'row'>
          <div className = 'col-md-12'>
            <h3 className = 'linqAdvantages animated' id = 'linqAdvantagesId'>LinQ store advantages</h3>
          </div>
          <div className="col-md-3 col-sm-6">
					  <div className = 'whatIsLinqCard animated'>
              <span className="icon">
							   <img src = './images/Aggregate.svg' className = 'img-responsive linqAdvanImg'></img>
						  </span>
              <h4 className = 'whatIsLinqCardHeading'>EXTENSIVE SERVICES</h4>
              <p className = 'whatIsLinqCardText'>We aggregate a wide range of internet services into a unified digital offline store.</p>
            </div>
				  </div>
          <div className="col-md-3 col-sm-6">
					  <div className = 'whatIsLinqCard animated'>
              <span className="icon">
                <img src = './images/ValueforMoney.svg' className = 'img-responsive linqAdvanImg'></img>
              </span>
              <h4 className = 'whatIsLinqCardHeading'>VALUE FOR MONEY</h4>
              <p className = 'whatIsLinqCardText'>At LinQ stores, we empower customers to make an informed choice thus entitling them to the best possible unparalleled deals on products.</p>
            </div>
				  </div>
          <div className=" col-md-3 col-sm-6">
					  <div className = 'whatIsLinqCard animated'>
              <span className="icon">
                <img src = './images/Assistance.svg' className = 'img-responsive linqAdvanImg'></img>
              </span>
              <h4 className = 'whatIsLinqCardHeading'>FREE & TRUSTED ASSISTANCE</h4>
              <p className = 'whatIsLinqCardText'>We ease out the process for the buyer, by placing an order and having it procured, “free of charge”.</p>
            </div>
				  </div>
          <div className="col-md-3 col-sm-6">
            <div className = 'whatIsLinqCard animated'>
              <span className="icon">
                <img src = './images/HassleFreereturns.svg' className = 'img-responsive linqAdvanImg'></img>
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
