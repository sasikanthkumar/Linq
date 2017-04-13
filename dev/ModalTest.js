import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import FormOpenStore from './form-open-store';


class ModalTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isShowingModal: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  handleClick(){
    this.setState({isShowingModal: true})
  }

  handleClose(){
    this.setState({isShowingModal: false})
  }

  render() {
    return
    /**
    <div onClick={this.handleClick}>
        <h1>Clcik</h1>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose} className = 'modalContainer'>
          <ModalDialog onClose={this.handleClose}>
            <FormOpenStore/>
          </ModalDialog>
        </ModalContainer>
      }
    </div>;
    **/(
    <div className="container">
      <h2>Modal Example</h2>
      <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">

          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Modal Header</h4>
            </div>
            <div className="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default ModalTest;
