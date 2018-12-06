import { connect } from 'react-redux'
import React from 'react';
import { getPlayerStats, getPlayerBuffs, getPlayerItemStats, getComparisonStats, getComparisonBuffs, getComparisonItemStats } from '../state/selectors';
import { getDmgDealt, getCritRate, getAvgDmgDealtWithCrit } from '../util/algorithms';

class Results extends React.Component {
    render() {
        const dmgDealt = getDmgDealt({
            stats: this.props.playerStats,
            buffs: this.props.playerBuffs,
            item: this.props.playerItem,
        });
        const comparisonDmgDealt = getDmgDealt({
            stats: this.props.comparisonStats,
            buffs: this.props.comparisonBuffs,
            item: this.props.comparisonItem,
        });
        const isYourDmgHigher = dmgDealt > comparisonDmgDealt;
        const yourDmgInc = (Math.abs(1 - (dmgDealt / comparisonDmgDealt)) * 100).toFixed(2);
        const comparisonDmgInc = (Math.abs(1 - (comparisonDmgDealt / dmgDealt)) * 100).toFixed(2);

        const avgDmgDealtWithCrit = getAvgDmgDealtWithCrit({
            stats: this.props.playerStats,
            buffs: this.props.playerBuffs,
            item: this.props.playerItem,
        });
        const avgComparisonDmgDealtWithCrit = getAvgDmgDealtWithCrit({
            stats: this.props.comparisonStats,
            buffs: this.props.comparisonBuffs,
            item: this.props.comparisonItem,
        });
        const isYourAvgDmgHigher = avgDmgDealtWithCrit > avgComparisonDmgDealtWithCrit;
        const yourAvgDmgInc = (Math.abs(1 - (avgDmgDealtWithCrit / avgComparisonDmgDealtWithCrit)) * 100).toFixed(2);
        const comparisonAvgDmgInc = (Math.abs(1 - (avgComparisonDmgDealtWithCrit / avgDmgDealtWithCrit)) * 100).toFixed(2);

        const critRate = (getCritRate({
            stats: this.props.playerStats,
            buffs: this.props.playerBuffs,
        }) * 100).toFixed(2);
        const comparisonCritRate = (getCritRate({
            stats: this.props.comparisonStats,
            buffs: this.props.comparisonBuffs,
        }) * 100).toFixed(2);
        const isCritSame = critRate !== comparisonCritRate;
        return (
            <div className="results">
                <div>Your Damage: {yourDmgInc}% {isYourDmgHigher ? 'higher' : 'lower'} than Comparison</div>
                {yourAvgDmgInc !== yourDmgInc ? (<div>Your Average Dmg Dealt w/ Crit: {yourAvgDmgInc}% {isYourAvgDmgHigher ? 'higher' : 'lower'} than Comparison</div>) : ''}
                <div>Comparison Damage: {comparisonDmgInc}% {isYourDmgHigher ? 'lower' : 'higher'} than Yours</div>
                {comparisonAvgDmgInc !== comparisonDmgInc ? (<div>Comparison Average Dmg Dealt w/ Crit: {comparisonAvgDmgInc}% {isYourAvgDmgHigher ? 'lower' : 'higher'} than Yours</div>) : ''}
                <div>{isCritSame ? 'Your ' : ''}Crit Rate: {critRate}%</div>
                {isCritSame ? (<div>Comparison Crit Rate: {comparisonCritRate}%</div>) : ''}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    playerStats: getPlayerStats(state),
    playerBuffs: getPlayerBuffs(state),
    playerItem: getPlayerItemStats(state),
    comparisonStats: getComparisonStats(state),
    comparisonBuffs: getComparisonBuffs(state),
    comparisonItem: getComparisonItemStats(state),
});

export default connect(
    mapStateToProps,
)(Results);