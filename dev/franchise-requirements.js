import React from 'react';
import MediaQuery from 'react-responsive';

class FranchiseRequirements extends React.Component{
  render(){
      return(
        <div className = 'container-fluid franchiseRequirementsContainer'>
          <div className = 'row linqAdvantagesRow'>
            <div className = 'col-md-12 '>
              <h3 className = 'linqAdvantages franchiseRequirementsHeading'>Franchise Requirements</h3>
            </div>
          </div>
          <div className = 'row'>
            <div className = 'col-md-offset-2 col-md-4 col-sm-6 '>
              <div className = 'franchiseReqDiv'>
                <span className="icon">
  							    <img src = './images/linq_advan111.svg' className = 'img-responsive franchiseReqImg'></img>
  						  </span>
                <p>An investment of INR 2 Lakhs to get the store up and running. The investment may vary from store to store based on demographics.</p>
              </div>
            </div>
            <div className = 'col-md-4 col-sm-6 '>
              <div className = 'franchiseReqDiv'>
                <span className="icon">
                  <img src = './images/linq_advan222.svg' className = 'img-responsive franchiseReqImg'></img>
                </span>
                <p>A minimum of 150 square feet (up to 300square feet) in a business favourable locality.</p>
              </div>
            </div>
          </div>
          <div className = 'row'>
            <div className = 'col-md-offset-2 col-md-4 col-sm-6 '>
              <div className = 'franchiseReqDiv'>
                <span className="icon">
                  <img src = './images/linq_advan333.svg' className = 'img-responsive franchiseReqImg'></img>
                </span>
                <p>Passionate and self-driven individuals with an essential knowledge of the internet.</p>
              </div>
            </div>
            <div className = 'col-md-4 col-sm-6 '>
              <div className = 'franchiseReqDiv'>
                <span className="icon">
                  <img src = './images/linq_advan444.svg' className = 'img-responsive franchiseReqImg'></img>
                </span>
                <p>Commitment to personally manage the day-day operations at LinQ store and be able to deliver an exceptional customer experience.</p>
              </div>
            </div>
          </div>
        </div>

      );
  }
}

export default FranchiseRequirements;
