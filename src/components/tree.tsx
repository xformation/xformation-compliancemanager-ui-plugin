import * as React from 'react';

export class Tree extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            treeData: [
                {
                    rootNode: [
                        {
                            name: 'apiKeySource:',
                            type: 'string'
                        },
                        {
                            name: 'binaryMediaTypes:',
                            type: 'Array[1]',
                            subNodes: [
                                {
                                    name: 'O:', type: 'object', thirdNodes: [
                                        { name: '', }
                                    ]
                                },
                                { name: 'CreatedDate:', type: 'int' },
                                { name: 'description:', type: 'string' },

                            ]
                        },
                        {
                            name: 'endPointConfiguration:',
                            type: 'object',
                            subNodes: [],
                        },
                        { name: 'MinimumCompretionSize:', type: 'string' },
                        {
                            name: 'policy:',
                            type: 'object',
                            subNodes: [],
                        },
                        { name: 'Version:', type: 'String', },
                        {
                            name: 'resources:',
                            type: ' Array[1]',
                            subNodes: [],
                        },
                        {
                            name: 'Authorizers:',
                            type: 'Array[1]',
                            subNodes: [],
                        },
                        {
                            name: 'VPC:',
                            type: 'object',
                            subNodes: [],
                        },
                        { name: 'id:', type: 'String' },
                        { name: 'Types:', type: 'String' },
                        { name: 'Name:', type: 'String' },
                        { name: 'Dome9id:', type: 'String' },
                        { name: 'AccountNumber:', type: 'String' },
                        { name: 'Region:', type: 'String' },
                    ]
                }
            ]
        }
    };


    displayTreeData() {
        const { treeData } = this.state;
        let retData = [];
        for (let i = 0; i < treeData.length; i++) {
            let row = treeData[i].rootNode;
            for (let j = 0; j < row.length; j++) {
                let subNodes = [];
                let value = row[j];
                if (value.subNodes != undefined) {
                    if (value.subNodes.length > 0) {
                        for (let k = 0; k < value.subNodes.length; k++) {
                            let subData = value.subNodes[k];
                            subNodes.push(
                                <ul>
                                    <li>
                                        {(subData.thirdNodes != undefined) && <i className="fa fa-caret-right"></i>}{subData.name} <a href="#">{subData.type}</a></li>
                                </ul>
                            );
                        }
                    }
                }
                retData.push(
                    <li>
                        {(value.subNodes != undefined) && <i className={value.subNodes.length > 0 ? "fa fa-caret-down" : "fa fa-caret-right"}></i>}{value.name} <a href="#">{value.type}</a>
                        {subNodes}
                    </li>
                );
            }
        }
        // retData.push(
        //     <ul>
        //         <li>apiKeySource:<span>string</span></li>
        //         <li>
        //             <i className="fa fa-caret-down"></i> binaryMediaTypes:Array <a href="#">[1]</a>
        //             <ul>
        //                 <li>
        //                     <i className="fa fa-caret-right"></i> O:Object
        //                                                 </li>
        //             </ul>
        //         </li>
        //         <li>createdDate:<span>string</span></li>
        //         <li>description:<span>string</span></li>
        //         <li><i className="fa fa-caret-right"></i> endpointConfiguration:Object</li>
        //         <li>minimumCompressionSize:<span>string</span></li>
        //     </ul>
        // );
        return retData;
    }

    render() {
        return (
            <div className="preview">
                <ul>
                    {this.displayTreeData()}
                </ul>
            </div>
        );
    }
}

export default Tree;