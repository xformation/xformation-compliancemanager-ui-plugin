import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export class DeleteExclusionPopup extends React.Component<any, any> {
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
                <ModalHeader toggle={this.toggle}>Delete Exclusion</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <span>You are about to delete Exclusion for cloud account '*' and ruleset 'AWS CIS Foundations v. 1.0.0', are you sure?</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <button className="text-center">Delete</button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}