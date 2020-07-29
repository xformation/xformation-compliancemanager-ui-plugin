import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
            <Modal isOpen={state.modal} toggle={this.toggle} className="modal-container">
                <ModalHeader toggle={this.toggle}>Create New Ruleset</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="form-group">
                        <label htmlFor="Name" className="d-block">Name</label>
                        <input type="text" className="input-group-text d-block" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Name" className="d-block">Description</label>
                        <textarea className="input-group-text d-block"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rulesetGroup" className="d-block">
                            Platform&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-info-circle"></i>
                        </label>
                        <select className="form-control d-block" id="rulesetGroup">
                            <option>Select Platform</option>
                            <option>Select Platform</option>
                            <option>Select Platform</option>
                            <option>Select Platform</option>
                            <option>Select Platform</option>
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="d-block text-center">
                        <button className="blue-button m-r-0 m-b-0">SAVE</button>
                    </div>
                </ModalFooter>
            </Modal>
            
        );
    }
}