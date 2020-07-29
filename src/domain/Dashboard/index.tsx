import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import settingsIcon from '../../img/settings.png';
import fileExportIcon from '../../img/file-export.png';
import { AssessmentPopup } from './assetssmentPopup';

export class Dashboard extends React.Component<any, any> {
    breadCrumbs: any;
    assessmentRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            dashboardData: [{
                title: 'AWS Network Alerts',
                awsdata: 'AWS (657907747545)',
                percentage: '55%',
                color: 'orange',
            },
            {
                title: 'AWS HIPPA',
                awsdata: 'AWS (657907747545)',
                percentage: '92%',
                color: 'yellow-green',
            },
            {
                title: 'Azure CheckUp',
                awsdata: 'AWS (657907747545)',
                percentage: '9%',
                color: 'red',
            },
            {
                title: 'GCP CheckUp',
                awsdata: 'AWS (657907747545)',
                percentage: '',
                color: '',
            },
            {
                title: 'AWS Dashboard',
                awsdata: 'AWS (657907747545)',
                percentage: '66%',
                color: 'orange',
            },
            {
                title: 'AWS S3 Bucket',
                awsdata: 'AWS (657907747545)',
                percentage: '',
                color: '',
            },
            {
                title: 'AWS CIS Foundations',
                awsdata: 'AWS (657907747545)',
                percentage: '85%',
                color: 'orange',
            },
            {
                title: 'AWS NIST 800-53 Rev 4',
                awsdata: 'AWS (657907747545)',
                percentage: '2%',
                color: 'red',
            },
            {
                title: 'GCP CIS Foundations',
                awsdata: 'AWS (657907747545)',
                percentage: '35%',
                color: 'orange',
            },
            {
                title: 'Azure CIS Foundations',
                awsdata: 'AWS (657907747545)',
                percentage: '100%',
                color: 'yellow-green',
            },
            ],
        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Compiiance | Dashboard",
                isCurrentPage: true
            }
        ];
        this.assessmentRef = React.createRef();
    }

    onClickonClickRunAssessment = (e: any) => {
        this.assessmentRef.current.toggle();
    };

    displayDashboardData() {
        const { dashboardData } = this.state;
        const retData = [];
        for (let i = 0; i < dashboardData.length; i++) {
            const data = dashboardData[i];
            retData.push(
                <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                    <div className="d-block compliance-main-box" onClick={this.onClickonClickRunAssessment}>
                        <div className="d-block heading">
                            <strong className="d-inline-block">{data.title}</strong>
                            <i className="fa fa-caret-right float-right"></i>
                        </div>
                        <div className="d-block text-center compliance-inner">
                            <p className="d-block">{data.awsdata}</p>
                            {data.percentage != '' && <span className={data.color != '' ? data.color : 'd-block'}>{data.percentage}</span>}
                            {data.percentage == '' && <a href="#" className="d-block">Click to run</a>}
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
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="COMPLIANCE | DASHBOARD" />
                <div className="compliancemanager-page-container">
                    <div className="common-container filter-container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
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
                            </div>
                            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                <div className="float-right assessments">
                                    <a onClick={this.onClickonClickRunAssessment} className="blue-button">
                                        <i className="fa fa-caret-right"></i>&nbsp;&nbsp; RUN ASSESSMENTS
                                    </a>
                                    <a href="#" className="white-button settings">
                                        <img src={settingsIcon} alt="" />
                                    </a>
                                    <a href="#" className="white-button m-r-0 file-export">
                                        <img src={fileExportIcon} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container">
                        <div className="row">
                            {this.displayDashboardData()}
                        </div>
                    </div>
                </div>
                <AssessmentPopup ref={this.assessmentRef} />
            </div>
        );
    }
};