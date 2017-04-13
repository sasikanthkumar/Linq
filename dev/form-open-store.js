import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';
// Be sure to include styles at some point, probably during your bootstrapping
const DATA = require('./data/cities');

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
class FormOpenStore extends React.Component{

  constructor(props) {
    super(props);
    this.state = {nameOfTownVillage: '', firstName:'', lastName:'', focused: false, selectedOption: ''};
    this.handleChangeNameOfTownVillage = this.handleChangeNameOfTownVillage.bind(this);
    this.handleChangeStateOrUnionTerritory = this.handleChangeStateOrUnionTerritory.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMobileNumber = this.handleChangeMobileNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

  }

  handleChangeStateOrUnionTerritory(newValue){
    this.setState({stateOrUnionTerritory: newValue});
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }


  handleChangeNameOfTownVillage(event) {
    this.setState({nameOfTownVillage: event.target.value});
  }

  handleChangeFirstName(event){
    this.setState({firstName: event.target.value});
  }

  handleChangeLastName(event){
    this.setState({lastName: event.target.value});
  }

  handleChangeMobileNumber(event){
    if ((event.target.value >0 || event.target.value == '') && (event.target.value.length <= 10)) {
      this.setState({mobileNumber: event.target.value});
    }
  }




  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.stateOrUnionTerritory);
    event.preventDefault();
  }

  render(){
    var options = DATA.CITIES;
    return(
      <div className = 'container-fluid openAStoreFormContainer'>
        <div className = 'row'>
          <div className = 'col-md-12 openAStoreFormInnerContainer'>
            <h2 className = 'openAStoreFormHeading'>Open a LinQ Store Today</h2>
            <p className = 'openAStoreFormText'>Fill up this short form to get started!<br></br><span className = 'starRequiredSpan'>*Required</span></p>
            <form onSubmit={this.handleSubmit} className = 'openAStoreForm'>
              <div className ='row'>
                <div className = 'col-md-6'>
                  <label>
                    Name of Town/Village:<span className = 'reqiuredFieldStar'>*</span>
                    <input type="text" value={this.state.nameOfTownVillage} onChange={this.handleChangeNameOfTownVillage} />
                  </label>
                </div>
                <div className = 'col-md-6'>
                  <label>
                    State or Union Territory:<span className = 'reqiuredFieldStar'>*</span>
                    <VirtualizedSelect ref="citySelect"
  					         options={options}
  					         simpleValue
  				           clearable
  					         name="select-city"
                     className = 'virtuSelect'
  					         value={this.state.stateOrUnionTerritory}
  					         onChange={this.handleChangeStateOrUnionTerritory}
  					         searchable
  					         labelKey="name"
  					         valueKey="name"
                     />
                  </label>
                </div>
              </div>

              <div className = 'row'>
                <div className =' col-md-6'>
                  <label>
                    First Name:<span className = 'reqiuredFieldStar'>*</span>
                    <input type="text" value={this.state.firstName} onChange={this.handleChangeFirstName} />
                  </label>
                </div>
                <div className ='col-md-6'>
                  <label>
                    Last Name:<span className = 'reqiuredFieldStar'>*</span>
                    <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} />
                  </label>
                </div>
              </div>

              <div className = 'row'>
                <div className ='col-md-6'>
                  <label>
                    When can we start the store?<span className = 'reqiuredFieldStar'>*</span>
                    <SingleDatePicker date={this.state.date}
                                    onDateChange={date => this.setState({ date })}
                                    focused={this.state.focused}
                                    onFocusChange={({ focused }) => this.setState({ focused })}
                    />
                  </label>
                </div>
                <div className ='col-md-6'>
                  <label >
                    Mobile Number:<span className = 'reqiuredFieldStar'>*</span>
                    <input type="text" value={this.state.mobileNumber} onChange={this.handleChangeMobileNumber} />
                  </label>
                </div>
                <div className ='col-md-12'>
                  <label className  ='radioLabel'>
                    How did you hear about us?<span className = 'reqiuredFieldStar'>*</span>
                  </label>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Friends/Family" checked={this.state.selectedOption == 'Friends/Family'} onChange={this.handleOptionChange}/>
                      Friends/Family
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Another LinQ Store Owner" checked={this.state.selectedOption == 'Another LinQ Store Owner' } onChange={this.handleOptionChange}/>
                      Another LinQ Store Owner
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Online" checked={this.state.selectedOption == 'Online' } onChange={this.handleOptionChange}/>
                      Online
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Facebook" checked={this.state.selectedOption == 'Facebook' } onChange={this.handleOptionChange}/>
                      Facebook
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Other" checked={this.state.selectedOption == 'Other' } onChange={this.handleOptionChange}/>
                      Other
                    </label>
                  </div>
                </div>
              </div>

              <button className = 'form-submit-btn' type="submit" value="Submit"> Submit </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormOpenStore;
