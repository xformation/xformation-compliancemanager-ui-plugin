import * as React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class MySelectObj {

    constructor(id: any, name: any) {

    }
}
export class OpenDescardPopup extends React.Component<any, any> {
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
    }

    render() {
        const { modal, discardLabel } = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container assessments-modal-container">
                <ModalHeader toggle={this.toggle}>Discard Changes</ModalHeader>
                <ModalBody style={{ height: 'calc(10vh - 20px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div>Remove {this.props.valueOfDiscard} ,Are you sure?</div>
                </ModalBody>
                <ModalFooter toggle={this.toggle}>
                    <div className="text-right">
                        <button className="gray-button m-b-0">CANCEL</button>
                        <button className="blue-button m-r-0 m-b-0" onClick={()=>this.props.removeFunction(this.props.valueOfDiscard)}>YES</button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}