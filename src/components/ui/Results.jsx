import React from 'react';
import { getDamageDealt } from '../../util/algorithms';

export default class Results extends React.Component {
    render() {
        return (
            <div className="results">
                Results:
                <div>Your Damage: { getDamageDealt(this.props.playerStats) }</div>
            </div>
        );
    }
}