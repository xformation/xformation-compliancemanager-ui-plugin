import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class EditExclusionPopup extends React.Component<any, any> {
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
                <ModalHeader toggle={this.toggle}>Create New Exclusion</ModalHeader>
                <ModalBody style={{height: 'calc(74vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="form-group">
                        <label htmlFor="rulesetGroup" className="d-block">
                            Ruleset&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-info-circle"></i>
                        </label>
                        <select className="form-control d-block" id="rulesetGroup">
                            <option>Select Ruleset</option>
                            <option>Select Ruleset</option>
                            <option>Select Ruleset</option>
                            <option>Select Ruleset</option>
                            <option>Select Ruleset</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" className="checkbox" checked /> Excluded by Rule
                        <div className="d-block select-rule">
                            <select className="form-control d-block" id="ruleGroup">
                                <option>Select Rule</option>
                                <option>Select Rule</option>
                                <option>Select Rule</option>
                                <option>Select Rule</option>
                                <option>Select Rule</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" className="checkbox" /> Excluded by Cloud Account
                    </div>
                    <div className="form-group">
                        <input type="checkbox" className="checkbox" /> Excluded by Entity
                    </div>
                    <div className="form-group">
                        <label htmlFor="commentsGroup" className="d-block">
                            Comments
                        </label>
                        <textarea className="form-control d-block"></textarea>
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