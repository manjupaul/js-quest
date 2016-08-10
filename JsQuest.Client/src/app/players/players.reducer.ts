import { Action, ActionReducer } from '@ngrx/store';
import { Player } from './players.models';
import { PlayerActions } from './players.actions';

export interface PlayerState {
    name?: string;
    searching: boolean;
    players?: Player[];
}

const initialState: PlayerState = {
    name: null,
    searching: false,
    players: null
};

const playersReducer: ActionReducer<PlayerState> =  (state: PlayerState = initialState,  action: Action) => {
  switch (action.type) {
    case PlayerActions.SEARCH:
      return Object.assign({}, state, {
        searching: true
      });
    case PlayerActions.SEARCH_COMPLETE:
      return Object.assign({}, state, {
        players: action.payload,
        searching: false
      });
    default:
      return state;
  }
};

export default playersReducer;

