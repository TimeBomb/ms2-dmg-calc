import React from 'react';
import { connect } from 'react-redux'
import { setPlayerStatsToComparisonStats } from '../state/actions';

class ComparisonCopyButton extends React.Component {
    render() {
        return (
            <div className="comparison-btn">
                <button onClick={this.props.setPlayerStatsToComparisonStats}>Copy Your Stats to Comparison Stats</button>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    setPlayerStatsToComparisonStats: () => dispatch(setPlayerStatsToComparisonStats()),
});

export default connect(
    null,
    mapDispatchToProps,
)(ComparisonCopyButton);