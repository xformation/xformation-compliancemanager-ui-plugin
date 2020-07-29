import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { DeleteExclusionPopup } from './deleteExclusionPopup';
import { EditExclusionPopup } from './editExclusionPopup';

export class ComplianceExclusions extends React.Component<any, any> {
    breadCrumbs: any;
    deleteExclusionRef: any;
    editExclusionRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            exclusionData: [{
                ruleSet: 'AWS CIS Foundation v.1.0.0',
                ruleName: 'Avoid the use of the root account',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '',
                comments: 'Password policy excluded.',
            },
            {
                ruleSet: 'AWS CIS Foundation v.1.0.1',
                ruleName: 'Prod_DB_SYN15',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '',
                comments: 'Password policy excluded.',
            },
            {
                ruleSet: 'AWS CIS Foundation v.1.0.2',
                ruleName: 'Dev_L3Switch',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '12345',
                comments: 'Password policy excluded.',
            },
            {
                ruleSet: 'AWS CIS Foundation v.1.0.3',
                ruleName: 'Dev-SYN-SYN13',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '',
                comments: 'Password policy excluded.',
            },
            {
                ruleSet: 'AWS CIS Foundation v.1.0.4',
                ruleName: 'Dev_SYN_SYN12',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '',
                comments: 'Password policy excluded.',
            },
            {
                ruleSet: 'AWS CIS Foundation v.1.0.5',
                ruleName: 'Prod_DB_SYN28',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '',
                comments: 'Password policy excluded.',
            }],
            duplicatedata: [{
                ruleSet: 'AWS CIS Foundation v.1.0.0',
                ruleName: 'Avoid the use of the root account',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '',
                comments: 'Password policy excluded.',
            },
            {
                ruleSet: 'AWS CIS Foundation v.1.0.1',
                ruleName: 'Prod_DB_SYN15',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '',
                comments: 'Password policy excluded.',
            },
            {
                ruleSet: 'AWS CIS Foundation v.1.0.2',
                ruleName: 'Dev_L3Switch',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '12345',
                comments: 'Password policy excluded.',
            },
            {
                ruleSet: 'AWS CIS Foundation v.1.0.3',
                ruleName: 'Dev-SYN-SYN13',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '',
                comments: 'Password policy excluded.',
            },
            {
                ruleSet: 'AWS CIS Foundation v.1.0.4',
                ruleName: 'Dev_SYN_SYN12',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '',
                comments: 'Password policy excluded.',
            },
            {
                ruleSet: 'AWS CIS Foundation v.1.0.5',
                ruleName: 'Prod_DB_SYN28',
                cloudAmount: 'AWS (657907747545)',
                entityName: 'Account Summary',
                entityId: '',
                comments: 'Password policy excluded.',
            }]
        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Compliance | Exclusions",
                isCurrentPage: true
            }
        ];
        this.deleteExclusionRef = React.createRef();
        this.editExclusionRef = React.createRef();
    }

    onClickDeleteExclusion = (e: any) => {
        this.deleteExclusionRef.current.toggle();
    };

    onClickEditExclusion = (e: any) => {
        this.editExclusionRef.current.toggle();
    };

    createExclusionTable = () => {
        const { exclusionData } = this.state;
        const retData = [];
        for (let i = 0; i < exclusionData.length; i++) {
            const exclusions = this.state.exclusionData[i];
            retData.push(
                <tr className="">
                    <td className="">
                        <div className="pointer-label">
                            <input type="checkbox" className="checkbox" />
                            {exclusions.ruleSet}
                        </div>
                    </td>
                    <td>{exclusions.ruleName}</td>
                    <td>{exclusions.cloudAmount}</td>
                    <td>{exclusions.entityName}</td>
                    <td>{exclusions.entityId}</td>
                    <td>{exclusions.comments}</td>
                    <td>
                        <div className="d-flex">
                            <button onClick={this.onClickEditExclusion} className="btn btn-link">
                                <i className="fa fa-edit"></i>
                            </button>
                            <button onClick={this.onClickDeleteExclusion} className="btn btn-link">
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            );
        }
        return retData;
    }

    keyPress = (e: any) => {
        const { value } = e.target.value;
        this.setState({
            searchKey: value,
        });
        const { duplicatedata } = this.state;
        var searchResult = [];
        for (let i = 0; i < duplicatedata.length; i++) {
            if (duplicatedata[i].ruleName.indexOf(value) !== -1 || value === '') {
                searchResult.push(duplicatedata[i]);
            }
        }
        // this.setState({
        //     exclusionData: searchResult,
        // });
    }

    render() {
        return (
            <div className="compliancemanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="COMPLIANCE | EXCLUSIONS" />
                <div className="compliancemanager-page-container">
                    <div className="common-container filter-container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="form-group filter-control-group">
                                            <label htmlFor="rousourceGroup">
                                                Platform&nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-info-circle"></i>
                                            </label>
                                            <select className="form-control" id="rousourceGroup">
                                                <option>Select Platform</option>
                                                <option>Select Platform</option>
                                                <option>Select Platform</option>
                                                <option>Select Platform</option>
                                                <option>Select Platform</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="form-group filter-control-group">
                                            <label htmlFor="resources">
                                                Ruleset&nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-info-circle"></i>
                                            </label>
                                            <select className="form-control" id="resources">
                                                <option>Select Ruleset</option>
                                                <option>Select Ruleset</option>
                                                <option>Select Ruleset</option>
                                                <option>Select Ruleset</option>
                                                <option>Select Ruleset</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="form-group filter-control-group">
                                            <label htmlFor="timeRange">
                                                Organizational Unit&nbsp;&nbsp;&nbsp;
                                            <i className="fa fa-info-circle"></i>
                                            </label>
                                            <select className="form-control" id="timeRange">
                                                <option>Select Organizational Unit</option>
                                                <option>Select Organizational Unit</option>
                                                <option>Select Organizational Unit</option>
                                                <option>Select Organizational Unit</option>
                                                <option>Select Organizational Unit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="form-group filter-control-group clear-filters">
                                            <label htmlFor="clearFilter">
                                                <span>Clear All Filters</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row table-data-label">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <span >Showing 6 of 6 results</span>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <a onClick={this.onClickEditExclusion} className="blue-button">CREATE NEW EXCLUSION</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="form-group search-control-group">
                                            <form>
                                                <input type="text" onChange={this.keyPress} value={this.state.searchKey} className="input-group-text" placeholder="Search" />
                                                <button>
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container">
                        <div className="exclusion-details">
                            <div className="container-inner">
                                <table className="exclusion-data-table">
                                    <tbody>
                                        <tr className="exclusion-data-table-header">
                                            <th>
                                                <div className="pointer-label">
                                                    <input type="checkbox" className="checkbox" />
                                            Ruleset
                                        </div>
                                            </th>
                                            <th>Rule Name</th>
                                            <th>Cloud Account</th>
                                            <th>Entity Name</th>
                                            <th>Entity ID</th>
                                            <th>Commnets</th>
                                            <th>Action</th>
                                        </tr>
                                        {this.createExclusionTable()}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <DeleteExclusionPopup ref={this.deleteExclusionRef} />
                <EditExclusionPopup ref={this.editExclusionRef} />
            </div>

        );
    }
};