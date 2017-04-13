import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ModalTest2Modal from './ModalTest2Modal';
import FormOpenStore from './form-open-store';

class ModalTest2 extends React.Component{

    constructor(props){
      super(props);
      this.state = { isModalOpen: false };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);

    }


    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    render() {
        return (
          <div className="ModalTest2App">
            <h1>App</h1>
            <button onClick={this.openModal}>Open modal</button>

            <ModalTest2Modal isOpen={this.state.isModalOpen}
                   transitionName="modal-anim">
              <FormOpenStore/>
              <button onClick={this.closeModal} className = 'modalCloseBtn'></button>
            </ModalTest2Modal>

          </div>
        );
    }
}

export default ModalTest2;
