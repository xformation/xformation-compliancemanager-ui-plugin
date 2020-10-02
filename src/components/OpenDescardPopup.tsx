import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

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
            </Modal>
        );
    }
}