import React from 'react';
import axios from 'axios';


class LatestFromOurBlog extends React.Component{
  constructor(props){
    super(props);
    this.state = {posts:[]};
  }

  componentDidMount(){
    this.getBlogPosts();
  }

  getBlogPosts(){
    var that = this;
    axios.get('https://www.googleapis.com/blogger/v3/blogs/5728913959294910709/posts?key=AIzaSyDOVpARXrr8V33i8iE_UmaWILmzMMAZhXg&fetchImages=true&fetchBody=true', {})
    .then(function (response) {
      var postsArray = response.data.items;
      if(postsArray.length >=3){
        postsArray = postsArray.slice(0,3);
      }
      that.setState({ posts: postsArray });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    const postsComp = this.state.posts.map((item, i) => {
      console.log(item.images[0].url);
      return (
        <div className = 'col-md-4' key = {i}>
          <div className="blog-card">
            <img src = {item.images[0].url}></img>
            <h3 className  = 'blog-card-heading'>{item.title}</h3>
            {/*
            <p className = 'blog-card-text'></p>
            */}
            <div className = 'blog-read-more-btn-div'>
              <button className = 'blog-read-more-btn'><a href = {item.url} target="_blank">READ MORE</a></button>
            </div>
          </div>
        </div>);
    });

    return(
      <div className = 'container-fluid blogContainer'>
        <div className="row">
          <div className="col-md-12">
            <h2 className="whatIsLinqHeading animated zoomIn">Latest From Our Blog</h2>
          </div>
        </div>
        <div className = 'row blogCardsRow'>
          {postsComp}
          {/*
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
          */}
        </div>
      </div>
    );
  }
}

export default LatestFromOurBlog;