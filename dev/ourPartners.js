import React from 'react';

class OurPartners extends React.Component{
  render(){
    return(
      <div className = 'container-fluid ourPartnersContainer'>
        <div className = 'row'>
          <div className = 'col-md-12'>
            <h2 className = 'whatIsLinqHeading animated'>Our Partners</h2>
          </div>
        </div>
        <div className="row rowOne animated">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail card-1 ourPartnersImgThumbnailDiv">
              <img className = 'img-responsive ourPartnersImgThumbnail' src="./images/partner111.png" alt="..." />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail card-1 ourPartnersImgThumbnailDiv">
              <img className = 'img-responsive ourPartnersImgThumbnail' src="./images/partner222.png" alt="..." />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail card-1 ourPartnersImgThumbnailDiv">
              <img className = 'img-responsive ourPartnersImgThumbnail' src="./images/partner333.png" alt="..." />
            </div>
          </div>
        </div>
        <div className="row rowTwo animated">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail card-1 ourPartnersImgThumbnailDiv">
              <img className = 'img-responsive ourPartnersImgThumbnail' src="./images/partner444.png" alt="..." />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail card-1 ourPartnersImgThumbnailDiv">
              <img className = 'img-responsive ourPartnersImgThumbnail' src="./images/partner555.png" alt="..." />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail card-1 ourPartnersImgThumbnailDiv">
              <img className = 'img-responsive ourPartnersImgThumbnail' src="./images/partner.png" alt="..." />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurPartners;
