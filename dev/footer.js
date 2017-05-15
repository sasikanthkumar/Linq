import React from 'react';
import { Link } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';

const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;

class Footer extends React.Component{

  constructor(props) {
    super(props);
    this.handleBackToTop = this.handleBackToTop.bind(this);
  }

  componentDidMount(){
    window.startFooterSVG();
  }

  handleBackToTop(e){
    scrollToElement('#banner',{
      offset: -60,
      duration: 2000,
    });
  }

  render(){
    return(
        <div className = 'container-fluid footerContainer'>
          {/*
          <div className = 'row'>
            <div className = 'col-md-offset-2 col-md-4 useFulLinksDiv'>
            <h6 className = 'useFulLinks'>USEFUL LINKS</h6>
            <ul>
              <li><Link  className='footerLink' to="/">Home</Link></li>
              <li><Link  className='footerLink' to = "/open-a-store-form">Open a Store</Link></li>
              <li><Link  className='footerLink' to = "/partner-with-us-form">Partner With Us</Link></li>
              <li><Link  className='footerLink' to = "/careers">Careers</Link></li>
              <li><Link  className='footerLink' to = "/gallery">Gallery</Link></li>
              <li><Link  className='footerLink' to = "/contactUs">Contact Us</Link></li>
            </ul>
            </div>
            <div className = 'col-md-6'>
              <ul className="social">
                <li><a href="#" ><img className="img-responsive"  src = './images/socialMedia-1.png'></img></a></li>
                <li><a href="https://www.facebook.com/linqunistore/" target="_blank"><img className="img-responsive" src = './images/socialMedia-2.png'></img></a></li>
                <li><a href="#" ><img className="img-responsive" src = './images/socialMedia-3.png'></img></a></li>
                <li><a href="#" ><img className="img-responsive" src = './images/socialMedia-4.png'></img></a></li>
              </ul>
            </div>

          </div>

          <div className = 'row rights'>
            <div className = 'col-md-12'>
              <p>© 2017 All Rights Reserved</p>
            </div>

          </div>
          */}
          <div className = 'row '>
            {/*
            <div className = 'col-md-4 col-sm-12 linq_logo_footer_col'>
              <img src ='./images/LinqLogo.svg' className = 'img-responsive' ></img>
            </div>
            */}

            <div className = 'col-md-8 col-sm-12 linq_tag_line_footer_col'>
              {/*<p>Transforming <br></br>The Way India <br></br>Shops</p>*/}
              <div id="my-div"></div>
            </div>

            <div className = 'col-md-offset-1 col-md-2  col-sm-12 linq_useful_links_footer_col'>
              <h2>USEFUL LINKS</h2>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to = "/open-a-store-form">Open a Store</Link></li>
                <li><Link to = "/partner-with-us-form">Partner With Us</Link></li>
                <li><Link to = "/careers">Careers</Link></li>
                <li><Link to = "/gallery">Gallery</Link></li>
                <li><Link to = "/contactUs">Contact Us</Link></li>
              </ul>

            </div>
          </div>
          <div className = 'row'>
            <div className = 'messagingPartnerDiv'>
              <h2>Messaging Partner</h2>
              <a href="https://msg91.com/startups/?utm_source=startup-banner"><img src="https://msg91.com/images/startups/msg91Badge.png" width="120" height="90" title="MSG91 - SMS for Startups" alt="Bulk SMS - MSG91"/></a>
            </div>
          </div>

          <div className = 'row footer_bottom'>
            <div className = 'col-md-4 col-sm-12 social_links_col'>
              <ul className = 'ul_social_icons'>
                <li className = 'li_social_icons'><a className = 'li_a_social_icons' href="https://www.facebook.com/linqunistore/" target="_blank"><img className="img-responsive" src = './images/facebook-logo.svg'></img></a></li>
                <li className = 'li_social_icons'><a className = 'li_a_social_icons' href="https://www.facebook.com/linqunistore/" target="_blank"><img className="img-responsive" src = './images/google-plus-symbol.svg'></img></a></li>
                <li className = 'li_social_icons'><a className = 'li_a_social_icons' href="https://www.facebook.com/linqunistore/" target="_blank"><img className="img-responsive" src = './images/linkedin-logo.svg'></img></a></li>
                <li className = 'li_social_icons li_social_icons_last'><a className = 'li_a_social_icons' href="https://www.facebook.com/linqunistore/" target="_blank"><img className="img-responsive" src = './images/twitter-logo-silhouette.svg'></img></a></li>
              </ul>
            </div>
            <div className = 'col-md-4 col-sm-12 copyrights_col'>
              <p>© LINQ 2017</p>
            </div>
            <div className = 'col-md-4 col-sm-12 back_to_top_col'>
              <p>
                <a href="#" onClick = {this.handleBackToTop}>Back to Top</a>
              </p>
            </div>
          </div>


        </div>
    );
  }
}


export default Footer;
