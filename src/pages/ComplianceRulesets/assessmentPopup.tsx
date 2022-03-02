import * as React from 'react';
import { Link } from 'react-router-dom';
import { PLUGIN_BASE_URL } from '../../constants';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class AssessmentPopup extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = (resObj: any) => {
    this.setState({
      modal: !this.state.modal,
      data: resObj,
    });
  };

  render() {
    const state = this.state;
    return (
      <Modal isOpen={state.modal} toggle={this.toggle} className="modal-container assessments-modal-container">
        <ModalHeader toggle={this.toggle}>Run Assessments</ModalHeader>
        <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: 'hidden' }}>
          <div className="d-block p-b-15 environment-text">Environment</div>
          <div className="form-group">
            <label htmlFor="rulesetGroup" className="d-block">
              {state.data ? state.data.name : ''}
              <i className="fa fa-info-circle"></i>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="rulesetGroup" className="d-block">
              {state.data ? state.data.description : ''}
              <i className="fa fa-info-circle"></i>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="rulesetGroup" className="d-block">
              {state.data ? state.data.entity : ''}
              <i className="fa fa-info-circle"></i>
            </label>
          </div>
          <div className="form-group">
            <div className="d-block width-100 p-b-10 rules-policies-text">
              {state.data ? state.data.checks.length : 0}
            </div>
            {state.data &&
              state.data.checks.map((item: any) => {
                <div className="d-block width-100 p-b-5 privacy-text">{item}</div>;
              })}
            <div className="d-block width-100 p-b-10 rules-policies-text">
              Searchable: <input type="checkbox" readOnly={true} checked={state.data ? state.data.searchable : false} />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="d-block text-center" onClick={this.toggle}>
            <Link to={`${PLUGIN_BASE_URL}/compliancehistory`} className="blue-button m-r-0 m-b-0">
              RUN
            </Link>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}
