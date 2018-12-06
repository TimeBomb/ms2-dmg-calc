import { connect } from 'react-redux'
import BuffForm from './ui/BuffForm';
import { setComparisonBuffs } from '../state/actions';
import { getComparisonBuffs } from '../state/selectors';

const mapStateToProps = state => ({
    values: getComparisonBuffs(state),
});

const mapDispatchToProps = dispatch => ({
    setStats: stats => dispatch(setComparisonBuffs(stats)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BuffForm);