import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ModalTest2Modal extends React.Component{
    render() {
        if(this.props.isOpen){
            return (
              <ReactCSSTransitionGroup
                transitionName={this.props.transitionName}
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                <div className="modalTest2ModalMask">
                  <div className="modalTest2Modal">
                    <div className = 'modalTest2ModalInner'>
                      {this.props.children}
                    </div>
                  </div>
                </div>
              </ReactCSSTransitionGroup>
            );
        } else {
            return <ReactCSSTransitionGroup
                      transitionName={this.props.transitionName}
                      transitionAppear={true}
                      transitionAppearTimeout={1000}
                      transitionEnterTimeout={1000}
                      transitionLeaveTimeout={1000}
                  />;
        }
    }
}

export default ModalTest2Modal;
