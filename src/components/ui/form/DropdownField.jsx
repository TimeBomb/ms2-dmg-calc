import React from 'react';

export default class DropdownField extends React.Component {
    render() {
        return (
            <div className="input">
                <label>{this.props.label}</label>
                <select name={this.props.name} value={this.props.selected} onChange={this.props.onChange}>
                    {Object.keys(this.props.values).map(
                        (value) => {
                            const text = this.props.values[value];
                            return (<option key={text} value={value}>{text}</option>);
                        }
                    )}
                </select>
            </div>
        );
    }
}