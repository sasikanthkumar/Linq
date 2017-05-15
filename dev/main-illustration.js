import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import YouTube from 'react-youtube';
class MainIllustration extends React.Component{

  componentDidMount(){
    window.startMainIllustrationSVG();
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
  }

  render(){
    const opts = {
      height: '240',
      width: '426',
      playerVars: {
        autoplay: 1
      }
    };

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
            <div className="container mainSVGanimContainer">
              <div className="row mainSVGanimRow">

                <div className='col-md-6 '>
                  <div id="bg-animation"></div>
                </div>

                <div className  = 'col-md-6' id = "start-ur-business-banner">
                  <YouTube
                    className = 'youtubeVideo'
                    videoId="WkCgWEhJTCI"
                    opts={opts}
                    onReady={this._onReady}
                  />
                  {/*
                  <p>LinQ store has a mission to connect brands and consumers from all walks of life and create a trustworthy ecosystem thus transforming the way India shops.</p>
                  */}
                  <h1 className="logo-name">Business Opportunities <br></br>with LinQ</h1>
                  <Link to="/open-a-store-form" className = 'mainIllustrationLink'><button className = 'form-links-btn' onClick={this.handleClick}>Start Your Business Today</button></Link>
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
