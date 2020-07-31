import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export class ComplianceHistory extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            
        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Compliance | Assessment History",
                isCurrentPage: true
            }
        ];

    }

    render() {
        return (
            <div className="compliancemanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="COMPLIANCE | ASSESSMENT HISTORY" />
                <div className="compliancemanager-page-container">
                    <div className="common-container results-container">
                        <div className="d-block heading">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h2><strong>RESULTS</strong> ( Ruleset: AWS CCP Framework, Account: AWS | Mumbai )</h2>
                                    <p>July 16 2020 05 : 20 PM</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 text-right">
                                    <a href="#" className="white-button m-r-0 min-width-inherit width-auto back-button">
                                        <i className="fa fa-arrow-circle-o-left"></i> Back
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-block p-t-20">
                            <div className="d-inline-block results-left-chart">
                                <div className="d-inline-block chart-box">
                                    <div className="d-block heading">
                                        <strong>Test Score</strong>
                                    </div>
                                    <div className="d-block chart-inner"></div>
                                </div>
                                <div className="d-inline-block chart-box">
                                    <div className="d-block heading">
                                        <strong>Failed Tests by Rule Serverity</strong>
                                    </div>
                                    <div className="d-block chart-inner"></div>
                                </div>
                                <div className="d-inline-block chart-box green-chart">
                                    <div className="d-block heading">
                                        <strong>Entitles by Type, Pass Vs Fail</strong>
                                    </div>
                                    <div className="d-block chart-inner"></div>
                                </div>
                                <div className="d-inline-block chart-box">
                                    <div className="d-block heading">
                                        <strong>Tested Entities</strong>
                                    </div>
                                    <div className="d-block chart-inner"></div>
                                </div>
                            </div>
                            <div className="d-inline-block float-right results-right-chart">
                                <div className="d-block map-box">
                                    <div className="d-block heading">
                                        <strong>Distribution by Geolocation</strong>
                                    </div>
                                    <div className="d-block map-inner">

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