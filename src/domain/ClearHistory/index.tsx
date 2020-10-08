import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import awsLogo from '../../img/amazon-logo.png';
import microsoftAzureLogo from '../../img/microsoftazure.png';
import gcpLogo from '../../img/google-cloud.png';
import KubernetesLogo from '../../img/kubernetes.png';
import { config } from '../../config';

export class ClearHistory extends React.Component<any, any> {
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
                label: "Compliance",
                route: `${config.basePath}/dashboard`
            },
            {
                label: "Clear History",
                isCurrentPage: true
            }
        ];

    }

    render() {
        return (
            <div className="compliance-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="COMPLIANCE | DASHBOARD" />
                <div className="compliancemanager-page-container clearhistory-page-container">
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
                            <div className="col-xl-8 col-sm-12">
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
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="form-group filter-control-group">
                                            <label htmlFor="Account">Account</label>
                                            <select className="form-control" id="Account">
                                                <option value="">AWS</option>
                                                <option value="">AWS</option>
                                                <option value="">AWS</option>
                                                <option value="">AWS</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="form-group filter-control-group">
                                            <label htmlFor="Region">Region</label>
                                            <select className="form-control" id="Region">
                                                <option value="">All</option>
                                                <option value="">All</option>
                                                <option value="">All</option>
                                                <option value="">All</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="form-group filter-control-group">
                                            <label htmlFor="VPC">VPC</label>
                                            <select className="form-control" id="VPC">
                                                <option value="">All</option>
                                                <option value="">All</option>
                                                <option value="">All</option>
                                                <option value="">All</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="form-group filter-control-group">
                                            <a href="#" className="blue-button m-r-0 m-b-0 runtest-button">
                                                <i className="fa fa-play-circle"></i> RUN TEST
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="result-details-box">
                                    <div className="result-details-heading">
                                        <div className="heading-left">
                                            <label>Result Details:</label>
                                            <span>PASSED</span>
                                        </div>
                                        <div className="heading-right">
                                            <a href="#">clear result</a>
                                        </div>
                                    </div>
                                    <div className="result-details">
                                        <div className="result-details-code-main">
                                            <div className="result-details-code">
                                                <p>ApiGateway should have (apiKaySource='20' ) and region isPrivate()</p>
                                                <span>AWS/All Regions</span>
                                            </div>
                                            <div className="edit-button">
                                                <button><i className="fa fa-edit"></i></button>
                                            </div>
                                        </div>
                                        <div className="result-tested">
                                            <ul>
                                                <li>TESTED <span>0</span></li>
                                                <li>RELEVANT <span>0</span></li>
                                                <li>NON COMPLIANT <span className="compliant">0</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-xl-4 col-sm-12">
                                <div className="context-preview-box">
                                    <h4>Context Preview</h4>
                                    <div className="context-preview">
                                        <div className="d-block form-group filter-search-control">
                                            <form>
                                                <input type="text" className="input-group-text" placeholder="Search" value="" />
                                                <button><i className="fa fa-search"></i></button>
                                            </form>
                                        </div>
                                        <div className="preview">
                                            <ul>
                                                <li>apiKeySource:<span>string</span></li>
                                                <li>
                                                    <i className="fa fa-caret-down"></i> binaryMediaTypes:Array <a href="#">[1]</a>
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-caret-right"></i> O:Object
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>createdDate:<span>string</span></li>
                                                <li>description:<span>string</span></li>
                                                <li><i className="fa fa-caret-right"></i> endpointConfiguration:Object</li>
                                                <li>minimumCompressionSize:<span>string</span></li>
                                            </ul>
                                        </div>
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