import { Component, OnInit } from '@angular/core';
import {
    EntryFormComponent,
    PlayersService,
    PlayerActions
} from '../../players';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
    selector: 'welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.scss'],
    providers: [PlayersService]
})
export class WelcomeComponent implements OnInit {

    playerSearch$: Observable<any>;

    constructor(private store: Store<AppState>, private playersService: PlayersService) {
        this.playerSearch$ = store.select('playerSearch');
    }

    playerEntry(email) {
        if (email && email.trim() !== '') {
            this.store.dispatch({type: PlayerActions.SEARCH, payload: email});
        }
    }

    ngOnInit() {
    }

}
