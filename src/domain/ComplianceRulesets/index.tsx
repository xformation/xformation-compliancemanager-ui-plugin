import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import amazonLogo from '../../img/amazon-logo.png';
import { NewRulSetPopup } from './newRuleSetPopup';
import { AssessmentPopup } from './assessmentPopup';

export class ComplianceRulesets extends React.Component<any, any> {
    breadCrumbs: any;
    rulesetRef: any;
    assessmentRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            ruleSetData: [{
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
            }, {
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
                title: 'AWS CCPA Framework',
                no_of_rule: '33 Rules | No Policies',
                company_name: 'California Consumer Privacy Act.',
                reference: 'https"//oag.ca.gov/privacy/ccpa',
                menuStatusOpen: false,
            },
            ],
        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Monitor | Alerts",
                isCurrentPage: true
            }
        ];
        this.rulesetRef = React.createRef();
        this.assessmentRef = React.createRef();
    }

    onClickonClickRunRuleset = (e: any) => {
        this.rulesetRef.current.toggle();
    };

    onClickonClickRunAssessment = (e: any) => {
        this.assessmentRef.current.toggle();
    };

    displayRuleSetData = () => {
        const { ruleSetData } = this.state;
        const retData = [];
        for (let i = 0; i < ruleSetData.length; i++) {
            const data = ruleSetData[i];
            retData.push(
                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <div className="d-block width-100 assessment-box" onClick={this.onClickonClickRunAssessment}>
                        <div className="d-block width-100 assessment-heading">
                            <i className="fa fa-caret-right left-arrow"></i>
                            <strong className="d-inline-block">{data.mainTitle}</strong>
                            <a href="#" className="gray-button float-right width-auto min-width-inherit m-r-0">
                                <i className="fa fa-ellipsis-v"></i>
                            </a>
                        </div>
                        <div className="d-block width-100 assessment-inner">
                            <div className="d-block width-100 p-b-15">
                                <div className="d-inline-block width-50">
                                    <strong className="d-block cat-sub-name">{data.subTitle}</strong>
                                </div>
                                <div className="d-inline-block width-50 text-right">
                                    <img src={amazonLogo} alt="" />
                                </div>
                            </div>
                            <div className="d-block width-100 p-b-5 cat-name">
                                {data.title}
                            </div>
                            <div className="d-block width-100 p-b-10 rules-policies-text">
                                {data.no_of_rule}
                            </div>
                            <div className="d-block width-100 p-b-5 privacy-text">
                                {data.company_name}
                            </div>
                            <div className="d-block width-100 reference-text">
                                For additional reference:<a href="#">{data.reference}</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return retData;
    }

    render() {
        const state = this.state;
        return (
            <div className="compliancemanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PREFORMANCE MANAGEMENT" />
                <div className="compliancemanager-page-container">
                    <div className="common-container filter-container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12">
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
                            <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="resources">
                                        Policy Category&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="resources">
                                        <option>Select Policy Category</option>
                                        <option>Select Policy Category</option>
                                        <option>Select Policy Category</option>
                                        <option>Select Policy Category</option>
                                        <option>Select Policy Category</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="timeRange">
                                        Type&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option>Select Type</option>
                                        <option>Select Type</option>
                                        <option>Select Type</option>
                                        <option>Select Type</option>
                                        <option>Select Type</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="timeRange">
                                        Policy Enabled&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option>Select Policy Enabled</option>
                                        <option>Select Policy Enabled</option>
                                        <option>Select Policy Enabled</option>
                                        <option>Select Policy Enabled</option>
                                        <option>Select Policy Enabled</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12">
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
                                    <h3>Showing 6 of 60 results</h3>
                                </div>
                                <div className="d-inline-block width-50 text-right">
                                    <a onClick={this.onClickonClickRunRuleset} className="blue-button m-r-0">ADD RULESET</a>
                                </div>
                            </div>
                            <div className="d-block width-100 p-t-15 p-b-20 search-box">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="d-inline-block form-group search-control-group">
                                            <form>
                                                <input type="text" className="input-group-text" placeholder="Search" />
                                                <button>
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="d-block text-right width-100 view">
                                            <a href="#" className="d-inline-block"><i className="fa fa-bars"></i></a>
                                            <a href="#" className="d-inline-block m-r-0"><i className="fa fa-th-large"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block width-100">
                                <div className="row">
                                    {this.displayRuleSetData()}
                                </div>
                            </div>
                            <div className="d-block width-100 text-right pagination">
                                <ul>
                                    <li className="previous"><a href="#">Previous</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">...</a></li>
                                    <li className="next"><a href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <AssessmentPopup ref={this.assessmentRef} />
                <NewRulSetPopup ref={this.rulesetRef} />
            </div>
        );
    }
};