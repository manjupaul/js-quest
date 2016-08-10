import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Player} from './players.models';

@Injectable()
export class PlayerActions {

    static SEARCH = '[Player] Search';
    static SEARCH_COMPLETE = '[Player] Search Complete';

    search(name: string): Action {
        return {
            type: PlayerActions.SEARCH,
            payload: name
        };
    }

    searchComplete(players: Player[]): Action {
      return {
        type: PlayerActions.SEARCH_COMPLETE,
        payload: players
      };
    }
}

