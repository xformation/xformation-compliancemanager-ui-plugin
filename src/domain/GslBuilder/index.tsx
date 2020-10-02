import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import awsLogo from '../../img/amazon-logo.png';
import microsoftAzureLogo from '../../img/microsoftazure.png';
import gcpLogo from '../../img/google-cloud.png';
import KubernetesLogo from '../../img/kubernetes.png';
import ApiGateway from '../../img/ApiGateway.png';
import ElasticIP from '../../img/ElasticIP.png';
import Route53HostedZone from '../../img/Route53HostedZone.png';
import TranstGateway from '../../img/TranstGateway.png';
import ApplicationLoadBalancer from '../../img/ApplicationLoadBalancer.png';
import NACL from '../../img/NACL.png';
import Route53RecordSetGroup from '../../img/Route53RecordSetGroup.png';
import VPNConnection from '../../img/VPNConnection.png';
import CloudFront from '../../img/CloudFront.png';
import NetworkInterface from '../../img/NetworkInterface.png';
import RouteTable from '../../img/RouteTable.png';
import VPNGateway from '../../img/VPNGateway.png';
import CustomerGateway from '../../img/CustomerGateway.png';
import NetworkLoadBalancer from '../../img/NetworkLoadBalancer.png';
import SecurityGroup from '../../img/SecurityGroup.png';
import VpcEndpoint from '../../img/VpcEndpoint.png';
import ELB from '../../img/ELB.png';
import Route53Domain from '../../img/Route53Domain.png';
import Subnet from '../../img/Subnet.png';
import WAFRegional from '../../img/WAFRegional.png';
import AutoScalingGroup from '../../img/AutoScalingGroup.png';
import EcsService from '../../img/EcsService.png';
import EksCluster from '../../img/EksCluster.png';
import Lambda from '../../img/Lambda.png';
import ECSCluster from '../../img/ECSCluster.png';
import EcsTask from '../../img/EcsTask.png';
import Instance from '../../img/Instance.png';
import VPC from '../../img/VPC.png';
import lam from '../../img/lam.png';
import lamPolicy from '../../img/lamPolicy.png';
import lamServeCertificate from '../../img/lamServeCertificate.png';
import KMS from '../../img/KMS.png';
import lamGroup from '../../img/lamGroup.png';
import lamRole from '../../img/lamRole.png';
import lamUser from '../../img/lamUser.png';
import Account from '../../img/Account.png';
import CloudTrail from '../../img/CloudTrail.png';
import ConfigSetting from '../../img/ConfigSetting.png';
import AcmCertificate from '../../img/AcmCertificate.png';
import CloudWatchEventsRule from '../../img/CloudWatchEventsRule.png';
import Organization from '../../img/Organization.png';
import AMI from '../../img/AMI.png';
import EFS from '../../img/EFS.png';
import Bucket from '../../img/53Bucket.png';
import Volume from '../../img/Volume.png';
import DynamoDbtable from '../../img/DynamoDbtable.png';
import ElastiCache from '../../img/ElastiCache.png';
import RDS from '../../img/RDS.png';
import Redshift from '../../img/Redshift.png';
import ElasticSrarchDomain from '../../img/ElasticSrarchDomain.png';
import EmrCluster from '../../img/EmrCluster.png';
import Kinesis from '../../img/Kinesis.png';
import SnsTopic from '../../img/SnsTopic.png';
import Sqs from '../../img/Sqs.png';
import SageMakerNotebook from '../../img/SageMakerNotebook.png';

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
                label: "Compiiance | Dashboard",
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
                                            <Link to={`${config.basePath}/apigateway`}>
                                                <span><img src={ApiGateway} alt="" /></span>
                                                <p>ApiGateway</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={ElasticIP} alt="" /></span>
                                                <p>ElasticIP</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Route53HostedZone} alt="" /></span>
                                                <p>Route53HostedZone</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={TranstGateway} alt="" /></span>
                                                <p>TranstGateway</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={ApplicationLoadBalancer} alt="" /></span>
                                                <p>ApplicationLoadBalancer</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={NACL} alt="" /></span>
                                                <p>NACL</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Route53RecordSetGroup} alt="" /></span>
                                                <p>Route53RecordSetGroup</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={VPNConnection} alt="" /></span>
                                                <p>VPNConnection</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={CloudFront} alt="" /></span>
                                                <p>CloudFront</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={NetworkInterface} alt="" /></span>
                                                <p>NetworkInterface</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={RouteTable} alt="" /></span>
                                                <p>RouteTable</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={VPNGateway} alt="" /></span>
                                                <p>VPNGateway</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={CustomerGateway} alt="" /></span>
                                                <p>CustomerGateway</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={NetworkLoadBalancer} alt="" /></span>
                                                <p>NetworkLoadBalancer</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={SecurityGroup} alt="" /></span>
                                                <p>SecurityGroup</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={VpcEndpoint} alt="" /></span>
                                                <p>VpcEndpoint</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={ELB} alt="" /></span>
                                                <p>ELB</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Route53Domain} alt="" /></span>
                                                <p>Route53Domain</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Subnet} alt="" /></span>
                                                <p>Subnet</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={WAFRegional} alt="" /></span>
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
                                                <span><img src={AutoScalingGroup} alt="" /></span>
                                                <p>AutoScalingGroup</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={EcsService} alt="" /></span>
                                                <p>EcsService</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={EksCluster} alt="" /></span>
                                                <p>EksCluster</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Lambda} alt="" /></span>
                                                <p>Lambda</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={ECSCluster} alt="" /></span>
                                                <p>ECSCluster</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={EcsTask} alt="" /></span>
                                                <p>EcsTask</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Instance} alt="" /></span>
                                                <p>Instance</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={VPC} alt="" /></span>
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
                                                <span><img src={lam} alt="" /></span>
                                                <p>lam</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={lamPolicy} alt="" /></span>
                                                <p>lamPolicy</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={lamServeCertificate} alt="" /></span>
                                                <p>lamServeCertificate</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={KMS} alt="" /></span>
                                                <p>KMS</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={lamGroup} alt="" /></span>
                                                <p>lamGroup</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={lamRole} alt="" /></span>
                                                <p>lamRole</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={lamUser} alt="" /></span>
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
                                                <span><img src={Account} alt="" /></span>
                                                <p>Account</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={CloudTrail} alt="" /></span>
                                                <p>CloudTrail</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={ConfigSetting} alt="" /></span>
                                                <p>ConfigSetting</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={AcmCertificate} alt="" /></span>
                                                <p>AcmCertificate</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={CloudWatchEventsRule} alt="" /></span>
                                                <p>CloudWatchEventsRule</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Organization} alt="" /></span>
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
                                                <span><img src={AMI} alt="" /></span>
                                                <p>AMI</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={EFS} alt="" /></span>
                                                <p>EFS</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Bucket} alt="" /></span>
                                                <p>53Bucket</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Volume} alt="" /></span>
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
                                                <span><img src={DynamoDbtable} alt="" /></span>
                                                <p>DynamoDbtable</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={ElastiCache} alt="" /></span>
                                                <p>ElastiCache</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={RDS} alt="" /></span>
                                                <p>RDS</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Redshift} alt="" /></span>
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
                                                <span><img src={ElasticSrarchDomain} alt="" /></span>
                                                <p>ElasticSrarchDomain</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={EmrCluster} alt="" /></span>
                                                <p>EmrCluster</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Kinesis} alt="" /></span>
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
                                                <span><img src={SnsTopic} alt="" /></span>
                                                <p>SnsTopic</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span><img src={Sqs} alt="" /></span>
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
                                                <span><img src={SageMakerNotebook} alt="" /></span>
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