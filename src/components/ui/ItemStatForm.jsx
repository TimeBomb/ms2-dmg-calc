import React from 'react';

export default class ItemStatForm extends React.Component {
    render() {
        return <div>
            <input type="text" value={this.props.stats.test} onChange={this.props.setStats} />
        </div>;
    }
}