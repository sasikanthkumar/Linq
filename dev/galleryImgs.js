import React from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES =
[
        {
            src: "./images/image1.jpg",
            thumbnail: "./images/image1.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 658,
        },
        {
            src: "./images/image2.jpg",
            thumbnail: "./images/image2.jpg",
            thumbnailWidth: 960,
            thumbnailHeight: 794,
        },
        {
            src: "./images/image3.jpg",
            thumbnail: "./images/image3.jpg",
            thumbnailWidth: 2048,
            thumbnailHeight: 1370,
        },

        {
            src: "./images/image4.jpg",
            thumbnail: "./images/image4.jpg",
            thumbnailWidth: 2048,
            thumbnailHeight: 1370,
        },

    ]

class GalleryImgs extends React.Component{
  render(){
    return(
      <div className = 'container-fluid galleryContainer'>

        <div className = 'row'>
          <div className="col-md-8 col-md-offset-2 text-left gallery-heading ">
            <h2>Gallery</h2>
          </div>
        </div>
        <div className = 'row'>
          <div className = 'col-md-offset-2 col-md-8'>
            <Gallery images={IMAGES} enableImageSelection = {false}/>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryImgs;
