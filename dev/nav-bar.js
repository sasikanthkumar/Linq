import React from 'react';
import scrollToElement from 'scroll-to-element';

class NavBar extends React.Component {


  constructor(props) {
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  handleHomeClick(e){
    scrollToElement('#homeScroll',{
      offset: -80,
    });
  }

  render(){
    return (
    <header className="navbar navbar-fixed-top" id="top">
      <div className="container-fluid navBarContainer">
      <div className="navbar-header">
        <button aria-controls="bs-navbar" aria-expanded="false" className="navbar-toggle collapsed" data-target="#bs-navbar" data-toggle="collapse" type="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a href="#" className="navbar-brand">Linq</a>
      </div>
      <nav className="navbar-collapse collapse" id="bs-navbar" aria-expanded="false">
        <ul className="nav navbar-nav">
          <li> <a href="#" className = 'navBarLinks'>Home</a> </li>
          <li> <a href="#" className = 'navBarLinks'>About</a> </li>
          <li> <a href="#" className = 'navBarLinks'>Services</a> </li>
          <li> <a href="#" className = 'navBarLinks'>Pages</a> </li>
          <li> <a href="#" className = 'navBarLinks'>Shop</a> </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" className = 'navBarLinks'>Portfolio</a></li>
          <li><a href="#" className = 'navBarLinks'>Contact</a></li>
          <li><a href="#" className = 'navBarLinks'>Blog</a></li>
        </ul>
      </nav>
      </div>
    </header>
    );
  }
}

export default NavBar;
