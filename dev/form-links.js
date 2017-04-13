import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ModalTest2Modal from './ModalTest2Modal';
import FormOpenStore from './form-open-store';


class FormLinks extends React.Component{
  constructor(props){
    super (props);
    this.state = { isModalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Button click");
  }

  openModal() {
      this.setState({ isModalOpen: true });
  }

  closeModal() {
      this.setState({ isModalOpen: false });
  }

  render(){
    return(
      <div className = 'container-fluid formLinksContainer'>
        <div className="row text-center">
          {/*
          <div className="col-md-offset-1 col-md-6">
            <h3>Do you want to discuss wth us?</h3>
          </div>
          */}
          {/*
          <div className="col-md-12 text-center">
          */}

            <Link to="/open-a-store-form" ><button className = 'form-links-btn' onClick={this.handleClick}> Open A Store </button></Link>

            {/*
            <button className = 'form-links-btn' onClick={this.openModal}> Open A Store </button>
            <ModalTest2Modal isOpen={this.state.isModalOpen}
                   transitionName="modal-anim">
              <FormOpenStore/>
              <button onClick={this.closeModal} className = 'modalCloseBtn'><img src = './images/ic_close_black_18dp_2x.png'></img></button>
            </ModalTest2Modal>
            */}
            {/*<button className = 'form-links-btn' onClick={this.handleClick}> Open A Store </button>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}


export default FormLinks;
