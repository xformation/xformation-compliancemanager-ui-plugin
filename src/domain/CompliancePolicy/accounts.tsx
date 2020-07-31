import * as React from 'react';

export class Accounts extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            AccountsData: [
                { title: 'AWS (67121322432)' },
                { title: 'AWS (2324354555)' }
            ],
            duplicateAccountData: [
                { title: 'AWS (67121322432)' },
                { title: 'AWS (2324354555)' }
            ],
        };
    }

    displaAaccountsData = () => {
        let retData = [];
        for (let i = 0; i < this.state.AccountsData.length; i++) {
            let responseData = this.state.AccountsData[i];
            retData.push(
                <li>
                    <div className="pointer-label">
                        <input type="checkbox" className="checkbox" /> {responseData.title}
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
        const { duplicateAccountData } = this.state;
        var searchResult = [];
        for (let i = 0; i < duplicateAccountData.length; i++) {
            if (duplicateAccountData[i].title.indexOf(value) !== -1 || value === '') {
                searchResult.push(duplicateAccountData[i]);
            }
        }
        this.setState({
            AccountsData: searchResult,
        });
    }

    render() {
        return (
            <div className="d-inline-block width-100 compliance-account">
                <div className="compliance-account-heading">
                    <div className="d-inline-block width-50">
                        <strong>Select Accounts</strong>
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
                            <input type="checkbox" className="checkbox" /> Accounts
                    </div>
                    </h5>
                    <ul>
                        {this.displaAaccountsData()}
                    </ul>
                </div>
                <div className="d-block text-center next">
                    <button className="blue-button m-r-0 m-b-0">Next</button>
                </div>
            </div>
        );
    }
}