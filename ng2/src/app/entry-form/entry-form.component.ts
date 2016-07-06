import { Component, Input, OnInit } from '@angular/core';
import { ControlGroup, 
         AbstractControl,
         FormBuilder, 
         NgClass,
         FORM_DIRECTIVES, 
         Validators 
} from '@angular/common';


@Component({
    moduleId: module.id,
    selector: 'jsq-entry-form',
    templateUrl: 'entry-form.component.html',
    directives: [NgClass, FORM_DIRECTIVES]
})
export class EntryFormComponent implements OnInit {
    @Input() placeholder: string;
    
    userForm: ControlGroup;
    usernameInput: AbstractControl;
    errorMessage: string;
    
    
    constructor(formBuilder: FormBuilder) {
        this.userForm = EntryFormComponent.buildUserForm(formBuilder);
        this.usernameInput = this.userForm.controls['username'];
    }
    
    ngOnInit() {
        this.placeholder = this.placeholder || 'Enter your name...'
    }

    onFormSubmit() {
        if (!this.usernameInput.valid) {
            this.errorMessage = this.getErrorMessage();
        }
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

    
    private static buildUserForm(formBuilder: FormBuilder) {
        return formBuilder.group({
            username: ['', EntryFormComponent.usernameValidators()]
        });
    }
    
    private static usernameValidators() {
        return Validators.compose([Validators.required, Validators.minLength(3)])
    }
    
    static errorText = {
        nameMissing: 'Please provide a username',
        nameTooShort: 'Username must be at least 3 characters'
    };
    
    
}
