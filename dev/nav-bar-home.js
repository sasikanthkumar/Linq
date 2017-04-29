import React from 'react';
import scrollToElement from 'scroll-to-element';
import { Link } from 'react-router-dom';

class NavBarHome extends React.Component {

  constructor(props) {
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleOpenAStoreClick = this.handleOpenAStoreClick.bind(this);
    this.handleFranchiseRequirementsClick = this.handleFranchiseRequirementsClick.bind(this);
    this.handleTestimonialsClick = this.handleTestimonialsClick.bind(this);
    this.handleContactUsClick = this.handleContactUsClick.bind(this);
    this.handleOurPartnersClick = this.handleOurPartnersClick.bind(this);
    this.handleWhyPartnerClick = this.handleWhyPartnerClick.bind(this);
    this.handleBlogClick = this.handleBlogClick.bind(this);
  }

  handleHomeClick(e){
    scrollToElement('.myWrapper',{
      offset: -60,
    });
  }

  handleBlogClick(e){
    scrollToElement('.blogContainer',{
      offset: -60,
    });
  }

  handleAboutClick(e){
    scrollToElement('.whatIsLinqContainer',{
      offset:-60,
    });
  }

  handleOpenAStoreClick(e){
    scrollToElement('#benefitsOfOpeningStore',{
      offset:-60,
    });
  }

  handleFranchiseRequirementsClick(e){
    scrollToElement('.franchiseRequirementsContainer',{
      offset:-60,
    });
  }

  handleTestimonialsClick(e){
    scrollToElement('.testimonialsContainer',{
      offset:-60,
    });
  }

  handleContactUsClick(e){
    scrollToElement('.footerContainer',{
      offset: -60,
    });
  }

  handleOurPartnersClick(e){
    scrollToElement('.ourPartnersContainer',{
      offset: -60,
    });
  }

  handleWhyPartnerClick(e){
    scrollToElement('.whyPartner',{
      offset: -60,
    });
  }

  render(){
    return (
    <header className="navbar navbar-fixed-top" id="top">
      <div className="container-fluid navBarContainer nav-wrapper nav-wrapper-home">
      <div className="navbar-header">
        <button aria-controls="bs-navbar" aria-expanded="false" className="navbar-toggle collapsed" data-target="#bs-navbar" data-toggle="collapse" type="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link to="/"><img src = './images/linq.jpg' className = 'img-responsive linqNavBarImage'/></Link>
      </div>
      <nav className="navbar-collapse collapse" id="bs-navbar" aria-expanded="false">
        <ul className="nav navbar-nav">
          <li> <a href="#" className = 'navBarLinks' onClick={this.handleHomeClick}>Home</a> </li>
          <li> <a href="#" className = 'navBarLinks' onClick={this.handleAboutClick}>About</a> </li>
          {/*
          <li> <a href="#" className = 'navBarLinks' onClick={this.handleOpenAStoreClick}>Open A Store</a> </li>
          */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Open A Store
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#" onClick={this.handleOpenAStoreClick}>Benefits</a>
              <a className="dropdown-item" href="#" onClick={this.handleFranchiseRequirementsClick}>Franchise Requirements</a>
              <Link to="/open-a-store-form"  className="dropdown-item">Open now</Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              partner with us
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#" onClick={this.handleOurPartnersClick}>Our Partners</a>
              <a className="dropdown-item" href="#" onClick={this.handleWhyPartnerClick}>Why Partner?</a>
              <Link to="/partner-with-us-form"  className="dropdown-item">Partner Now</Link>
            </div>
          </li>
          <li className = 'navBarTestimonials'> <a href="#" className = 'navBarLinks' onClick={this.handleTestimonialsClick}>Testimonials</a> </li>


          {/*
          <li><Link to="/partner-with-us-form"  className = 'navBarLinks'>partner with us</Link></li>
          */}

          {/*<li> <a href="#" className = 'navBarLinks' onClick={this.handleFranchiseRequirementsClick}>franchise requirements</a> </li>*/}

        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li> <a href="#" className = 'navBarLinks' onClick={this.handleBlogClick}>Blog</a> </li>
          <li><Link to="/gallery"  className = 'navBarLinks'>Gallery</Link></li>
          <li><Link to="/careers"  className = 'navBarLinks'>Careers</Link></li>
          <li><Link to="/contactUs"  className = 'navBarLinks'>Contact Us</Link></li>
        </ul>
      </nav>
      </div>
    </header>
    );
  }
}

export default NavBarHome;
