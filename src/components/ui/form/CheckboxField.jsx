import React from 'react';

export default class CheckboxField extends React.Component {
    render() {
        return (
            <div className="input">
                <label>{this.props.label}</label>
                <input type="checkbox"  name={this.props.name} checked={this.props.value} onChange={this.props.onChange} />
            </div>
        );
    }
}