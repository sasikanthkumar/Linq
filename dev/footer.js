import React from 'react';
import { Link } from 'react-router-dom';

const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div className = 'container-fluid footerContainer'>
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
        </div>
    );
  }
}


export default Footer;
