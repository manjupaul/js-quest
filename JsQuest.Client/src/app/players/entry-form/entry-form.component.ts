import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {PlayerSearchState} from '../players.reducer';
import {Player} from "../players.models";

@Component({
    selector: 'entry-form',
    templateUrl: 'entry-form.component.html',
    styleUrls: ['entry-form.scss']
})
export class EntryFormComponent implements OnInit {

    @Input() playerSearch: PlayerSearchState;
    @Output() nameSubmitted = new EventEmitter<string>();
    @Output() playerSelected = new EventEmitter<Player>();

    constructor() {
    }

    onFormSubmit(event: Event, email: string) {
        event.preventDefault();
        this.nameSubmitted.emit(email);
    }

    ngOnInit() {
    }
}
