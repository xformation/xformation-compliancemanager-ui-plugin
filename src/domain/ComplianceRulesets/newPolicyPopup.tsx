import * as React from 'react';
import { config } from '../../config';
import Utils from '../../utils';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const entBaseClsPkg = "com.synectiks.cms.entities.";

export class NewPolicyPopup extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
			modal: false,
			entities: [],
			rules: [],
			selRules: [],
			searchable: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    componentDidMount() {
		Utils.getReq(config.GET_ENTITIES_LIST)
			.then((response: any) => {
				this.setState({
					entities: response.data
				});
			});
		console.log("entities: ", this.state.entities);
		Utils.getReq(config.LIST_RULES)
			.then((response: any) => {
				this.setState({
					rules: response.data
				});
			});
		console.log("Rules: ", this.state.rules);
	};

	onChange(e: any) {
		const val = e.target.value;
		const id = e.target.id;
		if (val) {
			this.setState({
				[id]: val
			});
		} else {
			this.setState({
				[id]: ''
			});
		}
	}

	onChkChange() {
		const toggle = !this.state.searchable;
		this.setState({
			searchable: toggle
		});
	}

	onRuleChange(e: any) {
		const chkd = e.target.checked;
		const id = e.target.id;
		const rules = this.state.selRules;
		if (chkd) {
			if (!rules.contains(id)) {
				rules.push(id);
			}
		} else {
			if (rules.contains(id)) {
				rules.remove(id);
			}
		}
		this.setState({
			selRules: rules
		});
	}

	submit() {
		const data: any = {};
		if (this.state.name) {
			data.name = this.state.name;
		} else {
			alert("Name is mandatory.");
			return;
		}
		if (this.state.entity) {
			data.entity = this.state.entity;
		} else {
			alert("Entity is mandatory.");
			return;
		}
		if (this.state.selRules) {
			data.checks = [];
			data.rules.push(this.state.selRules);
		} else {
			alert("Rules are mandatory.");
			return;
		}
		data.searchable = this.state.searchable;
		data.description = this.state.description;
		alert('Payload: ' +  data);
		Utils.postReq(config.POST_POLICY, data, this.responseHandler)
	}

	responseHandler(res: any, err: any) {
		if (res) {
			alert("Rule saved successfully by id: " + res.id);
		} else {
			alert(err);
		}
	}

    render() {
        const state = this.state;
        return (
            <Modal isOpen={state.modal} toggle={this.toggle} className="modal-container">
                <ModalHeader toggle={this.toggle}>Create New Ruleset</ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="form-group">
                        <label htmlFor="name" className="d-block">Name*</label>
						<input id="name" type="text" value={this.state.name} onChange={this.onChange}
							className="input-group-text d-block" placeholder="Rule name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="d-block">Description</label>
						<textarea id="description" value={this.state.description}
							onChange={this.onChange} className="input-group-text d-block"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="searchable" className="d-block">Searchable</label>
                        <input type="checkbox" id="searchable" defaultChecked={this.state.searchable}
							onChange={this.onChkChange} className="input-group-text d-block"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="entity" className="d-block">
                            Entity*&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-info-circle"></i>
                        </label>
						<select className="form-control d-block" id="entity"
							onChange={this.onChange} value={this.state.entity}>
                            <option value="" selected>Select Entity</option>
                            {this.state.entities.map((item: any) => (
								<option key={item} value={item}>
									{item.replace(entBaseClsPkg, '')}
								</option>
							))}
                        </select>
						<div className="form-group">
							<label className="d-block">Select Rules*</label>
							<table>
								<tbody>
									{this.state.rules.map((rule: any) => (
										<tr>
											<td>
												<input id={rule.id} type="checkbox" defaultChecked={false} onChange={this.onRuleChange}
													className="input-group-text d-block" value={rule.id} />
											</td>
											<td>{rule.name}</td>
											<td>{rule.checks}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="d-block text-center">
                        <button onClick={this.submit} className="blue-button m-r-0 m-b-0">SAVE</button>
                    </div>
                </ModalFooter>
            </Modal>
            
        );
    }
}