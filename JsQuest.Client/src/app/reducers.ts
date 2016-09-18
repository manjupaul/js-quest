import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';
import playerSearch, * as fromPlayers from './players/players.reducer';

export interface AppState {
  players: fromPlayers.PlayerSearchState;
}

export default compose(storeLogger(), combineReducers)({
  playerSearch
});
