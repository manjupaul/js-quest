import { Component, Input } from '@angular/core';
import { ControlGroup, 
         AbstractControl,
         FormBuilder, 
         NgClass, 
         FORM_DIRECTIVES, 
         Validators 
} from '@angular/common';

const errorText = {
    nameMissing: 'Please provide a username',
    nameTooShort: 'Username must be at least 3 characters'
};

@Component({
    moduleId: module.id,
    selector: 'jsq-entry-form',
    templateUrl: 'entry-form.component.html',
    directives: [NgClass, FORM_DIRECTIVES]
})
export class EntryFormComponent {
    @Input() placeholder: string = 'Enter your name...';
    
    userForm: ControlGroup;
    usernameInput: AbstractControl;
    errorMessage: string;
    
    constructor(formBuilder: FormBuilder) {
        this.userForm = EntryFormComponent.buildUserForm(formBuilder);
        this.usernameInput = this.userForm.controls['username'];
    }

    onFormSubmit() {
        if (!this.usernameInput.valid) {
            this.errorMessage = this.getErrorMessage();
        }
    }
    
    private getErrorMessage() {
        if (this.usernameInput.errors['required']) {
            return errorText.nameMissing;
        }

        if (this.usernameInput.errors['minlength']) {
            return errorText.nameTooShort;
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
    
}
