import { Action, ActionReducer } from '@ngrx/store';
import { Player } from './players.models';
import { PlayerActions } from './players.actions';

export interface PlayerSearchState {
    name?: string;
    searching: boolean;
    searchComplete: boolean;
    player: Player;
}

const initialState: PlayerSearchState = {
    name: null,
    searching: false,
    searchComplete: false,
    player: null
};

const playerSearch: ActionReducer<PlayerSearchState> =  (state: PlayerSearchState = initialState,  action: Action) => {
    switch (action.type) {
        case PlayerActions.SEARCH:
            return Object.assign({}, state, {
                searching: true,
                name: action.payload
            });
        case PlayerActions.SEARCH_COMPLETE:
            return Object.assign({}, state, {
                player: action.payload,
                searching: false,
                searchComplete: true
            });
        default:
            return state;
    }
};

export default playerSearch;

