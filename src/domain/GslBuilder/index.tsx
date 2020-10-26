import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { images } from '../../img';
import Utils from '../../utils';

const entBaseClsPkg = "com.synectiks.cms.entities.";

export class GslBuilder extends React.Component<any, any> {
    breadCrumbs: any;

    constructor(props: any) {
        super(props);
        this.state = {
            cldByGroup: []
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

    componentDidMount() {
        // let url: String = config.LIST_ALL_CLD_GRP;
        // if (this.state.cldName) {
        //     url  += "?cloudName=" + this.state.cldName;
        // }
        // console.log("url: " + url);
		// Utils.getReq(url)
		// 	.then((response: any) => {
		// 		this.setState({
		// 			cldByGroup: response.data
		// 		});
        //         this.getCloudNames();
		// 	});
        // console.log("cldByGroup: ", this.state.cldByGroup);
        this.setState({
            cldByGroup: [{"id":27,"createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null,"cloudName":"AWS","groupName":"Network","entity":"com.synecticks.common.entities.ApiGateway"},{"id":23,"createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null,"cloudName":"AWS","groupName":"Network","entity":"com.synecticks.common.entities.Network"},{"id":25,"createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null,"cloudName":"AWS","groupName":"User","entity":"com.synecticks.common.entities.Password"}]
        });
    };

    getCloudNames = () => {
        console.log("cloud groups", this.state.cldByGroup);
        const cld: Array<string> = [];
        if (this.state.cldByGroup) {
            this.state.cldByGroup.map((item: any) => {
                if (cld.indexOf(item.cloudName) < 0) {
                    cld.push(item.cloudName);
                }
            });
        }
        console.log("unique clouds", cld);
        if (cld.length > 0) {
            this.setState({
                clds: cld
            });
        }
    }

    cloudSelection = (e: any) => {
        const sel = e.target.value;
        if (e.target.checked) {
            this.resetGroups(sel);
        }
    }

    resetGroups = (selCld: string) => {
        this.setState({
            selCloud: selCld
        });
    }

    getGroupBody = () => {
        if (!this.state.cldByGroup) {
            return;
        }
        let retData: Array<any> = [];
        this.state.cldByGroup.map((item: any) => {
            let grp:string = "";
            if (this.state.selCloud === item.cloudName) {
                if (item.groupName != grp) {
                    grp = item.groupName;
                    retData.push(
                    <div className="items">
                        <h4>{grp}</h4>
                        <ul>
                        {this.getGroupEntities(grp)}
                        </ul>
                    </div>); 
                }
            }
        })
        return retData;
    }

    getGroupEntities = (grp: any) => {
        let retData: Array<any> = [];
        this.state.cldByGroup.map((item: any) => {
            if (this.state.selCloud === item.cloudName && item.groupName != grp) {
                retData.push(
                    <li>
                        <Link to={`${config.basePath}/editorgslbuilder?cls=${item.entity}`}>
                            <span><img src={images.ApiGateway} alt="" /></span>
                            <p>{item.entity.replace(entBaseClsPkg, '')}</p>
                        </Link>
                    </li>
                );
            }
        });
        return retData;
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
                            {this.state.clds && this.state.clds.map((cld: string) => {
                                <li>
                                    <a href="#">
                                        <input type="radio" name="clouds" id={cld} value={cld} onChange={this.cloudSelection} />
                                        {/* <span><img src={images.awsLogo} alt="" /></span> */}
                                        <label htmlFor={cld}>{cld}</label>
                                    </a>
                                </li>
                            })
                            }
                            </ul>
                        </div>
                        {/* <div className="gsl-editor-radio">
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
                        </div> */}
                        <div className="gsl-editor-items">
                            <h3>Select the context from the items below</h3>
                            <div className="item-content">
                                { this.getGroupBody() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};