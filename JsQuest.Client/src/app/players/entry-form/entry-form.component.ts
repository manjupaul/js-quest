import {Component, Input, OnInit} from '@angular/core';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { PlayerActions } from '../players.actions';
import {
    REACTIVE_FORM_DIRECTIVES,
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'jsq-entry-form',
    templateUrl: 'entry-form.component.html',
    directives: [NgClass, REACTIVE_FORM_DIRECTIVES]
})
export class EntryFormComponent implements OnInit {

    static errorText = {
        nameMissing: 'Please provide a username',
        nameTooShort: 'Username must be at least 3 characters'
    };

    private static buildUserForm(formBuilder: FormBuilder) {
        return formBuilder.group({
            username: ['', EntryFormComponent.usernameValidators()]
        });
    }

    private static usernameValidators() {
        return Validators.compose([Validators.required, Validators.minLength(3)]);
    }

    @Input() placeholder: string;

    userForm: FormGroup;
    usernameInput: AbstractControl;
    errorMessage: string;
    players$: Observable<any>;

    constructor(public store: Store<AppState>, formBuilder: FormBuilder) {
        this.players$ = store.select('players');
        this.userForm = EntryFormComponent.buildUserForm(formBuilder);
        this.usernameInput = this.userForm.controls['username'];
    }

    ngOnInit() {
        this.placeholder = this.placeholder || 'Enter your name...';
    }

    onFormSubmit() {
        if (!this.usernameInput.valid) {
            this.errorMessage = this.getErrorMessage();
        }

        this.store.dispatch({ type: PlayerActions.SEARCH, payload: this.usernameInput.value });
    }


    private getErrorMessage() {
        if (this.usernameInput.errors['required']) {
            return EntryFormComponent.errorText.nameMissing;
        }

        if (this.usernameInput.errors['minlength']) {
            return EntryFormComponent.errorText.nameTooShort;
        }

        return;
    }
}
