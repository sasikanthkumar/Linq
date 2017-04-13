import React from 'react';

class FormCoverImage extends React.Component{

  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div>
        <div className= 'formCoverImage'>
          <h1 className = 'coverHeading'>{this.props.heading}</h1>
        </div>

      </div>
    )
  }
}

export default FormCoverImage;
