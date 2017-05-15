import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component{


  render(){
    return(
        <div className = 'container-fluid notFoundContainer'>
          <div className = 'row'>
            <h1>Oops! Looks like you've entered a wrong URL.</h1>
            <p>If you are looking for a Business opportunity,
            <span>
            <Link to="/"  className = 'notFoundToHomeLink'> click here </Link>
            </span></p>
          </div>
        </div>
    );
  }
}


export default NotFound;
