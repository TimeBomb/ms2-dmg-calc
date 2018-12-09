import React from 'react';
import ComparisonStatForm from './components/ComparisonStatForm';
import ComparisonItemStatForm from './components/ComparisonItemStatForm';
import PlayerItemStatForm from './components/PlayerItemStatForm';
import PlayerStatForm from './components/PlayerStatForm';
import PlayerBuffForm from './components/PlayerBuffForm';
import ComparisonBuffForm from './components/ComparisonBuffForm';
import Results from './components/Results';
import ResetCalculatorButton from './components/ResetCalculatorButton';
import ComparisonCopyButton from './components/ComparisonCopyButton';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="calc">
                    <div className="player col">
                        <div className="form-container">
                            <h1>Your Stats</h1>
                            <PlayerStatForm />
                        </div>
                        <div className="form-container">
                            <h1>Your Buffs</h1>
                            <PlayerBuffForm />
                        </div>
                        <div className="form-container">
                            <h1>Your Item Stats</h1>
                            <PlayerItemStatForm />
                        </div>
                    </div>
                    <div className="comparison col">
                        <div className="form-container">
                            <h1>Comparison Stats</h1>
                            <ComparisonStatForm />
                        </div>
                        <div className="form-container">
                            <h1>Comparison Buffs</h1>
                            <ComparisonBuffForm />
                        </div>
                        <div className="form-container">
                            <h1>Comparison Item Stats</h1>
                            <ComparisonItemStatForm />
                        </div>
                    </div>
                </div>
                <div className="floating-footer">
                    <ComparisonCopyButton />
                    <Results />
                </div>
                <div className="fineprint">
                    *<b>Bonus Attack</b> is experimental. The weapon multipliers may or may not be slightly inaccurate.
                    <br/>**<b>Critical Rate</b> is experimental. The datamined algorithm may or may not be slightly inaccurate.
                    <br/>***<b>Increase Damage Taken Debuff %</b> is experimental. It may or may not be slightly inaccurate. We aren't certain exactly how it interacts with Damage Buff %.
                </div>
                <ResetCalculatorButton />
            </div>
        );
    }
}