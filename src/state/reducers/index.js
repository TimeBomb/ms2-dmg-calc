import { combineReducers } from 'redux';
import { ActionTypes } from '../actions';
import { getValue } from '../../util/helpers';
import { defaultState } from '../../util/constants';

const comparisonStatsReducer = (comparisonState = {comparison: { item: {}, stats: {}, buffs: {}}}, action) => {
    switch (action.type) {
        case ActionTypes.SET_COMPARISON_ITEM_STATS:
            return {
                ...comparisonState,
                item: {
                    ...comparisonState.item,
                    [action.changeEvent.target.name]: getValue(action.changeEvent.target),
                }
            };
        case ActionTypes.SET_COMPARISON_STATS:
            return {
                ...comparisonState,
                stats: {
                    ...comparisonState.stats,
                    [action.changeEvent.target.name]: getValue(action.changeEvent.target),
                }
            };
         case ActionTypes.SET_COMPARISON_BUFFS:
            return {
                ...comparisonState,
				buffs: {
					...comparisonState.buffs,
					[action.changeEvent.target.name]: getValue(action.changeEvent.target),
				}
            };
        default:
            return comparisonState;
    }
};

const playerStatsReducer = (playerState = {player: { item: {}, stats: {}, buffs: {} }}, action) => {
    switch (action.type) {
        case ActionTypes.SET_PLAYER_ITEM_STATS:
            return {
				...playerState,
				item: {
					...playerState.item,
					[action.changeEvent.target.name]: getValue(action.changeEvent.target),
				}
			};
        case ActionTypes.SET_PLAYER_STATS:
            return {
				...playerState,
				stats: {
					...playerState.stats,
					[action.changeEvent.target.name]: getValue(action.changeEvent.target),
				}
            };
        case ActionTypes.SET_PLAYER_BUFFS:
            return {
				...playerState,
				buffs: {
					...playerState.buffs,
					[action.changeEvent.target.name]: getValue(action.changeEvent.target),
				}
            };
        default:
            return playerState;
    }
};

// We're using a root reducer so that we can reset our entire state if we want to
const reducers = combineReducers({
    comparison: comparisonStatsReducer,
    player: playerStatsReducer,
});
export const reducer = (state, action) => {
    if (action.type === ActionTypes.RESET_STATE) {
        return defaultState;
    }
    if (action.type === ActionTypes.REPLACE_COMPARISON_STATS_WITH_PLAYER_STATS) {
        return {
            ...state,
            comparison: state.player,
        };
    }

    return reducers(state, action);
};