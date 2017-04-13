import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';
// Be sure to include styles at some point, probably during your bootstrapping
const DATA = require('./data/products');
import MediaQuery from 'react-responsive';

import DatePicker from 'react-mobile-datepicker';

import Calendar from 'react-input-calendar';
var axios = require('axios');

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;

class FormPartnerWithUs extends React.Component{

  constructor(props) {
    super(props);
    this.state = {nameOfCompany: '', whichProducts: '',emailAddress:'', radioSelectedOption: '', startDateOfSelling: '', mobileNumber:'',
    nameOfCompanyError: false,
    whichProductsError: false,
    emailAddressError: false,
    startDateOfSellingError: false,
    mobileNumberError: false,
    hearAboutUsError: false,
    submitButtonStatus:'Submit',
    showThankUMsg:false,

    };
    this.handleChangeNameOfCompany = this.handleChangeNameOfCompany.bind(this);
    this.handleChangeWhichProducts = this.handleChangeWhichProducts.bind(this);
    this.handleChangeEmailAddress = this.handleChangeEmailAddress.bind(this);
    this.handleChangeMobileNumber = this.handleChangeMobileNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleChangeStartDateOfSelling = this.handleChangeStartDateOfSelling.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleFormSubmit(){
    console.log(emailPattern.test(this.state.emailAddress));
    if (this.state.nameOfCompany == '') {
      this.setState({nameOfCompanyError: true});
    }
    if (this.state.whichProducts == '') {
      this.setState({whichProductsError: true});
    }
    if (this.state.emailAddress == '' || !emailPattern.test(this.state.emailAddress)) {
      this.setState({emailAddressError: true});
    }

    if (this.state.radioSelectedOption == '') {
      this.setState({hearAboutUsError: true});
    }
    if (this.state.mobileNumber == '' || this.state.mobileNumber.length<10) {
      this.setState({mobileNumberError: true});
    }
    if (this.state.startDateOfSelling == '') {
      this.setState({startDateOfSellingError: true});
    }


    if(!(this.state.nameOfCompany == '') &&
    !(this.state.whichProducts == '') &&
    !(this.state.emailAddress == '' || !emailPattern.test(this.state.emailAddress)) &&
    !(this.state.radioSelectedOption == '') &&
    !(this.state.mobileNumber == '' || this.state.mobileNumber.length<10) &&
    !(this.state.startDateOfSelling == '')){
      this.setState({submitButtonStatus:'Submitting'});
      var that = this;
      axios.get('https://script.google.com/macros/s/AKfycbwrxvv0Fw4SHnSuR-dEUrzC8XghpkSdju_TyL1BdmsO7cq5HV4/exec', {
        params: {
          nameOfCompany: this.state.nameOfCompany,
          whichProducts: this.state.whichProducts,
          emailAddress:this.state.emailAddress,
          howDidYouHearAboutUs:this.state.radioSelectedOption,
          mobileNumber:this.state.mobileNumber,
          startDateOfSelling:this.state.startDateOfSelling
        }
      })
      .then(function (response) {
        console.log(response.data);
        that.setState({
          nameOfCompany: '',
          whichProducts: '',
          emailAddress:'',
          radioSelectedOption: '',
          startDateOfSelling: '',
          mobileNumber:'',
          nameOfCompanyError: false,
          whichProductsError: false,
          emailAddressError: false,
          lastNameError: false,
          startDateOfSellingError: false,
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
      console.log(this.state.nameOfCompany);
      console.log(this.state.whichProducts);
      console.log(this.state.emailAddress);
      console.log(this.state.radioSelectedOption);
      console.log(this.state.mobileNumber );
      console.log(this.state.startDateOfSelling);

    }
  }

  handleChangeWhichProducts(newValue){
    this.setState({whichProducts: newValue});
  }

  handleOptionChange(changeEvent) {
    this.setState({
      radioSelectedOption: changeEvent.target.value
    });
  }


  handleChangeNameOfCompany(event) {
    this.setState({nameOfCompany: event.target.value});
  }

  handleChangeEmailAddress(event){
    this.setState({emailAddress: event.target.value});
  }

  handleChangeStartDateOfSelling(event){
    this.setState({startDateOfSelling: event.target.value});
  }

  handleChangeMobileNumber(event){
    if ((event.target.value >0 || event.target.value == '') && (event.target.value.length <= 10)) {
      this.setState({mobileNumber: event.target.value});
    }
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.whichProducts);
    event.preventDefault();
  }

  render(){
    var options = DATA.PRODUCTS;
    return(
      <div className = 'container-fluid openAStoreFormContainer partnerWithUsFormContainer'>
        <div className = 'row'>

          <div className = 'col-md-offset-2 col-md-8 openAStoreFormInnerContainer'>
            <h2 className = 'openAStoreFormHeading'>Partner with us today </h2>
            <p className = 'openAStoreFormText'>Fill up this short form to partner with us!<br></br><span className = 'starRequiredSpan'>*Required</span></p>
            <form onSubmit={this.handleSubmit} className = 'openAStoreForm'>
              <div className ='row'>

                <div className = 'col-md-offset-2 col-md-10 col-sm-12'>
                  <label>
                    Name of Your Company:<span className = 'reqiuredFieldStar'>*</span>
                    <input type="text" value={this.state.nameOfCompany} onChange={this.handleChangeNameOfCompany} />
                    {this.state.nameOfCompanyError && (
                        <span className = 'formErrorSpan'>This is a required question</span>
                    )}
                  </label>

                </div>
                <div className = 'col-md-offset-2 col-md-10 col-sm-12'>
                  <label>
                    Which products or services do you wish to sell?<span className = 'reqiuredFieldStar'>*</span>
                    <VirtualizedSelect ref="citySelect"
  					         options={options}
  					         simpleValue
  				           clearable
  					         name="select-city"
                     className = 'virtuSelect'
  					         value={this.state.whichProducts}
  					         onChange={this.handleChangeWhichProducts}
  					         searchable
  					         labelKey="name"
  					         valueKey="name"
                     />
                     {this.state.whichProductsError && (
                         <span className = 'formErrorSpan'>This is a required question</span>
                     )}
                  </label>
                </div>
              </div>

              <div className = 'row'>
                <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                  <label>
                    Official Email Address:<span className = 'reqiuredFieldStar'>*</span>
                    <input type="email" value={this.state.emailAddress} onChange={this.handleChangeEmailAddress} />
                    {this.state.emailAddressError && (
                        <span className = 'formErrorSpan'>This is a required question</span>
                    )}
                  </label>
                </div>
              </div>

              <div className = 'row'>


                <MediaQuery query='(min-width: 1224px)'>

                <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                  <label className = 'whenCanWeStartLabel'>
                    When can we start selling your products/services?<span className = 'reqiuredFieldStar'>*</span>

                  </label>
                  <input type="date" value={this.state.startDateOfSelling} onChange = {this.handleChangeStartDateOfSelling}  className = 'dateInputField'/>
                  {this.state.startDateOfSellingError && (
                      <span className = 'formErrorSpan'>This is a required question</span>
                  )}
                </div>

                <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                  <label className = 'mobileNumberLabel'>
                    Official Mobile Number:<span className = 'reqiuredFieldStar'>*</span>
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
                    When can we start selling your products/services?<span className = 'reqiuredFieldStar'>*</span>
                  </label>
                </div>
                <input type="date" value={this.state.startDateOfSelling}  onChange = {this.handleChangeStartDateOfSelling} className = 'dateInputField dateInputFieldMobile'/>
                {this.state.startDateOfSellingError && (
                    <span className = 'formErrorSpan'>This is a required question</span>
                )}
                <div className ='col-md-offset-2 col-md-10 col-sm-12'>
                  <label className = 'mobileNumberLabel mobileNumberLabelMobile'>
                    Official Mobile Number:<span className = 'reqiuredFieldStar'>*</span>
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

export default FormPartnerWithUs;
