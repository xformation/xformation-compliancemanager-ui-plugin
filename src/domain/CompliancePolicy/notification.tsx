import * as React from 'react';

export class Notification extends React.Component<any,any>{
    render(){
        return (
        <div className="alert-details">
            <div className="alert-details-name">
                <label>Name this Alert Rule</label>
                <select>
                    <option>Untitled Rule</option>
                    <option>Untitled Rule</option>
                    <option>Untitled Rule</option>
                    <option>Untitled Rule</option>
                    <option>Untitled Rule</option>
                </select>
            </div>
            <div className="alert-details-description">
                <label>Description</label>
                <textarea placeholder="Specify alert rule description"></textarea>
            </div>
            <div className="d-block text-center">
                <button className="blue-button m-r-0 m-b-0">Save</button>
            </div>
        </div>
        );
    }
}