import React from 'react';
import MediaQuery from 'react-responsive';

class FranchiseRequirements extends React.Component{
  render(){
      return(
        <div className = 'container-fluid franchiseRequirementsContainer'>

        <MediaQuery query='(min-width: 1224px)'>
          <section className = 'franchise-requirements-section'>
            <div className="franchise-requirements-heading-block">
              <h3 className = 'fadeInUp animated'>Franchise Requirements</h3>
              {/*
              <hr></hr>

              <span className="margin-top-20 fadeInUp animated">The weather started getting rough  the tiny ship was not for the courage of the fearless crew the Minnow would be lost. the Minnow always wanted to have a neighbor just like always wanted to live in a neighborhood with you. </span>
              */}
            </div>
            <div className = 'franchise-requirements-elements'>
              <div className ='row franchise-requirement'>
                <div className = 'col-md-6 col-md-offset-3'>
                  <div className = 'row'>
                    <div className = 'col-md-1 '>
                      <div className = 'franchise-requirements-number franchise-requirements-number-1'>1</div>
                    </div>
                    <div className = 'col-md-offset-1 col-md-7 '>
                      <div className = 'franchise-requirements-detail'>
                        {/*<h4>unique elements</h4>*/}
                        <p>An investment of INR 2 Lakhs to get the store up and running. The investment may vary from store to store based on demographics.</p>
                      </div>
                    </div>
                    <div className = 'col-md-3 franchise-requirements-img-div'>
                      <img className="img-responsive" src="./images/Investment.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div className ='row franchise-requirement'>
                <div className = 'col-md-6 col-md-offset-3'>
                  <div className = 'row '>
                    <div className = 'col-md-1'>
                      <div className = 'franchise-requirements-number franchise-requirements-number-2'>2</div>
                    </div>
                    <div className = 'col-md-offset-1 col-md-7'>
                      <div className = 'franchise-requirements-detail'>
                        {/*<h4>unique elements</h4>*/}
                        <p>A minimum of 150 square feet (up to 300square feet) in a business favourable locality.</p>
                      </div>
                    </div>
                    <div className = 'col-md-3 franchise-requirements-img-div'>
                      <img className="img-responsive" src="./images/Location.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div className ='row franchise-requirement'>
                <div className = 'col-md-6 col-md-offset-3'>
                  <div className = 'row '>
                    <div className = 'col-md-1'>
                      <div className = 'franchise-requirements-number franchise-requirements-number-3'>3</div>
                    </div>
                    <div className = 'col-md-offset-1 col-md-7'>
                      <div className = 'franchise-requirements-detail'>
                        {/*<h4>unique elements</h4>*/}
                        <p>Passionate and self-driven individuals with an essential knowledge of the internet.</p>
                      </div>
                    </div>
                    <div className = 'col-md-3 franchise-requirements-img-div'>
                      <img className="img-responsive" src="./images/computerKnowledge.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div className ='row franchise-requirement'>
                <div className = 'col-md-6 col-md-offset-3'>
                  <div className = 'row '>
                    <div className = 'col-md-1'>
                      <div className = 'franchise-requirements-number franchise-requirements-number-4'>4</div>
                    </div>
                    <div className = 'col-md-offset-1 col-md-7'>
                      <div className = 'franchise-requirements-detail'>
                        {/*<h4>unique elements</h4>*/}
                        <p>Commitment to personally manage the day-day operations at LinQ store and be able to deliver an exceptional customer experience.</p>
                      </div>
                    </div>
                    <div className = 'col-md-3 franchise-requirements-img-div'>
                      <img className="img-responsive" src="./images/Manger.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </MediaQuery>
        <MediaQuery query='(max-width: 1224px)'>
        <section className = 'franchise-requirements-section'>
          <div className="franchise-requirements-heading-block">
            <h3 className = 'fadeInUp animated'>Franchise Requirements</h3>
            {/*
            <hr></hr>
            <span className="margin-top-20 fadeInUp animated">The weather started getting rough  the tiny ship was not for the courage of the fearless crew the Minnow would be lost. the Minnow always wanted to have a neighbor just like always wanted to live in a neighborhood with you. </span>
            */}
          </div>
          <div className = 'franchise-requirements-elements'>
            <div className ='row franchise-requirement'>
              <div className = 'col-md-6 col-md-offset-3'>
                <img className="img-responsive franchise-requirements-small-screen-img" src="./images/Investment.png" alt=""/>
                <div className = 'franchise-requirements-detail franchise-requirements-detail-small-screen'>
                  {/*<h4>unique elements</h4>*/}
                  <p>An investment of INR 2 Lakhs to get the store up and running. The investment may vary from store to store based on demographics.</p>
                </div>
              </div>
            </div>
            <div className ='row franchise-requirement'>
              <div className = 'col-md-6 col-md-offset-3'>
                <img className="img-responsive franchise-requirements-small-screen-img" src="./images/Location.png" alt=""/>
                <div className = 'franchise-requirements-detail franchise-requirements-detail-small-screen'>
                  {/*<h4>unique elements</h4>*/}
                  <p>A minimum of 150 square feet (up to 300square feet) in a business favourable locality.</p>
                </div>
              </div>
            </div>
            <div className ='row franchise-requirement'>
              <div className = 'col-md-6 col-md-offset-3'>
                <img className="img-responsive franchise-requirements-small-screen-img" src="./images/computerKnowledge.png" alt=""/>
                <div className = 'franchise-requirements-detail franchise-requirements-detail-small-screen'>
                  {/*<h4>unique elements</h4>*/}
                  <p>Passionate and self-driven individuals with an essential knowledge of the internet.</p>
                </div>
              </div>
            </div>
            <div className ='row franchise-requirement'>
              <div className = 'col-md-6 col-md-offset-3'>
                <img className="img-responsive franchise-requirements-small-screen-img" src="./images/Manger.png" alt=""/>
                <div className = 'franchise-requirements-detail franchise-requirements-detail-small-screen'>
                  {/*<h4>unique elements</h4>*/}
                  <p>Commitment to personally manage the day-day operations at LinQ store and be able to deliver an exceptional customer experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </MediaQuery>
        </div>

      );
  }
}

export default FranchiseRequirements;
