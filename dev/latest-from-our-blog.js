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
              <a href = {item.url} target="_blank"><button className = 'blog-read-more-btn'>READ MORE</button></a>
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
        </div>
        <div className = "row continueToBlogRow">
          <a href = "http://linqstore.blogspot.in/" target = "_blank" >Continue to our blog</a>
        </div>
      </div>
    );
  }
}

export default LatestFromOurBlog;
