import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

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
            <Modal isOpen={state.modal} toggle={this.toggle} className="">
                <ModalHeader toggle={this.toggle}>Run Assessments</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <span>You are about to run all displayed assessments. This could take a few minutes. Are you sure?</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <button className="text-center">RUN</button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}