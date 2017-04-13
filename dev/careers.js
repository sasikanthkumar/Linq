import React from 'react';

class Careers extends React.Component{
  render(){
    return(
      <div className = 'container-fluid careersContainer'>
        <div className = 'row'>
          <div className = 'col-md-offset-2 col-md-8'>
            <h1 className = 'careersHeading'> Careers </h1>
            <p className = 'weAreLinqed'>We are LinQ-ed</p>
            <p className = 'careersText'>Be a part of a fast-paced and quirky team.
              At LinQ we are building a robust, diverse team of creative individuals with a vigour to succeed. We are dedicated to constant learning and together as a team we work hard, we brainstorm non-stop, exchange banters and predominantly have fun doing it all. We embrace innovation at various levels to keep the competitive spirit going and fundamentally support the interests of one another to bring out the best in you, all this while working alongside people whom we respect and admire. Hard work, harmony, help and humour are the values we live by as a company.
            </p>
            <p className = 'careersText'>If you think you are fit for a fast growing startup then write to us at <span><a href="mailto:hello@linq.store">hello@linq.store</a></span>.</p>
          </div>
        </div>
      </div>
    );
  }
}


export default Careers;
