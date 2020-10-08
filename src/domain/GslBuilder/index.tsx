import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { images } from '../../img';

export class GslBuilder extends React.Component<any, any> {
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
                label: "Gsl Builder",
                isCurrentPage: true
            }
        ];

    }

    render() {
        return (
            <div className="compliance-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="COMPLIANCE | DASHBOARD" />
                <div className="compliancemanager-page-container gslbuilder-page-container">
                    <div className="common-container">
                        <div className="gsl-editor-logos">
                            <h3>GSL Editor</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <span><img src={images.awsLogo} alt="" /></span>
                                        <p>AWS</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><img src={images.microsoftAzureLogo} alt="" /></span>
                                        <p>Azure</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><img src={images.gcpLogo} alt="" /></span>
                                        <p>GCP</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><img src={images.KubernetesLogo} alt="" /></span>
                                        <p>Kubernetes</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
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
                        <div className="gsl-editor-items">
                            <h3>Select the context from the items below</h3>
                            <div className="item-content">
                                <div className="items">
                                    <h4>Networking & Content Delivery</h4>
                                    <ul>
                                        <li>
                                            <Link to={`${config.basePath}/editorgslbuilder`}>
                                                <span><img src={images.ApiGateway} alt="" /></span>
                                                <p>ApiGateway</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.ElasticIP} alt="" /></span>
                                                <p>ElasticIP</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Route53HostedZone} alt="" /></span>
                                                <p>Route53HostedZone</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.TranstGateway} alt="" /></span>
                                                <p>TranstGateway</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.ApplicationLoadBalancer} alt="" /></span>
                                                <p>ApplicationLoadBalancer</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.NACL} alt="" /></span>
                                                <p>NACL</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Route53RecordSetGroup} alt="" /></span>
                                                <p>Route53RecordSetGroup</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.VPNConnection} alt="" /></span>
                                                <p>VPNConnection</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.CloudFront} alt="" /></span>
                                                <p>CloudFront</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.NetworkInterface} alt="" /></span>
                                                <p>NetworkInterface</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.RouteTable} alt="" /></span>
                                                <p>RouteTable</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.VPNGateway} alt="" /></span>
                                                <p>VPNGateway</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.CustomerGateway} alt="" /></span>
                                                <p>CustomerGateway</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.NetworkLoadBalancer} alt="" /></span>
                                                <p>NetworkLoadBalancer</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.SecurityGroup} alt="" /></span>
                                                <p>SecurityGroup</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.VpcEndpoint} alt="" /></span>
                                                <p>VpcEndpoint</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.ELB} alt="" /></span>
                                                <p>ELB</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Route53Domain} alt="" /></span>
                                                <p>Route53Domain</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Subnet} alt="" /></span>
                                                <p>Subnet</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.WAFRegional} alt="" /></span>
                                                <p>WAFRegional</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="items">
                                    <h4>Compute</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.AutoScalingGroup} alt="" /></span>
                                                <p>AutoScalingGroup</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.EcsService} alt="" /></span>
                                                <p>EcsService</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.EksCluster} alt="" /></span>
                                                <p>EksCluster</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Lambda} alt="" /></span>
                                                <p>Lambda</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.ECSCluster} alt="" /></span>
                                                <p>ECSCluster</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.EcsTask} alt="" /></span>
                                                <p>EcsTask</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Instance} alt="" /></span>
                                                <p>Instance</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.VPC} alt="" /></span>
                                                <p>VPC</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="items">
                                    <h4>Security, Identity & Compliance</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.lam} alt="" /></span>
                                                <p>lam</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.lamPolicy} alt="" /></span>
                                                <p>lamPolicy</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.lamServeCertificate} alt="" /></span>
                                                <p>lamServeCertificate</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.KMS} alt="" /></span>
                                                <p>KMS</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.lamGroup} alt="" /></span>
                                                <p>lamGroup</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.lamRole} alt="" /></span>
                                                <p>lamRole</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.lamUser} alt="" /></span>
                                                <p>lamUser</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="items">
                                    <h4>Management Tools</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Account} alt="" /></span>
                                                <p>Account</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.CloudTrail} alt="" /></span>
                                                <p>CloudTrail</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.ConfigSetting} alt="" /></span>
                                                <p>ConfigSetting</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.AcmCertificate} alt="" /></span>
                                                <p>AcmCertificate</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.CloudWatchEventsRule} alt="" /></span>
                                                <p>CloudWatchEventsRule</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Organization} alt="" /></span>
                                                <p>Organization</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="items">
                                    <h4>Storage</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.AMI} alt="" /></span>
                                                <p>AMI</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.EFS} alt="" /></span>
                                                <p>EFS</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Bucket} alt="" /></span>
                                                <p>53Bucket</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Volume} alt="" /></span>
                                                <p>Volume</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="items">
                                    <h4>Database</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.DynamoDbtable} alt="" /></span>
                                                <p>DynamoDbtable</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.ElastiCache} alt="" /></span>
                                                <p>ElastiCache</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.RDS} alt="" /></span>
                                                <p>RDS</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Redshift} alt="" /></span>
                                                <p>Redshift</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="items">
                                    <h4>Analytics</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.ElasticSrarchDomain} alt="" /></span>
                                                <p>ElasticSrarchDomain</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.EmrCluster} alt="" /></span>
                                                <p>EmrCluster</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Kinesis} alt="" /></span>
                                                <p>Kinesis</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="items">
                                    <h4>Application Integration</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.SnsTopic} alt="" /></span>
                                                <p>SnsTopic</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.Sqs} alt="" /></span>
                                                <p>Sqs</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="items">
                                    <h4>Machine Learning</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span><img src={images.SageMakerNotebook} alt="" /></span>
                                                <p>SageMakerNotebook</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};