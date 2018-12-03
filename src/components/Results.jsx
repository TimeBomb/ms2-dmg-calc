import { connect } from 'react-redux'
import ResultsComponent from './ui/Results';
import { getResults } from '../state/selectors';

const mapStateToProps = state => ({
    stats: getResults(state),
});

export default connect(
    mapStateToProps,
)(ResultsComponent);