import * as React from 'react';

export class Notification extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            NotificationData: [
                {
                    title: 'Notification',
                    checkValueStatus: false,
                    subData: [
                        {
                            title: 'Notification 1',
                            checkStatus: false
                        },
                        {
                            title: 'Notification 2',
                            checkStatus: false
                        },
                        {
                            title: 'Notification 3',
                            checkStatus: false
                        },
                        {
                            title: 'Notification 4',
                            checkStatus: false
                        },
                    ],
                },
            ],
            duplicateNotificationData: [
                {
                    title: 'Notification',
                    checkValueStatus: false,
                    subData: [
                        {
                            title: 'Notification 1',
                            checkStatus: false
                        },
                        {
                            title: 'Notification 2',
                            checkStatus: false
                        },
                        {
                            title: 'Notification 3',
                            checkStatus: false
                        },
                        {
                            title: 'Notification 4',
                            checkStatus: false
                        },
                    ],
                },
            ],
        };
    }

    displaNotificationsData = () => {
        let retData = [];
        for (let i = 0; i < this.state.NotificationData.length; i++) {
            let responseData = this.state.NotificationData[i];
            const subFolders = responseData.subData;
            const subJSX = [];
            for (let j = 0; j < subFolders.length; j++) {
                const data = subFolders[j];
                subJSX.push(
                    <li>
                        <div className="pointer-label">
                            <input type="checkbox" checked={data.checkStatus} className="checkbox" onClick={() => this.onClickChildCheckbox(i, j)} />{data.title}
                        </div>
                    </li>
                );
            }
            retData.push(
                <div>
                    <h5>
                        <div className="pointer-label">
                            <input type="checkbox" checked={responseData.checkValueStatus} className="checkbox" onChange={(e) => { this.onChangeParentCheckbox(e, i) }} /> {responseData.title}
                        </div>
                    </h5>
                    <ul>
                        {subJSX}
                    </ul>
                </div>
            );
        }
        return retData;
    }

    onChangeParentCheckbox = (e: any, index: any) => {
        const { NotificationData } = this.state;
        const parentCheckbox = NotificationData[index];
        const checked = e.target.checked;
        for (let j = 0; j < parentCheckbox.subData.length; j++) {
            parentCheckbox.subData[j].checkStatus = checked;
            parentCheckbox.checkValueStatus = checked;
        }
        this.setState({
            NotificationData
        })
    }

    onClickChildCheckbox = (parentIndex: any, childIndex: any) => {
        let countCheckedCheckbox = 0;
        const { NotificationData } = this.state;
        const parentCheckbox = NotificationData[parentIndex];
        parentCheckbox.subData[childIndex].checkStatus = !parentCheckbox.subData[childIndex].checkStatus;
        for (let j = 0; j < parentCheckbox.subData.length; j++) {
            if (parentCheckbox.subData[j].checkStatus == true) {
                countCheckedCheckbox++;
            } else {
                countCheckedCheckbox--;
            }
        }
        if (countCheckedCheckbox == parentCheckbox.subData.length) {
            parentCheckbox.checkValueStatus = true;
        } else {
            parentCheckbox.checkValueStatus = false;
        }
        this.setState({
            NotificationData
        })
    }

    onSearchChange = (e: any) => {
        const { value } = e.target;
        this.setState({
            searchKey: value,
        });
        const { duplicateNotificationData } = this.state;
        var searchResult = [];
        var Result = [];
        for (let i = 0; i < duplicateNotificationData.length; i++) {
            let data = duplicateNotificationData[i];
            for (let j = 0; j < data.subData.length; j++) {
                let subData = data.subData[j];
                if (subData.title.indexOf(value) !== -1 || value === '') {
                    Result.push({ 'title': subData.title, 'checkStatus': subData.checkStatus });
                }
            }
            searchResult.push({ 'title': data.title, 'checkValueStatus': data.checkValueStatus, subData: Result });
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
                    {this.displaNotificationsData()}
                </div>
                {/* <div className="d-block text-center next">
                    <button className="blue-button m-r-0 m-b-0">Save</button>
                </div> */}
            </div>
        );
    }
}