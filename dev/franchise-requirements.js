import React from 'react';
import MediaQuery from 'react-responsive';

class FranchiseRequirements extends React.Component{
  render(){
      return(
        <div className = 'container-fluid franchiseRequirementsContainer'>
          <div className = 'row linqAdvantagesRow'>
            <div className = 'col-md-12 '>
              <h3 className = 'linqAdvantages franchiseRequirementsHeading animated'>Franchise Requirements</h3>
            </div>
          </div>
          <div className = 'row'>
            <div className = 'col-md-offset-2 col-md-4 col-sm-6 '>
              <div className = 'franchiseReqDiv franchiseReqDivFir draw meet'>
                <span className="icon franchiseReqAnim animated">
  							    <img src = './images/Investment.svg' className = 'franchiseReqAnim animated img-responsive franchiseReqImg'></img>
  						  </span>
                <p className ='franchiseReqAnim animated'>An investment of INR 2 Lakhs to get the store up and running. The investment may vary from store to store based on demographics.</p>
              </div>
            </div>
            <div className = 'col-md-4 col-sm-6 '>
              <div className = 'franchiseReqDiv franchiseReqDivSec draw meet'>
                <span className="icon franchiseReqAnim animated">
                  <img src = './images/Location.svg' className = 'franchiseReqAnim animated img-responsive franchiseReqImg'></img>
                </span>
                <p className = 'franchiseReqAnim animated'>A minimum of 150 square feet (up to 300square feet) in a business favourable locality.</p>
              </div>
            </div>
          </div>
          <div className = 'row franchiseReqRowSec'>
            <div className = 'col-md-offset-2 col-md-4 col-sm-6 '>
              <div className = 'franchiseReqDiv franchiseReqDivFir draw meet'>
                <span className="icon franchiseReqAnim animated">
                  <img src = './images/computerKnowledge.svg' className = 'franchiseReqAnim animated img-responsive franchiseReqImg'></img>
                </span>
                <p className = 'franchiseReqAnim animated'>Passionate and self-driven individuals with an essential knowledge of the internet.</p>
              </div>
            </div>
            <div className = 'col-md-4 col-sm-6 '>
              <div className = 'franchiseReqDiv franchiseReqDivSec draw meet'>
                <span className="icon franchiseReqAnim animated">
                  <img src = './images/Manager.svg' className = 'franchiseReqAnim animated img-responsive franchiseReqImg'></img>
                </span>
                <p className = 'franchiseReqAnim animated'>Commitment to personally manage the day-day operations at LinQ store and be able to deliver an exceptional customer experience.</p>
              </div>
            </div>
          </div>
        </div>

      );
  }
}

export default FranchiseRequirements;
