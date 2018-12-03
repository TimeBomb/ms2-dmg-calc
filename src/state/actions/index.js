export const ActionTypes = {
    SET_PLAYER_STATS: 'SET_PLAYER_STATS',
    SET_COMPARISON_PLAYER_STATS: 'SET_COMPARISON_PLAYER_STATS',
    SET_COMPARISON_ITEM_STATS: 'SET_COMPARISON_ITEM_STATS',
    UPDATE_RESULTS: 'UPDATE_RESULTS',
}

export const setPlayerStats = (values) => {
    return {
        type: ActionTypes.SET_PLAYER_STATS,
        ...values,
    };
};

export const setComparisonPlayerStats = (values) => {
    return {
        type: ActionTypes.SET_COMPARISON_PLAYER_STATS,
        ...values,
    };
};

export const setComparisonItemStats = (values) => {
    return {
        type: ActionTypes.SET_COMPARISON_ITEM_STATS,
        ...values,
    };
};

export const setResults = (results) => {
    return {
        type: ActionTypes.UPDATE_RESULTS,
        ...results,
    };
};