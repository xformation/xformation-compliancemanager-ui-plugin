import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class AssetssmentPopup extends React.Component<any, any> {
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
                <ModalBody style={{ overflowY: 'auto', overflowX: "hidden" }}>
                    <p>You are about to run 'AWS HIPAA' ruleset on 'AWS account'. Are you sure?</p>
                </ModalBody>
                <ModalFooter>
                    <div className="d-block text-center" onClick={this.toggle}>
                        <Link to={`${config.basePath}/complianceassessmenthistory`} className="blue-button m-r-0 m-b-0">
                            RUN
                        </Link>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}