import * as React from 'react';

export class Accounts extends React.Component<any,any>{
    render(){
        return (
        <div className="d-inline-block width-100 compliance-account">
            <div className="compliance-account-heading">
                <div className="d-inline-block width-50">
                    <strong>Select Accounts</strong>
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
            <div className="d-block text-center">
                <button className="blue-button m-r-0 m-b-0">Next</button>
            </div>
        </div>
        );
    }
}