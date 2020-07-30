import * as React from 'react';
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
                    <div className="d-block text-center">
                        <button className="blue-button m-r-0 m-b-0">RUN</button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}