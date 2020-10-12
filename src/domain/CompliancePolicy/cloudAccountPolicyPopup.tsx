import * as React from 'react';
import { Accounts } from './accounts';
import { Rulesets } from './rulesets';
import { Notification } from './notification';
import { Wizard } from './Wizard';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class CloudAccountPolicyPopup extends React.Component<any, any> {
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
        };
        this.steps = [
            {
                name: "Accounts",
                component: <Accounts />
            },
            {
                name: "Rulesets",
                component: <Rulesets />
            },
            {
                name: "Notification",
                component: <Notification />
            }
        ];
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        const { modal } = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container assessments-modal-container">
                <ModalHeader toggle={this.toggle}>Create New Policy</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <Wizard steps={this.steps} />
                </ModalBody>
            </Modal>
        );
    }
}