import React from 'react';

export default class TextField extends React.Component {
    render() {
        return (
            <div className="input">
                <label>{this.props.label}</label>
                <input type="text" name={this.props.name} value={this.props.value} onChange={this.props.onChange} />
            </div>
        );
    }
}