import * as React from 'react';

export class Rulesets extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            ruleSetData: [
                { title: 'AWS CCPA Framework' },
                { title: 'AWS CIS Foundation' },
                { title: 'AWS CloudGuard Best Practice' },
                { title: 'AWS CloudGuard ChecklUp' }
            ],
            duplicateruleSetData: [
                { title: 'AWS CCPA Framework' },
                { title: 'AWS CIS Foundation' },
                { title: 'AWS CloudGuard Best Practice' },
                { title: 'AWS CloudGuard ChecklUp' }
            ],
        };
    }

    displaRulesetData = () => {
        let retData = [];
        for (let i = 0; i < this.state.ruleSetData.length; i++) {
            let responseData = this.state.ruleSetData[i];
            retData.push(
                <li>
                    <div className="pointer-label">
                        <input type="checkbox" className="checkbox" />{responseData.title}
                    </div>
                </li>
            );
        }
        return retData;
    }

    onSearchChange = (e: any) => {
        const { value } = e.target;
        this.setState({
            searchKey: value,
        });
        const { duplicateruleSetData } = this.state;
        var searchResult = [];
        for (let i = 0; i < duplicateruleSetData.length; i++) {
            if (duplicateruleSetData[i].title.indexOf(value) !== -1 || value === '') {
                searchResult.push(duplicateruleSetData[i]);
            }
        }
        this.setState({
            ruleSetData: searchResult,
        });
    }

    render() {
        return (
            <div className="d-inline-block width-100 compliance-account">
                <div className="compliance-account-heading">
                    <div className="d-inline-block width-50">
                        <strong>Select Ruleset</strong>
                    </div>
                    <div className="d-inline-block width-50 text-right">
                        <div className="d-inline-block form-group search-control-group">
                            <input type="text" onChange={this.onSearchChange} value={this.state.searchKey} className="input-group-text" placeholder="Search" />
                            <button>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="compliance-account-box">
                    <h5>
                        <div className="pointer-label">
                            <input type="checkbox" className="checkbox" /> Ruleset
                        </div>
                    </h5>
                    <ul>
                        {this.displaRulesetData()}
                    </ul>
                </div>
                {/* <div className="d-block text-center next">
                    <button className="blue-button m-r-0 m-b-0">Next</button>
                </div> */}
            </div>
        );
    }
}