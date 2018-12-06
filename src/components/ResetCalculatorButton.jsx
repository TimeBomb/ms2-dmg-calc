import React from 'react';
import { connect } from 'react-redux'
import { resetState } from '../state/actions';

class ResetCalculatorButton extends React.Component {
    render() {
        return (
            <button className="reset-calc btn" onClick={this.props.resetState}>
                Reset Calculator
            </button>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    resetState: () => dispatch(resetState()),
});

export default connect(
    null,
    mapDispatchToProps,
)(ResetCalculatorButton);