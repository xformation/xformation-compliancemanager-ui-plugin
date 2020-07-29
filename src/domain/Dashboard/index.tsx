import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import settingsIcon from '../../img/settings.png';
import fileExportIcon from '../../img/file-export.png';

export class Dashboard extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {};
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
    }
    render() {
        const state = this.state;
        return (
            <div className="compliancemanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PREFORMANCE MANAGEMENT" />
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
                                    <a href="#" className="blue-button">
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
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block compliance-main-box">
                                    <div className="d-block heading">
                                        <strong className="d-inline-block">AWS Network Alerts</strong>
                                        <i className="fa fa-caret-right float-right"></i>
                                    </div>
                                    <div className="d-block text-center compliance-inner">
                                        <p className="d-block">AWS (657907747545)</p>
                                        <span className="d-block orange">55%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block compliance-main-box">
                                    <div className="d-block heading">
                                        <strong className="d-inline-block">AWS HIPPA</strong>
                                        <i className="fa fa-caret-right float-right"></i>
                                    </div>
                                    <div className="d-block text-center compliance-inner">
                                        <p className="d-block">AWS (657907747545)</p>
                                        <span className="d-block yellow-green">92%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block compliance-main-box">
                                    <div className="d-block heading">
                                        <strong className="d-inline-block">Azure CheckUp</strong>
                                        <i className="fa fa-caret-right float-right"></i>
                                    </div>
                                    <div className="d-block text-center compliance-inner">
                                        <p className="d-block">AWS (657907747545)</p>
                                        <span className="d-block red">9%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block compliance-main-box">
                                    <div className="d-block heading">
                                        <strong className="d-inline-block">GCP CheckUp</strong>
                                        <i className="fa fa-caret-right float-right"></i>
                                    </div>
                                    <div className="d-block text-center compliance-inner">
                                        <p className="d-block">AWS (657907747545)</p>
                                        <a href="#" className="d-block">Click to run</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block compliance-main-box">
                                    <div className="d-block heading">
                                        <strong className="d-inline-block">AWS Dashboard</strong>
                                        <i className="fa fa-caret-right float-right"></i>
                                    </div>
                                    <div className="d-block text-center compliance-inner">
                                        <p className="d-block">AWS (657907747545)</p>
                                        <span className="d-block orange">66%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block compliance-main-box">
                                    <div className="d-block heading">
                                        <strong className="d-inline-block">AWS S3 Bucket</strong>
                                        <i className="fa fa-caret-right float-right"></i>
                                    </div>
                                    <div className="d-block text-center compliance-inner">
                                        <p className="d-block">AWS (657907747545)</p>
                                        <a href="#" className="d-block">Click to run</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block compliance-main-box">
                                    <div className="d-block heading">
                                        <strong className="d-inline-block">AWS CIS Foundations</strong>
                                        <i className="fa fa-caret-right float-right"></i>
                                    </div>
                                    <div className="d-block text-center compliance-inner">
                                        <p className="d-block">AWS (657907747545)</p>
                                        <span className="d-block orange">85%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block compliance-main-box">
                                    <div className="d-block heading">
                                        <strong className="d-inline-block">AWS NIST 800-53 Rev 4</strong>
                                        <i className="fa fa-caret-right float-right"></i>
                                    </div>
                                    <div className="d-block text-center compliance-inner">
                                        <p className="d-block">AWS (657907747545)</p>
                                        <span className="d-block red">2%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block compliance-main-box">
                                    <div className="d-block heading">
                                        <strong className="d-inline-block">GCP CIS Foundations</strong>
                                        <i className="fa fa-caret-right float-right"></i>
                                    </div>
                                    <div className="d-block text-center compliance-inner">
                                        <p className="d-block">AWS (657907747545)</p>
                                        <span className="d-block orange">35%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block compliance-main-box">
                                    <div className="d-block heading">
                                        <strong className="d-inline-block">Azure CIS Foundations</strong>
                                        <i className="fa fa-caret-right float-right"></i>
                                    </div>
                                    <div className="d-block text-center compliance-inner">
                                        <p className="d-block">AWS (657907747545)</p>
                                        <span className="d-block yellow-green">100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};