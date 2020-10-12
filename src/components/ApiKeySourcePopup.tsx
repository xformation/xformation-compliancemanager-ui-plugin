import * as React from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

export class ApiKeySourcePopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            discardLabel: this.props.valueOfDiscard,
        };
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
                <ModalBody style={{ height: 'calc(20vh - 20px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block form-group">
                        <label className="d-inline-block">ApiKeySource = </label>
                        <div className="d-inline-block width-50"><span className="d-inline-block text">'</span><input type="text" className="d-inline-block input-group-text width-auto" placeholder="20" /><span className="d-inline-block text">'</span></div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="text-right">
                        <button onClick={this.toggle} className="gray-button m-b-0">CANCEL</button>
                        <button className="blue-button m-r-0 m-b-0" onClick={()=>this.props.AddApikeySourceFunction('20')}>ADD</button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}