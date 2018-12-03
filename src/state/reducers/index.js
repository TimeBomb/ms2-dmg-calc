import { combineReducers } from 'redux';
import { ActionTypes } from '../actions';

const comparisonStatsReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SET_COMPARISON_ITEM_STATS:
            return state;
        case ActionTypes.SET_COMPARISON_PLAYER_STATS:
            return state;
        default:
            return state;
    }
};

const playerStatsReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SET_PLAYER_STATS:
            return state;
        default:
            return state;
    }
};

const resultsReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_RESULTS:
            return state;
        default:
            return state;
    }
};

export const reducer = combineReducers({
    comparisonStats: comparisonStatsReducer,
    playerStats: playerStatsReducer,
    results: resultsReducer,
});