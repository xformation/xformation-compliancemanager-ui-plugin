import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import awsLogo from '../../img/amazon-logo.png';
import microsoftAzureLogo from '../../img/microsoftazure.png';
import gcpLogo from '../../img/google-cloud.png';
import KubernetesLogo from '../../img/kubernetes.png';
import Tree from './../../components/tree';
import { OpenDescardPopup } from './../../components/OpenDescardPopup';
import { ApiKeySourcePopup } from './../../components/ApiKeySourcePopup';

export class EditorGslBuilder extends React.Component<any, any> {
    breadCrumbs: any;
    openDiscardRef: any;
    ApikeysourceRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            descardText: '',
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
            sentence: [
                { value: 'function', name: 'ApiGateWay' },
            ],
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
        this.openDiscardRef = React.createRef();
        this.ApikeysourceRef = React.createRef();
    }

    addFunctionToEditor = (item: any, index: any) => {
        const { sentence, functions } = this.state;
        let lastData = '';
        let lastindex = 0;
        for (let i = 0; i < sentence.length; i++) {
            lastData = sentence[i].name;
            lastindex = i;
        }
        if (lastData == '(') {
            let newString = lastData + item.name;
            sentence.splice(lastindex, 1);
            sentence.push({ value: 'function', name: newString })
        } else {
            sentence.push(item);
        }
        functions.splice(index, 1);
        this.setState({
            sentence,
            functions
        });
    }

    addOperatorToEditor = (data: any, index: any) => {
        const { sentence, operators } = this.state;
        if (data.value == 'operator') {
            if (data.name == '(') {
                sentence.push(data);
            } else if (data.name == '!=' || data.name == '=' || data.name == ')') {
                let lastData = '';
                let lastindex = 0;
                for (let i = 0; i < sentence.length; i++) {
                    lastData = sentence[i].name;
                    lastindex = i;
                }
                lastData = lastData + data.name;
                sentence.splice(lastindex, 1);
                sentence.push({ value: 'operator', name: lastData });
                if (data.name == '=') {
                    this.ApikeysourceRef.current.toggle();
                }
            }


        } else {
            sentence.push(data);
            operators.splice(index, 1);
        }

        this.setState({
            sentence,
            operators
        })
    }

    removeFunctionFromEditor = (data: any) => {
        this.openDiscardRef.current.toggle();
        let functionArrayData = [];
        const { sentence, functions } = this.state;
        for (let j = 0; j < sentence.length; j++) {
            if (data == sentence[j].name) {
                data = data.split("(").toString().split(")");
                functionArrayData.push({ value: 'function', name: data });
                sentence.splice(j, 1);
            }
        }
        for (let i = 0; i < functions.length; i++) {
            let row = functions[i];
            functionArrayData.push(row);
        }
        this.setState({
            functions: functionArrayData,
            sentence
        })
    }

    addSourceKey = (addData: any) => {
        this.ApikeysourceRef.current.toggle();
        const { sentence } = this.state;
        let lastData = '';
        let lastIndex = 0;
        for (let j = 0; j < sentence.length; j++) {
            lastData = sentence[j].name;
            lastIndex = j;
        }
        lastData = lastData + addData;
        sentence.splice(lastIndex, 1);
        sentence.push({ value: 'function', name: lastData });
        this.setState({
            sentence
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
        const { sentence } = this.state;
        let retData = [];
        for (let i = 0; i < sentence.length; i++) {
            let row = sentence[i];
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
                                                <input type="text" className="input-group-text" placeholder="Search" value="" />
                                                <button><i className="fa fa-search"></i></button>
                                            </form>
                                        </div>
                                        <Tree />
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