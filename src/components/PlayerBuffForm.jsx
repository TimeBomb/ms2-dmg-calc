import { connect } from 'react-redux'
import BuffForm from './ui/BuffForm';
import { setPlayerBuffs } from '../state/actions';
import { getPlayerBuffs } from '../state/selectors';

const mapStateToProps = state => ({
    values: getPlayerBuffs(state),
});

const mapDispatchToProps = dispatch => ({
    setStats: stats => dispatch(setPlayerBuffs(stats)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BuffForm);