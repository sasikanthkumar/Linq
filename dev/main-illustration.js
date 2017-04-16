import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';


class MainIllustration extends React.Component{
  render(){
    return(
        /**
        <div className="container-fluid">
          <div className = 'row'>
            <img src = './images/HomeScreenGraphicv2.svg' className = 'img-responsive main-illustration-img'></img>
          </div>
        </div>

        **/
        /**
        <div className= 'myWrapper'></div>
        **/

        <div>

        <MediaQuery query='(min-width: 1224px)'>


        <section id="banner">
          <div className="bg-color">
            <div className="container">

              <div className="row">

                <div className  = 'col-md-offset-7 col-md-5'>
                  <h2 className="logo-name">Transforming<br></br>The Way India Shops</h2>
                  <Link to="/open-a-store-form" className = 'mainIllustrationLink blink blink-infinite'><button className = 'form-links-btn' onClick={this.handleClick}> Start your business today</button></Link>
                </div>
                {/*
                <div className="inner text-center">
                  <h1 className="logo-name">Delicious</h1>
                  <h2>Food To fit your lifestyle &amp; health.</h2>
                  <p>Specialized in Indian Cuisine!!</p>
                </div>
                */}
              </div>
            </div>
          </div>
        </section>

        </MediaQuery>
        <MediaQuery query='(max-width: 1224px)'>

        <section id="bannerMobile">
          <img className = 'img-responsive mobileMainIconsImg' src = './images/mobileMainIcons-11.png'></img>
        </section>
        </MediaQuery>
        </div>

        /**
        <div className="container-fluid">
          <div className  ='row'>
            <div className="jumbotron">
            </div>
          </div>
        </div>
        **/
    );
  }
}

export default MainIllustration;
