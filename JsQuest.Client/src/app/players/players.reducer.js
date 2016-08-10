"use strict";
var players_actions_1 = require('./players.actions');
var initialState = {
    name: null,
    searching: false,
    player: null
};
exports.playerReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case players_actions_1.PlayerActions.SEARCH:
            return state;
        default:
            return state;
    }
};
