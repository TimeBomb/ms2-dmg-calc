import { connect } from 'react-redux'
import ItemStatForm from './ui/ItemStatForm';
import { setComparisonItemStats } from '../state/actions';
import { getComparisonItemStats } from '../state/selectors';

const mapStateToProps = state => ({
    values: getComparisonItemStats(state),
});

const mapDispatchToProps = dispatch => ({
    setStats: stats => dispatch(setComparisonItemStats(stats)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemStatForm);