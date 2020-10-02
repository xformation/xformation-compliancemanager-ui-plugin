import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import awsLogo from '../../img/amazon-logo.png';
import microsoftAzureLogo from '../../img/microsoftazure.png';
import gcpLogo from '../../img/google-cloud.png';
import KubernetesLogo from '../../img/kubernetes.png';
import Tree from './../../components/tree';

export class EditorGslBuilder extends React.Component<any, any> {
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
                <div className="compliancemanager-page-container aipgateway-page-container">
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
                                <div className="row">
                                    <div className="col-md-3 col-sm-3">
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
                                    <div className="col-md-3 col-sm-3">
                                        <div className="form-group filter-control-group">
                                            <label htmlFor="Region">Region</label>
                                            <select className="form-control" id="Region">
                                                <option value="">All</option>
                                                <option value="">abc</option>
                                                <option value="">abc</option>
                                                <option value="">abc</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        <div className="form-group filter-control-group">
                                            <label htmlFor="vpc">VPC</label>
                                            <select className="form-control" id="vpc">
                                                <option value="">All</option>
                                                <option value="">abc</option>
                                                <option value="">abc</option>
                                                <option value="">abc</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        <div className="p-t-20 form-group">
                                            <a href="#" className="blue-button m-r-0 m-b-0 runtest-button">
                                                <i className="fa fa-play-circle"></i> RUN TEST
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="editor-add-code">
                                    <div className="d-inline-block code">
                                        <button>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                        <p>ApiGateway</p>
                                    </div>
                                    <div className="d-inline-block code">
                                        <button>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                        <p>Should have</p>
                                    </div>
                                </div>
                                <div className="editor-code">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="editor-code-heading">Operators:</div>
                                        </div>
                                        <div className="col-md-10">
                                            <span>(</span>
                                            <span>)</span>
                                            <span>and</span>
                                            <span>or</span>
                                            <span>not</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="editor-code">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="editor-code-heading">Properties:</div>
                                        </div>
                                        <div className="col-md-10">
                                            <span>apiKeySource</span>
                                            <span>binaryMediaTypes</span>
                                            <span>createdDate</span>
                                            <span>description</span>
                                            <span>endPointConfiguration</span>
                                            <span>compressionsize</span>
                                            <span>policy</span>
                                            <span>version</span>
                                            <span>resources</span>
                                            <span>authorizers</span>
                                            <span>vpc</span>
                                            <span>id</span>
                                            <span>type</span>
                                            <span>name</span>
                                            <span>accountnumber</span>
                                            <span>region</span>
                                            <span>source</span>
                                            <span>tags</span>
                                            <span>externalfindigs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="context-preview-box">
                                    <h4>Context Preview</h4>
                                    <div className="context-preview">
                                        <div className="d-block form-group filter-search-control">
                                            <form>
                                                <input type="text" className="input-group-text" placeholder="Search" value="" />
                                                <button><i className="fa fa-search"></i></button>
                                            </form>
                                        </div>
                                        <Tree />
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