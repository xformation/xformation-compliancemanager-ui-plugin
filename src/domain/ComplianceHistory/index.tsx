import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../../components/Breadcrumbs';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import { Progress } from 'reactstrap';
import { Pie, Bar } from 'react-chartjs-2';

export class ComplianceHistory extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            totalPages: '',
            currentPage: 0,
            perPageLimit: 6,
            ruleSetData: [
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: '',
                    title: 'AWS CCPA Framework',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: 'CIS',
                    title: 'AWS CIS Foundation',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: '',
                    title: 'AWS CCPA Framework',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: '',
                    title: 'AWS CCPA Framework',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: 'CIS',
                    title: 'AWS CIS Foundation',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
                {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: '',
                    title: 'AWS CCPA Framework',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                }, {
                    mainTitle: 'RUN ASSESSMENT',
                    subTitle: 'CIS',
                    title: 'AWS CIS Foundation',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
                {
                    mainTitle: 'RUN ASSESSMENT',
                    title: 'AWS CCPA Framework',
                    no_of_rule: '33 Rules | No Policies',
                    company_name: 'California Consumer Privacy Act.',
                    reference: 'https"//oag.ca.gov/privacy/ccpa',
                    menuStatusOpen: false,
                },
            ],
            datasets: [
                {
                    labels: ['lam user', 'S3 Buge', 'Cloud'],
                },
                {
                    label: '',
                    backgroundColor: [
                        '#E31335',
                        '#15C64C',
                        '#3C495A',
                    ],
                    data: [25, 30, 80]
                }
            ],

        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Compliance | Assessment History",
                isCurrentPage: true
            }
        ];

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
        this.calculateTotalPages(searchResult);
        this.setState({
            ruleSetData: searchResult,
            currentPage: 0
        });
    }

    assessmentHandleClick(index: any) {
        const { ruleSetData } = this.state;
        for (let i = 0; i < ruleSetData.length; i++) {
            if (i == index) {
                ruleSetData[i].menuStatusOpen = !ruleSetData[i].menuStatusOpen;
            }
        }
        console.log(ruleSetData);
        this.setState({
            ruleSetData
        })
    };

    componentDidMount() {
        this.calculateTotalPages(this.state.ruleSetData);
    };

    calculateTotalPages = (displayData: any) => {
        const { perPageLimit } = this.state;
        let indexOfLastData = Math.ceil(displayData.length / perPageLimit);
        this.setState({
            totalPages: indexOfLastData,
        });
    };

    displayRuleSetData = () => {
        const { ruleSetData, perPageLimit, currentPage } = this.state;
        const retData = [];
        const length = ruleSetData.length;
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                if (i >= currentPage * perPageLimit && i <= (currentPage * perPageLimit + (perPageLimit - 1))) {
                    const data = ruleSetData[i];
                    retData.push(
                        <div className="d-block width-100 p-b-15 credentials-box failed">
                            <div className="heading d-inline-block">Failed</div>
                            <div className="d-block width-100 p-t-15 p-r-15 p-b-5 p-l-15 credential">
                                <div className="row">
                                    <div className="col-lg-10 col-md-9 col-sm-12">
                                        <div className="d-block width-100 credential-text">
                                            Credentials report was generated in the last 24 hours
                                        </div>
                                        <p className="d-block width-100">
                                            I am should have creadentialReportGeneratedTime after (-24, 'hours')
                                        </p>
                                        <div className="d-block width-100 tasted-boxes">
                                            <div className="d-inline-block p-r-5 tasted-box">
                                                <span className="d-inline-block">1</span> TASTED
                                            </div>
                                            <div className="d-inline-block p-r-5 tasted-box">
                                                <span className="d-inline-block">1</span> RELEVENT
                                            </div>
                                            <div className="d-inline-block p-r-5 tasted-box">
                                                <span className="d-inline-block non-complaint">1</span> NON COMPLAINT
                                            </div>
                                        </div>
                                        <div className="d-inline-block credential-bottom-text">
                                            Prerequisite for CIS AWS Credentials Sections 1.1, 1.2, 1.3, 1.4, 1.12
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-12 high-expand">
                                        <div className="high">HIGH</div>
                                        <div className="expand">Expand</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        } else {
            retData.push(<div className="d-block width-100 there-no-data">There is no data</div>);
        }

        return retData;
    }

    peginationOfBox() {
        const { currentPage, totalPages, ruleSetData } = this.state;
        let rows = [];
        for (let i = 0; i < totalPages; i++) {
            console.log(currentPage);
            rows.push(<li className="" key={i}><a className={currentPage === i ? 'active' : 'deactive'} href="#" onClick={(e) => this.navigatePage('btn-click', e, i)}>{i + 1}</a></li >);
        }
        return (
            <ul>
                <li className="previous">
                    <a className={currentPage === 0 ? 'desable' : 'enable'} href="#" onClick={(e) => this.navigatePage('pre', e, '')}>Previous</a>
                </li>
                {rows}
                <li className="next">
                    <a className={currentPage === this.state.totalPages - 1 ? 'desable' : 'enable'} href="#" onClick={(e) => this.navigatePage('next', e, '')}>Next</a>
                </li>
            </ul>
        );
    }

    navigatePage(target: any, e: any, i: any) {
        const { totalPages, currentPage } = this.state;
        e.preventDefault();
        switch (target) {
            case 'pre':
                if (currentPage !== 0) {
                    this.setState({
                        currentPage: currentPage - 1,
                    });
                }
                break;
            case 'next':
                if (currentPage !== totalPages - 1) {
                    this.setState({
                        currentPage: currentPage + 1,
                    });
                }
                break;
            case 'btn-click':
                this.setState({
                    currentPage: i
                });
                break;
        }
    }

    data = {
        labels: ['Lam', 'Cloud', 'Security',
            'KMS'],
        datasets: [
            {
                label: '',
                backgroundColor: 'rgba(60, 73, 90, 1)',
                borderColor: 'rgba(60, 73, 90, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(60, 73, 90, 1)',
                hoverBorderColor: 'rgba(60, 73, 90, 1)',
                data: [9, 20, -8, -15]
            }
        ]
    };

    singleChartdata = {
        labels: [
            'High',
        ],
        datasets: [{
            data: [100],
            backgroundColor: [
                '#E31335',
            ],
            hoverBackgroundColor: [
                '#E31335',
            ]
        }]
    };

    piedata = {
        labels: [
            'S3 Buge',
            'Cloud',
            'lamUser'
        ],
        datasets: [{
            data: [15, 17, 90],
            backgroundColor: [
                '#E31335',
                '#15C64C',
                '#3C495A'
            ],
            hoverBackgroundColor: [
                '#E31335',
                '#15C64C',
                '#3C495A'
            ]
        }]
    };

    render() {
        const { perPageLimit, ruleSetData } = this.state;
        const now = 60;
        return (
            <div className="compliancemanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="COMPLIANCE | ASSESSMENT HISTORY" />
                <div className="compliancemanager-page-container">
                    <div className="common-container results-container">
                        <div className="d-block heading">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h2><strong>RESULTS</strong> ( Ruleset: AWS CCP Framework, Account: AWS | Mumbai )</h2>
                                    <p>July 16 2020 05 : 20 PM</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 text-right">
                                    <a href="#" className="white-button m-r-0 min-width-inherit width-auto back-button">
                                        <i className="fa fa-arrow-circle-o-left"></i> Back
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-block p-t-20">
                            <div className="d-inline-block results-left-chart">
                                <div className="d-inline-block chart-box">
                                    <div className="d-block heading">
                                        <strong>Test Score</strong>
                                    </div>
                                    <div className="d-block chart-inner">
                                        <div className="text-center">{now}%</div>
                                        <Progress color="success" value={now} />
                                    </div>
                                </div>
                                <div className="d-inline-block chart-box">
                                    <div className="d-block heading">
                                        <strong>Failed Tests by Rule Serverity</strong>
                                    </div>
                                    <div className="d-block chart-inner">
                                        <Pie
                                            data={this.singleChartdata}
                                            options={{
                                                legend: {
                                                    display: true,
                                                    position: 'right'
                                                }
                                            }} />
                                    </div>
                                </div>
                                <div className="d-inline-block chart-box green-chart">
                                    <div className="d-block heading">
                                        <strong>Entitles by Type, Pass Vs Fail</strong>
                                    </div>
                                    <div className="d-block chart-inner">
                                        <Bar
                                            data={this.data}
                                            width={100}
                                            height={100}
                                            options={{
                                                maintainAspectRatio: false,
                                                legend: {
                                                    display: false,
                                                    position: 'right'
                                                },
                                                scales: {
                                                    yAxes: [{
                                                        ticks: {
                                                            fontColor: '#3C495A',
                                                            fontSize: 12
                                                        },
                                                    }],
                                                    xAxes: [{
                                                        ticks: {
                                                            fontColor: '#ffff',
                                                            fontSize: 12
                                                        },
                                                    }]
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="d-inline-block chart-box">
                                    <div className="d-block heading">
                                        <strong>Tested Entities</strong>
                                    </div>
                                    <div className="d-block chart-inner">
                                        <Pie
                                            data={this.piedata}
                                            options={{
                                                legend: {
                                                    display: true,
                                                    position: 'right'
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="d-inline-block float-right results-right-chart">
                                <div className="d-block map-box">
                                    <div className="d-block heading">
                                        <strong>Distribution by Geolocation</strong>
                                    </div>
                                    <div className="d-block map-inner">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container filter-container">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="rulesGroup">
                                        Rules&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="selectRules">
                                        <option value="" selected>Select Rules</option>
                                        <option value="All">All</option>
                                        <option value="Passed">Passed</option>
                                        <option value="Failed">Failed</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="resourcesGroup">
                                        Severity&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="selectSeverity">
                                        <option value="">Select Severity</option>
                                        <option value="All">All</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="typeGroup">
                                        Type&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="selectType">
                                        <option value="All">All</option>
                                        <option value="S3Bucket">S3Bucket</option>
                                        <option value="CloudTrail">CloudTrail</option>
                                        <option value="Lambda">Lambda</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="complianceSectionGroup">
                                        Compliance Section&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-info-circle"></i>
                                    </label>
                                    <select className="form-control" id="ComplianceSection">
                                        <option value="selectComplianceSection">Select Compliance Section</option>
                                        <option value="All">All</option>
                                        <option value="1798185">1798 185</option>
                                        <option value="1798150">1798 150</option>
                                        <option value="1798105">1798 105</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="d-inline-block form-group search-control-group">
                                    <form>
                                        <input type="text" onChange={this.onSearchChange} value={this.state.searchKey} className="input-group-text" placeholder="Search" />
                                        <button>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="d-block width-100 p-t-20 showing-showing-text">
                            <h3>Showing 2 of 10 results</h3>
                        </div>
                        <div className="d-block width-100 p-t-20">
                            {this.displayRuleSetData()}
                        </div>
                        {ruleSetData.length > 0 && <div className="d-block width-100 text-right pagination">
                            {this.peginationOfBox()}
                        </div>}
                    </div>
                </div>
            </div>

        );
    }
};