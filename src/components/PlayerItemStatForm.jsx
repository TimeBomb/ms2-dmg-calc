import { connect } from 'react-redux'
import ItemStatForm from './ui/ItemStatForm';
import { setPlayerItemStats } from '../state/actions';
import { getPlayerItemStats } from '../state/selectors';

const mapStateToProps = state => ({
    values: getPlayerItemStats(state),
});

const mapDispatchToProps = dispatch => ({
    setStats: stats => dispatch(setPlayerItemStats(stats)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemStatForm);