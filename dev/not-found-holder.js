import React from 'react';
import GalleryImgs from './galleryImgs';
import NotFoundNavBar from './not-found-nav-bar';
import Footer from './footer';
import NotFound from './not-found';


class NotFoundHolder extends React.Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div>
        <NotFoundNavBar />
        <NotFound />
        <Footer />
      </div>
    );
  }

}

export default NotFoundHolder;
