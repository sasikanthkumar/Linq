import React from 'react';


class LatestFromOurBlog extends React.Component{
  render(){
    return(
      <div className = 'container-fluid blogContainer'>
        <div className="row">
          <div className="col-md-12">
            <h2 className="whatIsLinqHeading animated zoomIn">Latest From Our Blog</h2>
          </div>
        </div>
        <div className = 'row blogCardsRow'>
          <div className = 'col-md-4'>
            <div className="blog-card">
              <img src = './images/image1.jpg'></img>
              <h3 className  = 'blog-card-heading'>Theres nothing can hold when we hold you</h3>
              <p className = 'blog-card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
               standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make
               a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was popularised in the 1960 with the release of Letraset sheets containing
               Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
               of Lorem Ipsum.</p>
              <div className = 'blog-read-more-btn-div'>
                <button className = 'blog-read-more-btn'>READ MORE</button>
              </div>
            </div>
          </div>
          <div className = 'col-md-4'>
            <div className="blog-card">
              <img src = './images/image1.jpg'></img>
              <h3 className  = 'blog-card-heading'>Theres nothing can hold when we hold you</h3>
              <p className = 'blog-card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
               standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make
               a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was popularised in the 1960 with the release of Letraset sheets containing
               Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
               of Lorem Ipsum.</p>
               <div className = 'blog-read-more-btn-div'>
                <button className = 'blog-read-more-btn'>READ MORE</button>
               </div>
            </div>
          </div>
          <div className = 'col-md-4'>
            <div className="blog-card">
              <img src = './images/image1.jpg'></img>
              <h3 className  = 'blog-card-heading'>Theres nothing can hold when we hold you</h3>
              <p className = 'blog-card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
               standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make
               a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was popularised in the 1960 with the release of Letraset sheets containing
               Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
               of Lorem Ipsum.</p>
               <div className = 'blog-read-more-btn-div'>
                <button className = 'blog-read-more-btn'>READ MORE</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestFromOurBlog;
