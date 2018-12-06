import { connect } from 'react-redux'
import StatForm  from './ui/StatForm';
import { setComparisonStats } from '../state/actions';
import { getComparisonStats } from '../state/selectors';

const mapStateToProps = state => ({
    values: getComparisonStats(state),
});

const mapDispatchToProps = dispatch => ({
    setStats: stats => dispatch(setComparisonStats(stats)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatForm);