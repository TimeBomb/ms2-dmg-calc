import { connect } from 'react-redux'
import StatForm  from './ui/StatForm';
import { setComparisonPlayerStats } from '../state/actions';
import { getComparisonPlayerStats } from '../state/selectors';

const mapStateToProps = state => ({
    stats: getComparisonPlayerStats(state),
});

const mapDispatchToProps = dispatch => ({
    setComparisonPlayerStats: stats => dispatch(setComparisonPlayerStats(stats)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatForm);