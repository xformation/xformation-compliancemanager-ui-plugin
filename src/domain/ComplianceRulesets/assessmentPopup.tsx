import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class AssessmentPopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    render() {
        const state = this.state;
        return (
            <Modal isOpen={state.modal} toggle={this.toggle} className="modal-container">
                <ModalHeader toggle={this.toggle}>Run Assessments</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block p-b-15 environment-text">Environment</div>
                    <div className="form-group">
                        <label htmlFor="rulesetGroup" className="d-block">
                            Cloud account&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-info-circle"></i>
                        </label>
                        <select className="form-control d-block" id="rulesetGroup">
                            <option>Select account</option>
                            <option>Select account</option>
                            <option>Select account</option>
                            <option>Select account</option>
                            <option>Select account</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rulesetGroup" className="d-block">
                            Region&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-info-circle"></i>
                        </label>
                        <select className="form-control d-block" id="rulesetGroup">
                            <option>Select Region</option>
                            <option>Select Region</option>
                            <option>Select Region</option>
                            <option>Select Region</option>
                            <option>Select Region</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rulesetGroup" className="d-block">
                            VPC&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-info-circle"></i>
                        </label>
                        <select className="form-control d-block" id="rulesetGroup">
                            <option>Select VPC</option>
                            <option>Select VPC</option>
                            <option>Select VPC</option>
                            <option>Select VPC</option>
                            <option>Select VPC</option>
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="d-block text-center">
                        <button className="blue-button m-r-0 m-b-0">RUN</button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}