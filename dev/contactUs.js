import React from 'react';
import NavBarForms from './nav-bar-forms';
import Footer from './footer';
var axios = require('axios');

const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;


class ContactUs extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      fname:'',
      lname:'',
      email:'',
      message:'',
      subject:'',
      fnameError: false,
      lnameError: false,
      subjectNameError: false,
      emailError: false,
      messageError: false,
      submitButtonStatus:'Send Message'
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChangeFname = this.handleChangeFname.bind(this);
    this.handleChangeLname = this.handleChangeLname.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }


  componentDidMount(){
    window.scrollTo(0,0);
  }

  handleFormSubmit(){
    if (this.state.fname == '') {
      this.setState({fnameError: true});
    }
    if (this.state.lname == '') {
      this.setState({lnameError: true});
    }
    if (this.state.subject == '') {
      this.setState({subjectError: true});
    }
    if (this.state.message == '') {
      this.setState({messageError: true});
    }
    if (this.state.email == '' || !emailPattern.test(this.state.email)) {
      this.setState({emailError: true});
    }

    if(!(this.state.fname == '') &&
    !(this.state.lname == '') &&
    !(this.state.message == '') &&
    !(this.state.subject == '') &&
    !(this.state.email == '' || !emailPattern.test(this.state.email))){
      this.setState({submitButtonStatus:'Submitting'});


      var that = this;
      axios.get('https://script.google.com/macros/s/AKfycbyNlwdG0Ouyx4R8VHrDjGFLXoTbTCg0XIKdOWnqBxI7jBCj0Z4g/exec', {
        params: {
          fname: this.state.fname,
          lname: this.state.lname,
          email:this.state.email,
          subject:this.state.subject,
          message:this.state.message,
        }
      })
      .then(function (response) {
        console.log(response.data);
        that.setState({
          fname:'',
          lname:'',
          email:'',
          message:'',
          subject:'',
          fnameError: false,
          lnameError: false,
          subjectNameError: false,
          emailError: false,
          messageError: false,
          submitButtonStatus:'Send Message'
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  handleChangeFname(event){
    this.setState({fname: event.target.value});
  }

  handleChangeLname(event){
    this.setState({lname: event.target.value});
  }

  handleChangeEmail(event){
    this.setState({email: event.target.value});
  }

  handleChangeSubject(event){
    this.setState({subject: event.target.value});
  }

  handleChangeMessage(event){
    this.setState({message: event.target.value});
  }


  render(){
    return(
      <div>
        <NavBarForms />
        <header id="fh5co-header" className="fh5co-cover fh5co-cover-sm" role="banner"  data-stellar-background-ratio="0.5">
          <div className="overlay">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-7 text-left">
                <div className="display-t">
                  <div className="display-tc animate-box fadeInUp animated-fast" data-animate-effect="fadeInUp">
                    <h1 className="mb30">Contact Us</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="fh5co-contact">
		      <div className="container">
			       <div className="row">
				        <div className="col-md-5 col-md-push-1 animate-box fadeInUp animated-fast">
                  <div className="fh5co-contact-info">
						          <h3>Contact Information</h3>
						          <ul>
							            <li className="address">Aparna Cyberzon U310 Serilingampally,<br></br>Near Citizens Hospital,<br></br>Hyderabad, Telangana 500019</li>
							            {/*<li className="phone"><a href="tel://04023352708">040 2335 2708</a></li>*/}
							            <li className="email"><a href="mailto:hello@linq.store">hello@linq.store</a></li>
                          {/*
							            <li className="url"><a href="http://gettemplates.co">gettemplates.co</a></li>
                          */}
						          </ul>
					        </div>
                </div>
				        <div className="col-md-6 animate-box fadeInUp animated-fast">
					          <h3 className = 'getInTouch' >Get In Touch <br></br><span className = 'starRequiredSpan'>*Required</span></h3>
					          <form action="#">
						           <div className="row form-group">
							             <div className="col-md-6">
								               <label >First Name<span className = 'reqiuredFieldStar'>*</span></label>
								               <input value={this.state.fname}  onChange = {this.handleChangeFname} type="text" id="fname" className="form-control" placeholder="Your firstname"/>
                               {this.state.fnameError && (
                                   <span className = 'formErrorSpan'>This is a required question</span>
                               )}
							             </div>
							             <div className="col-md-6">
								               <label >Last Name<span className = 'reqiuredFieldStar'>*</span></label>
								               <input value={this.state.lname}  onChange = {this.handleChangeLname} type="text" id="lname" className="form-control" placeholder="Your lastname" />
                               {this.state.lnameError && (
                                   <span className = 'formErrorSpan'>This is a required question</span>
                               )}
							             </div>
						           </div>
						           <div className="row form-group">
							             <div className="col-md-12">
								               <label >Email<span className = 'reqiuredFieldStar'>*</span></label>
								               <input value={this.state.email} onChange = {this.handleChangeEmail} type="email" id="email" className="form-control" placeholder="Your email address"/>
                               {this.state.emailError && (
                                   <span className = 'formErrorSpan'>This is a required question</span>
                               )}
							             </div>
						           </div>

						           <div className="row form-group">
							           <div className="col-md-12">
								           <label >Subject<span className = 'reqiuredFieldStar'>*</span></label>
								           <input value={this.state.subject}  onChange = {this.handleChangeSubject} type="text" id="subject" className="form-control" placeholder="Your subject of this message"/>
                           {this.state.subjectError && (
                               <span className = 'formErrorSpan'>This is a required question</span>
                           )}
							           </div>
						           </div>

						           <div className="row form-group">
							           <div className="col-md-12">
								           <label >Message<span className = 'reqiuredFieldStar'>*</span></label>
								           <textarea value={this.state.message} onChange = {this.handleChangeMessage} name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us"></textarea>
                           {this.state.messageError && (
                               <span className = 'formErrorSpan'>This is a required question</span>
                           )}
							           </div>
						           </div>

						           <div className="form-group">
							           <input value={this.state.submitButtonStatus} className="btn btn-lg btn-primary contactUs-btn"  onClick = {this.handleFormSubmit}/>
						           </div>
					          </form>
				        </div>
			       </div>
		      </div>
	      </div>
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
