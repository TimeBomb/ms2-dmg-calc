import { connect } from 'react-redux'
import StatForm from './ui/StatForm';
import { setPlayerStats } from '../state/actions';
import { getPlayerStats } from '../state/selectors';

const mapStateToProps = state => ({
    values: getPlayerStats(state),
});

const mapDispatchToProps = dispatch => ({
    setStats: stats => dispatch(setPlayerStats(stats)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatForm);