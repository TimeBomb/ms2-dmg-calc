import React from 'react';
// import ComparisonPlayerStatForm from './components/ComparisonPlayerStatForm';
// import ComparisonItemStatForm from './components/ComparisonItemStatForm';
import PlayerStatForm from './components/PlayerStatForm';
import Results from './components/Results';

export default class App extends React.Component {
    render() {
        return (
            <>
                <PlayerStatForm />
                {/* <ComparisonPlayerStatForm />
                <ComparisonItemStatForm /> */}
                <Results />
            </>
        );
    }
}