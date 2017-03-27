import React from 'react';

class HelloWorld extends React.Component {
  render(){
    return <h1>Hello {this.props.phrase}</h1>
  }
}


export default HelloWorld;
