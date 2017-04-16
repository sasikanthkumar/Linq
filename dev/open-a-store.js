import React from 'react';
import MediaQuery from 'react-responsive';

class OpenAStore extends React.Component{
  render(){
    return(
      <div className = 'container-fluid openAStoreContainer'>
        <div className = 'row rowPaddingBtm'>
          {/*
          <div className = 'col-md-offset-1 col-md-4 col-lg-offset-3 col-lg-3'>
            <h2 className = 'whatIsLinqHeading'>Open a Store</h2>
          </div>
          <div className = 'col-md-6 col-lg-4'>
            <p className = 'whatIsLinqText'>Our extensive partner base puts LinQ stores at a strategic advantage by helping us propel the market offerings and extending the services to people across every nook and corner.</p>
          </div>
          */}
          <div className = 'col-md-12'>
            <h2 className = 'whatIsLinqHeading'>Open a Store</h2>
          </div>
          <div className = 'col-md-offset-2 col-md-8'>
            <p className = 'whatIsLinqText'>Our extensive partner base puts LinQ stores at a strategic advantage by helping us propel the market offerings and extending the services to people across every nook and corner.</p>
          </div>

        </div>
        <div className = 'row linqAdvantagesRow'>
          <div className = 'col-md-12 '>
            <h3 className = 'linqAdvantages'>Benefits of opening a store</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-2 col-md-4 col-sm-6">
            <div className="thumbnail benfitsOfOpenStoreThumbnail">
              <img src="./images/BrandAmbassador.svg"  className = 'benfitsOfOpenStoreImg img-responsive'alt="..."/>
              <div className="caption">
                <h4 className = 'openAStoreCardHeading'>BRAND AMBASSADOR</h4>
                <p className = 'whatIsLinqCardText openAStoreCardText'>Be the brand ambassador of globally acclaimed top notch online firms</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="thumbnail benfitsOfOpenStoreThumbnail">
              <img src="./images/products.svg"  className = 'benfitsOfOpenStoreImg img-responsive'alt="..."/>
              <div className="caption">
                <h4 className = 'openAStoreCardHeading'>WIDE RANGE OF PRODUCTS</h4>
                <p className = 'whatIsLinqCardText openAStoreCardText'>Sell a wide range of products from a multitude of services</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-2 col-md-4 col-sm-6">
            <div className="thumbnail benfitsOfOpenStoreThumbnail">
              <img src="./images/minimalInvestment.svg"  className = 'benfitsOfOpenStoreImg img-responsive'alt="..."/>
              <div className="caption">
                <h4 className = 'openAStoreCardHeading'>MINIMAL INVESTMENT</h4>
                <p className = 'whatIsLinqCardText openAStoreCardText'>Get your business running with a minimal investment and a zero stock risk</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="thumbnail benfitsOfOpenStoreThumbnail">
              <img src="./images/oneStopStore.svg"  className = 'benfitsOfOpenStoreImg img-responsive'alt="..."/>
              <div className="caption">
                <h4 className = 'openAStoreCardHeading'>ONE STOP STORE</h4>
                <p className = 'whatIsLinqCardText openAStoreCardText'>Be that “One stop digital store” in your town</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpenAStore;
