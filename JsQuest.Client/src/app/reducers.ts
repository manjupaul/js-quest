import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';
import playersReducer, * as fromPlayers from './players/players.reducer';

export interface AppState {
  players: fromPlayers.PlayerState;
}

export default compose(storeLogger(), combineReducers)({
  players: playersReducer
});
