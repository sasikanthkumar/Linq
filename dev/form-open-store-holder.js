import React from 'react';
import FormOpenStoreSinglePage from './form-open-store-single-page';
import NavBarForms from './nav-bar-forms';
import Footer from './footer';
import FormCoverImage from './form-cover-image';


class FormOpenStoreHolder extends React.Component{
  
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render(){
    return(
      <div>
        <NavBarForms />
        <div>
          <div className= 'formCoverImage formCoverImageOpenAStore'>
            <h1 className = 'coverHeading'>Open a Store</h1>
          </div>
        </div>

        <FormOpenStoreSinglePage />
        <Footer />
      </div>
    );
  }
}

export default FormOpenStoreHolder;
