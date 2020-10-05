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
            discardLabel: this.props.valueOfDiscard,
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
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container">
                <ModalHeader toggle={this.toggle}>Discard Changes</ModalHeader>
                <ModalBody style={{ height: 'calc(10vh - 20px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div>Remove {discardLabel} ,Are you sure?</div>
                </ModalBody>
                <ModalFooter>
                    <div className="text-right">
                        <button className="gray-button m-b-0">CANCEL</button>
                        <button className="blue-button m-r-0 m-b-0">YES</button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}