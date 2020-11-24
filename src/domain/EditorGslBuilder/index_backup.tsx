import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import awsLogo from '../../img/amazon-logo.png';
import microsoftAzureLogo from '../../img/microsoftazure.png';
import gcpLogo from '../../img/google-cloud.png';
import KubernetesLogo from '../../img/kubernetes.png';
import Tree from './../../components/tree';
import { OpenDescardPopup } from './../../components/OpenDescardPopup';
import { ApiKeySourcePopup } from './../../components/ApiKeySourcePopup';
import { config } from '../../config';
import { dummyData } from './dummyData';
// import { properties } from './properties';

export class EditorGslBuilder extends React.Component<any, any> {
    breadCrumbs: any;
    openDiscardRef: any;
    ApikeysourceRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            descardText: '',
            searchKey: '',
            
            operators: [
                { value: 'operator', name: '(' },
                { value: 'operator', name: ')' },
                { value: 'operator', name: '=' },
                { value: 'operator', name: '!=' },
                { value: 'function', name: 'and' },
                { value: 'function', name: 'or' },
                { value: 'function', name: 'not' },
                { value: 'function', name: 'like' },
                { value: 'function', name: 'Unlike' },
                { value: 'function', name: 'regexMatch' }
            ],
            functions: [
                { value: 'function', name: 'apiKeySource' },
                { value: 'function', name: 'binaryMediaTypes' },
                { value: 'function', name: 'createdDate' },
                { value: 'function', name: 'description' },
                { value: 'function', name: 'endPointConfiguration' },
                { value: 'function', name: 'compressionsize' },
                { value: 'function', name: 'policy' },
                { value: 'function', name: 'version' },
                { value: 'function', name: 'resources' },
                { value: 'function', name: 'authorizers' },
                { value: 'function', name: 'vpc' },
                { value: 'function', name: 'id' },
                { value: 'function', name: 'type' },
                { value: 'function', name: 'name' },
                { value: 'function', name: 'accountnumber' },
                { value: 'function', name: 'region' },
                { value: 'function', name: 'source' },
                { value: 'function', name: 'tags' },
                { value: 'function', name: 'externalfindigs' },
            ],
            query: [],
            treeData: [
                {
                    name: 'apiKeySource:',
                    type: 'string'
                },
                {
                    name: 'binaryMediaTypes:',
                    type: 'Array',
                    length: '[1]',
                    isOpened: false,
                    subData: [
                        {
                            name: 'O:', type: 'object', isOpened: false, subData: [
                                { name: 'xyz:', type: 'string' }
                            ]
                        },
                        { name: 'CreatedDate:', type: 'int' },
                        { name: 'description:', type: 'string' },

                    ]
                },
                {
                    name: 'endPointConfiguration:',
                    type: 'object',
                    isOpened: false,
                    subData: [],
                },
                { name: 'MinimumCompretionSize:', type: 'string' },
                {
                    name: 'policy:',
                    type: 'object',
                    subData: [
                        { name: 'CreatedDate:', type: 'int' },
                        { name: 'description:', type: 'string' },
                    ],
                    isOpened: false,
                },
                { name: 'Version:', type: 'String', },
                {
                    name: 'resources:',
                    type: 'Array',
                    length: '[1]',
                    isOpened: false,
                    subData: [
                        {
                            name: 'O:', type: 'object', isOpened: false, subData: [
                                { name: 'abc:', type: 'string' }
                            ]
                        },
                        { name: 'CreatedDate:', type: 'int' },
                        { name: 'description:', type: 'string' },

                    ]
                },
                {
                    name: 'Authorizers:',
                    type: 'Array',
                    length: '[1]',
                    subData: [],
                    isOpened: false,
                },
                {
                    name: 'VPC:',
                    type: 'object',
                    subData: [],
                    isOpened: false,
                },
                { name: 'id:', type: 'String' },
                { name: 'Types:', type: 'String' },
                { name: 'Name:', type: 'String' },
                { name: 'Dome9id:', type: 'String' },
                { name: 'AccountNumber:', type: 'String' },
                { name: 'Region:', type: 'String' },
            ],
            treeDuplicateData: [
                {
                    name: 'apiKeySource:',
                    type: 'string'
                },
                {
                    name: 'binaryMediaTypes:',
                    type: 'Array',
                    length: '[1]',
                    isOpened: false,
                    subData: [
                        {
                            name: 'O:', type: 'object', isOpened: false, subData: [
                                { name: 'xyz:', type: 'string' }
                            ]
                        },
                        { name: 'CreatedDate:', type: 'int' },
                        { name: 'description:', type: 'string' },

                    ]
                },
                {
                    name: 'endPointConfiguration:',
                    type: 'object',
                    isOpened: false,
                    subData: [],
                },
                { name: 'MinimumCompretionSize:', type: 'string' },
                {
                    name: 'policy:',
                    type: 'object',
                    subData: [
                        { name: 'CreatedDate:', type: 'int' },
                        { name: 'description:', type: 'string' },
                    ],
                    isOpened: false,
                },
                { name: 'Version:', type: 'String', },
                {
                    name: 'resources:',
                    type: 'Array',
                    length: '[1]',
                    isOpened: false,
                    subData: [
                        {
                            name: 'O:', type: 'object', isOpened: false, subData: [
                                { name: 'abc:', type: 'string' }
                            ]
                        },
                        { name: 'CreatedDate:', type: 'int' },
                        { name: 'description:', type: 'string' },

                    ]
                },
                {
                    name: 'Authorizers:',
                    type: 'Array',
                    length: '[1]',
                    subData: [],
                    isOpened: false,
                },
                {
                    name: 'VPC:',
                    type: 'object',
                    subData: [],
                    isOpened: false,
                },
                { name: 'id:', type: 'String' },
                { name: 'Types:', type: 'String' },
                { name: 'Name:', type: 'String' },
                { name: 'Dome9id:', type: 'String' },
                { name: 'AccountNumber:', type: 'String' },
                { name: 'Region:', type: 'String' },
            ],
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
                label: "Editor Gsl Builder",
                isCurrentPage: true
            }
        ];
        this.openDiscardRef = React.createRef();
        this.ApikeysourceRef = React.createRef();
    }

    componentDidMount() {
        //make an api call here
        // this.setState({

        // });
        let getParamByName = this.getParameterByName("cls", window.location.href);
        if(getParamByName){
            const {query} = this.state;
            query.push({
                value: 'function',
                name: getParamByName
            });
            this.setState({
                query
            });
        }
    }

    getParameterByName = (name: any, url: any) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };

    onSearchChange = (e: any) => {
        const { value } = e.target;
        this.setState({
            searchKey: value,
        });
        const { treeDuplicateData } = this.state;
        var searchResult = [];
        for (let i = 0; i < treeDuplicateData.length; i++) {
            if (treeDuplicateData[i].name.indexOf(value) !== -1 || value === '') {
                searchResult.push(treeDuplicateData[i]);
            } else if (treeDuplicateData[i].name.toLowerCase().indexOf(value) !== -1 || value === '') {
                searchResult.push(treeDuplicateData[i]);
            }
        }
        this.setState({
            treeData: searchResult,
        });
    }

    addFunctionToEditor = (item: any, index: any) => {
        const { query, functions } = this.state;
        let lastData = '';
        let lastindex = 0;
        for (let i = 0; i < query.length; i++) {
            lastData = query[i].name;
            lastindex = i;
        }
        if (lastData == '(') {
            let newString = lastData + item.name;
            query.splice(lastindex, 1);
            query.push({ value: 'function', name: newString })
        } else {
            query.push(item);
        }
        functions.splice(index, 1);
        this.setState({
            query,
            functions
        });
    }

    addOperatorToEditor = (data: any, index: any) => {
        const { query, operators } = this.state;
        if (data.value == 'operator') {
            if (data.name == '(') {
                query.push(data);
            } else if (data.name == '!=' || data.name == '=' || data.name == ')') {
                let lastData = '';
                let lastindex = 0;
                for (let i = 0; i < query.length; i++) {
                    lastData = query[i].name;
                    lastindex = i;
                }
                lastData = lastData + data.name;
                query.splice(lastindex, 1);
                query.push({ value: 'operator', name: lastData });
                if (data.name == '=') {
                    this.ApikeysourceRef.current.toggle();
                }
            }


        } else {
            query.push(data);
            operators.splice(index, 1);
        }

        this.setState({
            query,
            operators
        })
    }

    removeFunctionFromEditor = (data: any) => {
        this.openDiscardRef.current.toggle();
        let functionArrayData = [];
        const { query, functions } = this.state;
        for (let j = 0; j < query.length; j++) {
            if (data == query[j].name) {
                data = data.split("(").toString().split(")");
                functionArrayData.push({ value: 'function', name: data });
                query.splice(j, 1);
            }
        }
        for (let i = 0; i < functions.length; i++) {
            let row = functions[i];
            functionArrayData.push(row);
        }
        this.setState({
            functions: functionArrayData,
            query
        })
    }

    addSourceKey = (addData: any) => {
        this.ApikeysourceRef.current.toggle();
        const { query } = this.state;
        let lastData = '';
        let lastIndex = 0;
        for (let j = 0; j < query.length; j++) {
            lastData = query[j].name;
            lastIndex = j;
        }
        lastData = lastData + addData;
        query.splice(lastIndex, 1);
        query.push({ value: 'function', name: lastData });
        this.setState({
            query
        })
    }

    onClickOpenDescardPopup = (item: any) => {
        this.setState({
            descardText: item,
        });
        this.openDiscardRef.current.toggle();
    };

    displayOperators = () => {
        const { operators } = this.state;
        let retOperatorData = [];
        for (let i = 0; i < operators.length; i++) {
            let row = operators[i];
            retOperatorData.push(
                <span onClick={() => this.addOperatorToEditor(row, i)}>{row.name}</span>
            );
        }
        return retOperatorData;
    }

    displayFunctions = () => {
        const { functions } = this.state;
        let retfunctionsData = [];
        for (let i = 0; i < functions.length; i++) {
            let row = functions[i];
            retfunctionsData.push(
                <span onClick={() => this.addFunctionToEditor(row, i)}>{row.name}</span>
            );
        }
        return retfunctionsData;
    }

    displayEditorBox = () => {
        const { query } = this.state;
        let retData = [];
        for (let i = 0; i < query.length; i++) {
            let row = query[i];
            retData.push(
                <div className="d-inline-block code" onClick={() => this.onClickOpenDescardPopup(row.name)}>
                    <button>
                        <i className="fa fa-trash"></i>
                    </button>
                    <p>{row.name}</p>
                </div>
            );
        }
        return retData;
    }

    render() {
        return (
            <div className="compliance-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="COMPLIANCE | DASHBOARD" />
                <div className="compliancemanager-page-container editorgslbuilder-page-container">
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
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12">
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
                                <div className="row">
                                    <div className="col-md-3 col-sm-3">
                                        <div className="form-group filter-control-group">
                                            <label htmlFor="Account">Account</label>
                                            <select className="form-control" id="Account">
                                                <option value="">AWS</option>
                                                <option value="">AWS</option>
                                                <option value="">AWS</option>
                                                <option value="">AWS</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        <div className="form-group filter-control-group">
                                            <label htmlFor="Region">Region</label>
                                            <select className="form-control" id="Region">
                                                <option value="">All</option>
                                                <option value="">abc</option>
                                                <option value="">abc</option>
                                                <option value="">abc</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        <div className="form-group filter-control-group">
                                            <label htmlFor="vpc">VPC</label>
                                            <select className="form-control" id="vpc">
                                                <option value="">All</option>
                                                <option value="">abc</option>
                                                <option value="">abc</option>
                                                <option value="">abc</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        <div className="p-t-20 form-group">
                                            <a href="#" className="blue-button m-r-0 m-b-0 runtest-button">
                                                <i className="fa fa-play-circle"></i> RUN TEST
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="editor-add-code">
                                    {this.displayEditorBox()}
                                </div>
                                <div className="editor-code">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="editor-code-heading">Operators:</div>
                                        </div>
                                        <div className="col-md-10">
                                            {this.displayOperators()}
                                        </div>
                                    </div>
                                </div>
                                <div className="editor-code">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="editor-code-heading">Properties:</div>
                                        </div>
                                        <div className="col-md-10">
                                            {this.displayFunctions()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="context-preview-box">
                                    <h4>Context Preview</h4>
                                    <div className="context-preview">
                                        <div className="d-block form-group filter-search-control">
                                            <form>
                                                <input type="text" className="input-group-text" onChange={this.onSearchChange} value={this.state.searchKey} placeholder="Search" />
                                                <button><i className="fa fa-search"></i></button>
                                            </form>
                                        </div>
                                        <Tree valueForTree={this.state.treeData} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <OpenDescardPopup ref={this.openDiscardRef} valueOfDiscard={this.state.descardText} removeFunction={this.removeFunctionFromEditor} />
                <ApiKeySourcePopup ref={this.ApikeysourceRef} AddApikeySourceFunction={this.addSourceKey} />
            </div>
        );
    }
};