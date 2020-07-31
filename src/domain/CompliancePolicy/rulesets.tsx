import * as React from 'react';

export class Rulesets extends React.Component<any,any>{
    render(){
        return (
            <div className="d-inline-block width-100 compliance-account">
                <div className="compliance-account-heading">
                    <div className="d-inline-block width-50">
                        <strong>Select Ruleset</strong>
                    </div>
                    <div className="d-inline-block width-50 text-right">
                        <div className="d-inline-block form-group search-control-group">
                            <input type="text" className="input-group-text" placeholder="Search" />
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
                        <li>
                            <div className="pointer-label">
                                <input type="checkbox" className="checkbox" /> AWS CCPA Framework
                            </div>
                        </li>
                        <li>
                            <div className="pointer-label">
                                <input type="checkbox" className="checkbox" /> AWS CIS Foundation
                            </div>
                        </li>
                        <li>
                            <div className="pointer-label">
                                <input type="checkbox" className="checkbox" /> AWS CloudGuard Best Practice
                            </div>
                        </li>
                        <li>
                            <div className="pointer-label">
                                <input type="checkbox" className="checkbox" /> AWS CloudGuard ChecklUp
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="d-block text-center next">
                    <button className="blue-button m-r-0 m-b-0">Next</button>
                </div>
            </div>
        );
    }
}