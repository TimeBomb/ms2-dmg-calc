export const ActionTypes = {
    SET_PLAYER_STATS: 'SET_PLAYER_STATS',
    SET_COMPARISON_PLAYER_STATS: 'SET_COMPARISON_PLAYER_STATS',
    SET_COMPARISON_ITEM_STATS: 'SET_COMPARISON_ITEM_STATS',
}

export const setPlayerStats = (changeEvent) => {
    return {
        type: ActionTypes.SET_PLAYER_STATS,
        changeEvent,
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