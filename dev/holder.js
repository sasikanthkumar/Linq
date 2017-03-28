import React from 'react';
import NavBar from './nav-bar';
import WhatIsLinq from './what-is-linq';
import OpenAStore from './open-a-store';

class Holder extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        <WhatIsLinq />
      </div>
    );
  }
}

export default Holder;
