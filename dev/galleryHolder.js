import React from 'react';
import GalleryImgs from './galleryImgs';
import NavBarGallery from './nav-bar-gallery';
import Footer from './footer';


class GalleryHolder extends React.Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div>
        <NavBarGallery />
        <GalleryImgs />
        <Footer />
      </div>
    );
  }

}

export default GalleryHolder;
