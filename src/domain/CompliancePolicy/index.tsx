import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import amazonLogo from '../../img/amazon-logo.png';
import runHandIcon from '../../img/run-hand-icon.png';
import runSettingisIcon from '../../img/run-settingis-icon.png';
import { NewRulSetPopup } from './newRuleSetPopup';
import { AssessmentPopup } from './assessmentPopup';

export class CompliancePolicy extends React.Component<any, any> {
    breadCrumbs: any;
    
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            totalPages: '',
            currentPage: 0,
            perPageLimit: 6,
            ruleSetData: [
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: '',
                    title: 'AWS CCPA Framework',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: 'CIS',
                    title: 'AWS CIS Foundation',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: '',
                    title: 'AWS CCPA Framework',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: '',
                    title: 'AWS CCPA Framework',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: 'CIS',
                    title: 'AWS CIS Foundation',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: '',
                    title: 'AWS CCPA Framework',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                }
            ],
            
        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Compiiance | COMPLIANCE RULESETS",
                isCurrentPage: true
            }
        ];
        
    }

    componentDidMount() {
        this.calculateTotalPages(this.state.ruleSetData);
    };

    calculateTotalPages = (displayData: any) => {
        const { perPageLimit } = this.state;
        let indexOfLastData = Math.ceil(displayData.length / perPageLimit);
        this.setState({
            totalPages: indexOfLastData,
        });
    };

    displayRuleSetData = () => {
        const { ruleSetData, perPageLimit, currentPage } = this.state;
        const retData = [];
        const length = ruleSetData.length;
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                if (i >= currentPage * perPageLimit && i <= (currentPage * perPageLimit + (perPageLimit - 1))) {
                    const data = ruleSetData[i];
                    retData.push(
                        <div className="d-block width-100 assessment-box">
                            <div className="d-block width-100 assessment-heading">
                                
                            </div>
                        </div>
                    );
                }
            }
        } else {
            retData.push(<div className="d-block width-100 there-no-data">There is no data</div>);
        }

        return retData;
    }

    onSearchChange = (e: any) => {
        const { value } = e.target;
        this.setState({
            searchKey: value,
        });
        const { duplicateruleSetData } = this.state;
        var searchResult = [];
        for (let i = 0; i < duplicateruleSetData.length; i++) {
            if (duplicateruleSetData[i].title.indexOf(value) !== -1 || value === '') {
                searchResult.push(duplicateruleSetData[i]);
            }
        }
        this.calculateTotalPages(searchResult);
        this.setState({
            ruleSetData: searchResult,
            currentPage: 0
        });
    }

    peginationOfBox() {
        const { currentPage, totalPages, ruleSetData } = this.state;
        let rows = [];
        for (let i = 0; i < totalPages; i++) {
            console.log(currentPage);
            rows.push(<li className="" key={i}><a className={currentPage === i ? 'active' : 'deactive'} href="#" onClick={(e) => this.navigatePage('btn-click', e, i)}>{i + 1}</a></li >);
        }
        return (
            <ul>
                <li className="previous">
                    <a className={currentPage === 0 ? 'desable' : 'enable'} href="#" onClick={(e) => this.navigatePage('pre', e, '')}>Previous</a>
                </li>
                {rows}
                <li className="next">
                    <a className={currentPage === this.state.totalPages - 1 ? 'desable' : 'enable'} href="#" onClick={(e) => this.navigatePage('next', e, '')}>Next</a>
                </li>
            </ul>
        );
    }

    navigatePage(target: any, e: any, i: any) {
        const { totalPages, currentPage } = this.state;
        e.preventDefault();
        switch (target) {
            case 'pre':
                if (currentPage !== 0) {
                    this.setState({
                        currentPage: currentPage - 1,
                    });
                }
                break;
            case 'next':
                if (currentPage !== totalPages - 1) {
                    this.setState({
                        currentPage: currentPage + 1,
                    });
                }
                break;
            case 'btn-click':
                this.setState({
                    currentPage: i
                });
                break;
        }
    }

    render() {
        const { perPageLimit, ruleSetData } = this.state;
        return (
            <div className="compliancemanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="COMPLIANCE | COMPLIANCE RULESETS" />
                <div className="compliancemanager-page-container">
                    <div className="common-container filter-container">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="rousourceGroup">
                                        Platform&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="rousourceGroup">
                                        <option value="" selected>Select Platform</option>
                                        <option value="All">All</option>
                                        <option value="AWS">AWS</option>
                                        <option value="Azure">Azure</option>
                                        <option value="Gcp">Gcp</option>
                                        <option value="Kubernetes">Kubernetes</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="resources">
                                        Cloud Accounts&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="resources">
                                        <option value="" selected>Select Cloud Accounts</option>
                                        <option value="AllAccounts">All Accounts</option>
                                        <option value="AWS(123456)">AWS (123456)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="timeRange">
                                        Ruleset&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Ruleset</option>
                                        <option value="All">All</option>
                                        <option value="AWS-Test">AWS-Test</option>
                                        <option value="AWSNetworkAlerts">AWS Network Alerts</option>
                                        <option value="AzureCheckUp">Azure CheckUp</option>
                                        <option value="GCPCheckUp">GCP CheckUp</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="timeRange">
                                        Notification&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Notification</option>
                                        <option value="NoData">No Data</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="timeRange">
                                        Show Associated&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Ruleset</option>
                                        <option value="SelectAll">Select All</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group clear-filters">
                                    <label htmlFor="clearFilter">
                                        <span>Clear All Filters</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container">
                        <div className="assessment-boxes">
                            <div className="d-block width-100 heading">
                                <div className="d-inline-block width-50">
                                    {ruleSetData.length > 0 && <h3>Showing {perPageLimit} of {ruleSetData.length} results</h3>}
                                </div>
                                <div className="d-inline-block width-50 text-right">
                                    <a className="blue-button">Add Cloud Account Policy</a>
                                    <a className="blue-button m-r-0">Add Organizational Unit Policy</a>
                                </div>
                            </div>
                            
                            {ruleSetData.length > 0 && 
                            <div className="d-block width-100 p-t-15 p-b-20 search-box">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="d-inline-block form-group search-control-group">
                                            <input type="text" onChange={this.onSearchChange} value={this.state.searchKey} className="input-group-text" placeholder="Search" />
                                            <button>
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                            
                            <div className="d-block width-100">
                                {this.displayRuleSetData()}
                            </div>

                            {ruleSetData.length > 0 && <div className="d-block width-100 text-right pagination">
                                {this.peginationOfBox()}
                            </div>}
                        </div>
                    </div>
                </div>
                {/* <AssessmentPopup ref={this.assessmentRef} />
                <NewRulSetPopup ref={this.rulesetRef} /> */}
            </div>
        );
    }
};