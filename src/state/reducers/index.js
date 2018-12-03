import { combineReducers } from 'redux';
import { ActionTypes } from '../actions';
import { toNumber } from '../../util/helpers';

const comparisonStatsReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SET_COMPARISON_ITEM_STATS:
            return Object.assign({}, {
                comparison: {
                    ...state.comparison,
                    item: {
                        ...state.comparison.item,
                        [action.changeEvent.target.name]: toNumber(action.changeEvent.target.value),
                    },
                },
            });
        case ActionTypes.SET_COMPARISON_PLAYER_STATS:
            return Object.assign({}, state, {
                comparison: {
                    ...state.comparison,
                    player: {
                        ...state.comparison.player,
                        [action.changeEvent.target.name]: toNumber(action.changeEvent.target.value),
                    },
                },
            });
        default:
            return state;
    }
};

const playerStatsReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SET_PLAYER_STATS:
            console.log('updating state');
            return Object.assign({}, state, {
                ...state.playerStats,
                [action.changeEvent.target.name]: toNumber(action.changeEvent.target.value),
            });
        default:
            return state;
    }
};
export const reducer = combineReducers({
    comparisonStats: comparisonStatsReducer,
    playerStats: playerStatsReducer,
});