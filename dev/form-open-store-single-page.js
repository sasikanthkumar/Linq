import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';
// Be sure to include styles at some point, probably during your bootstrapping
const DATA = require('./data/cities');
import MediaQuery from 'react-responsive';

import DatePicker from 'react-mobile-datepicker';

import Calendar from 'react-input-calendar';
var axios = require('axios');

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
class FormOpenStoreSinglePage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {nameOfTownVillage: '', stateOrUnionTerritory: '',firstName:'', lastName:'', focused: false, radioSelectedOption: '', startDateOfStore: '', mobileNumber:'',
    townVillageError: false,
    stateError: false,
    firstNameError: false,
    lastNameError: false,
    startDateOfStoreError: false,
    mobileNumberError: false,
    hearAboutUsError: false,
    submitButtonStatus:'Submit',
    showThankUMsg: false,
    };
    this.handleChangeNameOfTownVillage = this.handleChangeNameOfTownVillage.bind(this);
    this.handleChangeStateOrUnionTerritory = this.handleChangeStateOrUnionTerritory.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMobileNumber = this.handleChangeMobileNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleChangeStartDateOfStore = this.handleChangeStartDateOfStore.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleFormSubmit(){
    if (this.state.nameOfTownVillage == '') {
      this.setState({townVillageError: true});
    }
    if (this.state.stateOrUnionTerritory == '') {
      this.setState({stateError: true});
    }
    if (this.state.firstName == '') {
      this.setState({firstNameError: true});
    }
    if (this.state.lastName == '') {
      this.setState({lastNameError: true});
    }
    if (this.state.radioSelectedOption == '') {
      this.setState({hearAboutUsError: true});
    }
    if (this.state.mobileNumber == '' || this.state.mobileNumber.length<10) {
      this.setState({mobileNumberError: true});
    }
    if (this.state.startDateOfStore == '') {
      this.setState({startDateOfStoreError: true});
    }


    if(!(this.state.nameOfTownVillage == '') &&
    !(this.state.stateOrUnionTerritory == '') &&
    !(this.state.firstName == '') &&
    !(this.state.lastName == '') &&
    !(this.state.radioSelectedOption == '') &&
    !(this.state.mobileNumber == '' || this.state.mobileNumber.length<10) &&
    !(this.state.startDateOfStore == '')){
      this.setState({submitButtonStatus:'Submitting'});
      var that = this;
      axios.get('https://script.google.com/macros/s/AKfycbz2iMwdmlNURZsN4nVw4Rnem7q73WdJ7TFV6amS7I0wxoWHfjNP/exec', {
        params: {
          nameOfTownOrVillage: this.state.nameOfTownVillage,
          stateOrUnionTerritory: this.state.stateOrUnionTerritory,
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          howDidYouHearAboutUs:this.state.radioSelectedOption,
          mobileNumber:this.state.mobileNumber,
          startDateOfStore:this.state.startDateOfStore
        }
      })
      .then(function (response) {
        console.log(response.data);
        that.setState({
          nameOfTownVillage: '',
          stateOrUnionTerritory: '',
          firstName:'',
          lastName:'',
          focused: false,
          radioSelectedOption: '',
          startDateOfStore: '',
          mobileNumber:'',
          townVillageError: false,
          stateError: false,
          firstNameError: false,
          lastNameError: false,
          startDateOfStoreError: false,
          mobileNumberError: false,
          hearAboutUsError: false,
          submitButtonStatus:'Submit',
          showThankUMsg:true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log("Submitting form");
      console.log(this.state.nameOfTownVillage);
      console.log(this.state.stateOrUnionTerritory);
      console.log(this.state.firstName);
      console.log(this.state.lastName);
      console.log(this.state.radioSelectedOption);
      console.log(this.state.mobileNumber );
      console.log(this.state.startDateOfStore);

    }
  }

  handleChangeStateOrUnionTerritory(newValue){
    this.setState({stateOrUnionTerritory: newValue});
  }

  handleOptionChange(changeEvent) {
    this.setState({
      radioSelectedOption: changeEvent.target.value
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

  handleChangeStartDateOfStore(event){
    this.setState({startDateOfStore: event.target.value});
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

          <div className = 'col-md-offset-2 col-md-8 openAStoreFormInnerContainer'>
            <h2 className = 'openAStoreFormHeading'>Open a LinQ Store Today</h2>
            <p className = 'openAStoreFormText'>Fill up this short form to get started!<br></br><span className = 'starRequiredSpan'>*Required</span></p>
            <form onSubmit={this.handleSubmit} className = 'openAStoreForm'>
              <div className ='row'>

                <div className = 'col-md-offset-2 col-md-10 col-sm-12'>
                  <label>
                    Name of Town/Village:<span className = 'reqiuredFieldStar'>*</span>
                    <input type="text" value={this.state.nameOfTownVillage} onChange={this.handleChangeNameOfTownVillage} />
                    {this.state.townVillageError && (
                        <span className = 'formErrorSpan'>This is a required question</span>
                    )}
                  </label>

                </div>
                <div className = 'col-md-offset-2 col-md-10 col-sm-12'>
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
                     {this.state.stateError && (
                         <span className = 'formErrorSpan'>This is a required question</span>
                     )}
                  </label>
                </div>
              </div>

              <div className = 'row'>
                <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                  <label>
                    First Name:<span className = 'reqiuredFieldStar'>*</span>
                    <input type="text" value={this.state.firstName} onChange={this.handleChangeFirstName} />
                    {this.state.firstNameError && (
                        <span className = 'formErrorSpan'>This is a required question</span>
                    )}
                  </label>
                </div>
                <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                  <label>
                    Last Name:<span className = 'reqiuredFieldStar'>*</span>
                    <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} />
                    {this.state.lastNameError && (
                        <span className = 'formErrorSpan'>This is a required question</span>
                    )}
                  </label>
                </div>
              </div>

              <div className = 'row'>


                <MediaQuery query='(min-width: 1224px)'>

                <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                  <label className = 'whenCanWeStartLabel'>
                    When can we start the store?<span className = 'reqiuredFieldStar'>*</span>

                  </label>
                  <input type="date" value={this.state.startDateOfStore} onChange = {this.handleChangeStartDateOfStore}  className = 'dateInputField'/>
                  {this.state.startDateOfStoreError && (
                      <span className = 'formErrorSpan'>This is a required question</span>
                  )}
                </div>

                <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                  <label className = 'mobileNumberLabel'>
                    Mobile Number:<span className = 'reqiuredFieldStar'>*</span>
                  <input type="text" value={this.state.mobileNumber} onChange={this.handleChangeMobileNumber} />
                  {this.state.mobileNumberError && (
                      <span className = 'formErrorSpan'>This is a required question</span>
                  )}
                </label>
              </div>


                </MediaQuery >
                <MediaQuery query='(max-width: 1224px)'>

                <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                  <label className = 'whenCanWeStartLabel'>
                    When can we start the store?<span className = 'reqiuredFieldStar'>*</span>

                  </label>
                </div>
                <input type="date" value={this.state.startDateOfStore}  onChange = {this.handleChangeStartDateOfStore} className = 'dateInputField dateInputFieldMobile'/>
                {this.state.startDateOfStoreError && (
                    <span className = 'formErrorSpan'>This is a required question</span>
                )}
                <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                  <label className = 'mobileNumberLabel mobileNumberLabelMobile'>
                    Mobile Number:<span className = 'reqiuredFieldStar'>*</span>

                </label>
                </div>
                <input type="text" value={this.state.mobileNumber} onChange={this.handleChangeMobileNumber}  className = 'mobileNumberInputFieldMobile'/>
                {this.state.mobileNumberError && (
                    <span className = 'formErrorSpan'>This is a required question</span>
                )}
                </MediaQuery>




                <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                  <label className  ='radioLabel'>
                    How did you hear about us?<span className = 'reqiuredFieldStar'>*</span>
                  </label>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Friends/Family" checked={this.state.radioSelectedOption == 'Friends/Family'} onChange={this.handleOptionChange}/>
                      Friends/Family
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Another LinQ Store Owner" checked={this.state.radioSelectedOption == 'Another LinQ Store Owner' } onChange={this.handleOptionChange}/>
                      Another LinQ Store Owner
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Online" checked={this.state.radioSelectedOption == 'Online' } onChange={this.handleOptionChange}/>
                      Online
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Facebook" checked={this.state.radioSelectedOption == 'Facebook' } onChange={this.handleOptionChange}/>
                      Facebook
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Other" checked={this.state.radioSelectedOption == 'Other' } onChange={this.handleOptionChange}/>
                      Other
                    </label>

                    {this.state.hearAboutUsError && (
                        <span className = 'formErrorSpan'>This is a required question</span>
                    )}

                  </div>


                </div>
              </div>

              <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                <button className = 'form-submit-btn' type="submit" value="Submit" onClick = {this.handleFormSubmit}> {this.state.submitButtonStatus} </button>

                {this.state.showThankUMsg && (
                    <span className = 'formThankUMsg'>Your response has been saved. Thank You.</span>
                )}
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormOpenStoreSinglePage;
