import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export class NewRulSetPopup extends React.Component<any, any> {
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
                <ModalHeader toggle={this.toggle}>Create New Ruleset</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                   
                </ModalBody>
            </Modal>
        );
    }
}