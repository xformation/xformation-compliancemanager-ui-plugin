import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import awsLogo from '../../img/amazon-logo.png';
import microsoftAzureLogo from '../../img/microsoftazure.png';
import gcpLogo from '../../img/google-cloud.png';
import KubernetesLogo from '../../img/kubernetes.png';

export class ApiGateway extends React.Component<any, any> {
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
                label: "Compiiance | Dashboard",
                isCurrentPage: true
            }
        ];

    }

    render() {
        return (
            <div className="compliance-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="COMPLIANCE | DASHBOARD" />
                <div className="compliancemanager-page-container">
                    <div className="common-container">
                        <div className="gsl-editor-logos">
                            <h3>GSL Editor</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <span><img src={awsLogo} alt="" /></span>
                                        <p>AWS</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><img src={microsoftAzureLogo} alt="" /></span>
                                        <p>Azure</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><img src={gcpLogo} alt="" /></span>
                                        <p>GCP</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><img src={KubernetesLogo} alt="" /></span>
                                        <p>Kubernetes</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="gsl-editor-radio">
                                    <ul>
                                        <li>
                                            <input type="radio" id="Wizard" name="selector" checked />
                                            <label htmlFor="Wizard">Wizard</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="Script" name="selector" />
                                            <label htmlFor="Script">Script</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="">
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};