import React from 'react';

export default class DropdownField extends React.Component {
    render() {
        return (
            <div className="input">
                <label>{this.props.label}</label>
                <select name={this.props.name} value={this.props.selected} onChange={this.props.onChange}>
                    {this.props.values.map(
                        (value) => (
                            <option key={value.text} value={value.val}>{value.text}</option>
                        )
                    )}
                </select>
            </div>
        );
    }
}