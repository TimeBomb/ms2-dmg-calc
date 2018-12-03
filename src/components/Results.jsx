import { connect } from 'react-redux'
import ResultsComponent from './ui/Results';
import { getPlayerStats } from '../state/selectors';

const mapStateToProps = state => ({
    playerStats: getPlayerStats(state),
});

export default connect(
    mapStateToProps,
)(ResultsComponent);