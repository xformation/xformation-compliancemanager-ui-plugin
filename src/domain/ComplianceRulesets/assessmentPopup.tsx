import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class AssessmentPopup extends React.Component<any, any> {
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
                <ModalHeader toggle={this.toggle}>Run Assessments</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block p-b-15 environment-text">Environment</div>
                    <div className="form-group">
                        <label htmlFor="rulesetGroup" className="d-block">
                            Cloud account&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-info-circle"></i>
                        </label>
                        <select className="form-control d-block" id="rulesetGroup">
                            <option value="" selected>Cloud account</option>
                            <option value="AllAccount">All Account</option>
                            <option value="AWS">AWS</option>
                            <option value="Azure">Azure</option>
                            <option value="Gcp">Gcp</option>
                            <option value="Kubernetes">Kubernetes</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rulesetGroup" className="d-block">
                            Region&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-info-circle"></i>
                        </label>
                        <select className="form-control d-block" id="rulesetGroup">
                            <option value="" selected>Select Region</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="CanadaCentral">Canada Central</option>
                            <option value="Frunkfurt">Frunkfurt</option>
                            <option value="HongKong">Hong Kong</option>
                            <option value="Ireland">Ireland</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rulesetGroup" className="d-block">
                            VPC&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-info-circle"></i>
                        </label>
                        <select className="form-control d-block" id="rulesetGroup">
                            <option>Select VPC</option>
                            <option value="All">All</option>
                            <option value="vpc-0123abcdrfgh">vpc-0123abcdrfgh</option>
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="d-block text-center" onClick={this.toggle}>
                        <Link to={`${config.basePath}/compliancehistory`} className="blue-button m-r-0 m-b-0">
                            RUN
                        </Link>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}