import React from 'react';
import MediaQuery from 'react-responsive';

class OpenAStore extends React.Component{
  render(){
    return(
      <div className = 'container-fluid openAStoreContainer'>
      <div className = 'row rowPaddingBtm'>
        <div className = 'col-md-8 col-md-offset-2 fadeInUp animated'>
          {/*<Link to="/partner-with-us-form" ><button className = 'form-links-btn' onClick={this.handleClick}> Partner With Us </button></Link>*/}

          <h2 className = 'whatIsLinqHeading'>What Is Linq?</h2>
          <p className = 'whatIsLinqText'>An aggregation of various e-commerce avenues onto a unified digitalised platform. Put into perspective, it’s an online super bazaar with an extensive assemblage of retail, travel, health care, insurance, pharmacy, money-transfer, matrimony and various other services under a single roof.As a single point digital platform, we have a string of highly regarded global organizations driving the LINQ ecosystem forward.</p>
        </div>
      </div>


      {/*
        <MediaQuery query='(min-width: 1224px)'>
        <section className = 'open-a-store-section'>
          <div className="open-a-store-heading-block">
            <h3 className = 'fadeInUp animated'>Open a Store</h3>

            <img className = 'img-responsive ribbonImage' src = './images/OpenStore.png'></img>
            <div className = 'row'>
              <div className = 'col-md-offset-2 col-md-8'>
                <p className = 'openAStoreText'>Our extensive partner base puts LinQ stores at a strategic advantage by helping us propel the market offerings and extending the services to people across every nook and corner.</p>
              </div>
            </div>
            <span className="margin-top-20 fadeInUp animated benefitsOfOpeningAStore">Benefits of opening a store </span>
          </div>
          <div className = 'time-line animated fadeIn'>
            {/*
            <ul className="row">
              <li className="col-sm-6 pull-right padding-left-100 margin-bottom-30">
                <h4>Web design</h4>
                <p>Believe it or not its just  been waiting for you where are herhers been waiting for you where are herhers and company too.</p>
              </li>
            </ul>

            <div className="clearfix"></div>
            */}
            <ul className="row second first-row">
              <li className="col-sm-6 pull-left text-right padding-right-100">
                <h4>Brand Ambassador</h4>
                <p>Be the brand ambassador of globally acclaimed top notch online firms </p>
              </li>
            </ul>

            <div className="clearfix"></div>

            <ul className="row third second-row">
              <li className="col-sm-6 pull-right padding-left-70 margin-bottom-30">
                <h4>Wide Range of Products</h4>
                <p>Sell a  wide range of products  from a multitude of services</p>
              </li>
            </ul>
            <div className="clearfix"></div>
            <ul className="row second third-row">
              <li className="col-sm-6 pull-left text-right padding-right-100">
                <h4>Minimal Investment</h4>
                <p>Get your business running with a minimal investment and a zero stock risk</p>
              </li>
            </ul>

            <div className="clearfix"></div>

            <ul className="row third fourth-row">
              <li className="col-sm-6 pull-right padding-left-70 margin-bottom-30">
                <h4>One Stop Store</h4>
                <p>Be that “One stop digital store” in your town</p>
              </li>
            </ul>
            <div className="clearfix"></div>

          </div>
        */}
        {/*
        </section>
        </MediaQuery>
        <MediaQuery query='(max-width: 1224px)'>
        <section className = 'open-a-store-section'>
          <div className="open-a-store-heading-block">
            <h3 className = 'fadeInUp animated'>Open A Store</h3>
            {/*<hr></hr>*/}
            <img className = 'img-responsive ribbonImage' src = './images/OpenStore.png'></img>
            <span className="margin-top-20 fadeInUp animated">Benefits of opening a store </span>

          </div>
          <div className = 'open-a-store-elements'>
            <div className ='row open-a-store-requirement'>
              <div className = 'col-md-6 col-md-offset-3'>
                <img className="img-responsive open-a-store-requirements-small-screen-img" src="./images/Ambassador.png" alt=""/>
                <div className = 'open-a-store-detail open-a-store-detail-small-screen'>
                  <h4>Brand Ambassador</h4>
                  <p>Be the brand ambassador of globally acclaimed top notch online firms</p>
                </div>
              </div>
            </div>
            <div className ='row open-a-store-requirement'>
              <div className = 'col-md-6 col-md-offset-3'>
                <img className="img-responsive open-a-store-requirements-small-screen-img" src="./images/products.png" alt=""/>
                <div className = 'open-a-store-detail open-a-store-detail-small-screen'>
                  <h4>Wide Range of Products</h4>
                  <p>Sell a  wide range of products  from a multitude of services</p>
                </div>
              </div>
            </div>
            <div className ='row open-a-store-requirement'>
              <div className = 'col-md-6 col-md-offset-3'>
                <img className="img-responsive open-a-store-requirements-small-screen-img" src="./images/businessGrowth.png" alt=""/>
                <div className = 'open-a-store-detail open-a-store-detail-small-screen'>
                  <h4>Minimal Investment</h4>
                  <p>Get your business up and running with a minimal investment. There’s no need for buying any inventory upfront.</p>
                </div>
              </div>
            </div>
            <div className ='row open-a-store-requirement'>
              <div className = 'col-md-6 col-md-offset-3'>
                <img className="img-responsive open-a-store-requirements-small-screen-img" src="./images/oneStopStore.png" alt=""/>
                <div className = 'open-a-store-detail open-a-store-detail-small-screen'>
                  <h4>One Stop Store</h4>
                  <p>Be that “One stop digital store” in your town</p>
                </div>
              </div>
            </div>
          </div>
          */}
          {/*
        </section>
        </MediaQuery>
        */}
      </div>
    );
  }
}

export default OpenAStore;
