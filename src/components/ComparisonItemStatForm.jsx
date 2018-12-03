import { connect } from 'react-redux'
import ItemStatForm from './ui/ItemStatForm';
import { setComparisonItemStats } from '../state/actions';
import { getComparisonItemStats } from '../state/selectors';

const mapStateToProps = state => ({
    stats: getComparisonItemStats(state),
});

const mapDispatchToProps = dispatch => ({
    setComparisonItemStats: stats => dispatch(setComparisonItemStats(stats)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemStatForm);