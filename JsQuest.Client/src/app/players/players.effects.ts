import { Injectable, OnDestroy } from '@angular/core';
import {PlayerActions} from './players.actions';
import {PlayersService} from './players.service';
import {Effect, Actions } from '@ngrx/effects';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PlayersEffects implements OnDestroy {

    subscription: Subscription;

    constructor(
      private actions$: Actions,
      private service: PlayersService,
      private playerActions: PlayerActions) {
    }

    @Effect() find$ = this.actions$
        .ofType(PlayerActions.SEARCH)
        .map(action => action.payload)
        .filter(email => email !== '')
        .switchMap(email => this.service.searchPlayers(email)
            .map(players => this.playerActions.searchComplete(players))
            .catch(() => Observable.of(this.playerActions.searchComplete([])))
        );

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
