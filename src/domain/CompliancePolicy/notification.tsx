import * as React from 'react';

export class Notification extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            NotificationData: [
                { title: 'Notification 1' },
                { title: 'Notification 2' },
                { title: 'Notification 3' },
                { title: 'Notification 4' }
            ],
            duplicateNotificationData: [
                { title: 'Notification 1' },
                { title: 'Notification 2' },
                { title: 'Notification 3' },
                { title: 'Notification 4' }
            ],
        };
    }

    displaNotificationsData = () => {
        let retData = [];
        for (let i = 0; i < this.state.NotificationData.length; i++) {
            let responseData = this.state.NotificationData[i];
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
        const { duplicateNotificationData } = this.state;
        var searchResult = [];
        for (let i = 0; i < duplicateNotificationData.length; i++) {
            if (duplicateNotificationData[i].title.indexOf(value) !== -1 || value === '') {
                searchResult.push(duplicateNotificationData[i]);
            }
        }
        this.setState({
            NotificationData: searchResult,
        });
    }

    render() {
        return (
            <div className="d-inline-block width-100 compliance-account">
                <div className="compliance-account-heading">
                    <div className="d-inline-block width-50">
                        <strong>Select Notification</strong>
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
                            <input type="checkbox" className="checkbox" /> Notification
                        </div>
                    </h5>
                    <ul>
                        {this.displaNotificationsData()}
                    </ul>
                </div>
                {/* <div className="d-block text-center next">
                    <button className="blue-button m-r-0 m-b-0">Save</button>
                </div> */}
            </div>
        );
    }
}