export const ActionTypes = {
    SET_PLAYER_STATS: 'SET_PLAYER_STATS',
    SET_PLAYER_ITEM_STATS: 'SET_PLAYER_ITEM_STATS',
    SET_PLAYER_BUFFS: 'SET_PLAYER_BUFFS',
    SET_COMPARISON_STATS: 'SET_COMPARISON_STATS',
    SET_COMPARISON_ITEM_STATS: 'SET_COMPARISON_ITEM_STATS',
    SET_COMPARISON_BUFFS: 'SET_COMPARISON_BUFFS',
    REPLACE_COMPARISON_STATS_WITH_PLAYER_STATS: 'REPLACE_COMPARISON_STATS_WITH_PLAYER_STATS',
    RESET_STATE: 'RESET_STATE',
}

export const setPlayerStats = (changeEvent) => {
    return {
        type: ActionTypes.SET_PLAYER_STATS,
        changeEvent,
    };
};

export const setPlayerItemStats = (changeEvent) => {
    return {
        type: ActionTypes.SET_PLAYER_ITEM_STATS,
        changeEvent,
    };
};

export const setPlayerBuffs = (changeEvent) => {
    return {
        type: ActionTypes.SET_PLAYER_BUFFS,
        changeEvent,
    };
};

export const setComparisonStats = (changeEvent) => {
    return {
        type: ActionTypes.SET_COMPARISON_STATS,
        changeEvent,
    };
};

export const setComparisonItemStats = (changeEvent) => {
    return {
        type: ActionTypes.SET_COMPARISON_ITEM_STATS,
        changeEvent,
    };
};

export const setComparisonBuffs = (changeEvent) => {
    return {
        type: ActionTypes.SET_COMPARISON_BUFFS,
        changeEvent,
    };
};

export const setPlayerStatsToComparisonStats = () => {
    return {
        type: ActionTypes.REPLACE_COMPARISON_STATS_WITH_PLAYER_STATS,
    };
};

export const resetState = () => {
    return {
        type: ActionTypes.RESET_STATE,
    };
};