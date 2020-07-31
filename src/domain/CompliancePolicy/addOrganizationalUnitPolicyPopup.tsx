import * as React from 'react';
import { Accounts } from './accounts';
import { Rulesets } from './rulesets';
import { Notification } from './notification';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class AddOrganizationalUnitPolicyPopup extends React.Component<any, any> {
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            activeTab: 0
        };
        
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    setActiveTab = (activeTab: any) => {
        this.setState({
            activeTab
        });
    };

    render() {
        const { activeTab, modal } = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container">
                <ModalHeader toggle={this.toggle}>Create New Policy</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="">
                        <ul>
                            <li className={activeTab === 0 ? "active-tab" : ''} onClick={e => this.setActiveTab(0)}>
                                <a href="#">Accounts</a>
                            </li>
                            <li className={activeTab === 1 ? "active-tab" : ''} onClick={e => this.setActiveTab(1)}>
                                <a href="#">Rulesets</a>
                            </li>
                            <li className={activeTab === 2 ? "active-tab" : ''} onClick={e => this.setActiveTab(2)}>
                                <a href="#">Notification</a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        {
                            activeTab === 0 && <Accounts />
                        }
                        {
                            activeTab === 1 && <Rulesets />
                        }
                        {
                            activeTab === 2 && <Notification />
                        }
                    </div>
                    {/* <Wizard steps={this.steps} /> */}
                </ModalBody>
            </Modal>

        );
    }
}