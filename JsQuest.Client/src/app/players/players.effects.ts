import {Injectable} from '@angular/core';
import {PlayerActions} from './players.actions';
import {PlayersService} from './players.service';
import {Effect, StateUpdates, toPayload} from '@ngrx/effects';
import {Observable} from 'rxjs';

@Injectable()
export class PlayersEffects {

    constructor(
      private updates$: StateUpdates<any>,
      private service: PlayersService,
      private playerActions: PlayerActions) {
    }

    @Effect() find$ = this.updates$
      .whenAction(PlayerActions.SEARCH)
      .map<string>(toPayload)
      .filter(name => name !== '')
      .switchMap(name => this.service.searchPlayers(name)
        .map(players => this.playerActions.searchComplete(players))
        .catch(() => Observable.of(this.playerActions.searchComplete([])))
      );
}
