"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var EntryFormComponent = (function () {
    function EntryFormComponent(formBuilder) {
        this.userForm = EntryFormComponent.buildUserForm(formBuilder);
        this.usernameInput = this.userForm.controls['username'];
    }
    EntryFormComponent.prototype.ngOnInit = function () {
        this.placeholder = this.placeholder || 'Enter your name...';
    };
    EntryFormComponent.prototype.onFormSubmit = function () {
        if (!this.usernameInput.valid) {
            this.errorMessage = this.getErrorMessage();
        }
    };
    EntryFormComponent.prototype.getErrorMessage = function () {
        if (this.usernameInput.errors['required']) {
            return EntryFormComponent.errorText.nameMissing;
        }
        if (this.usernameInput.errors['minlength']) {
            return EntryFormComponent.errorText.nameTooShort;
        }
        return;
    };
    EntryFormComponent.buildUserForm = function (formBuilder) {
        return formBuilder.group({
            username: ['', EntryFormComponent.usernameValidators()]
        });
    };
    EntryFormComponent.usernameValidators = function () {
        return common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)]);
    };
    EntryFormComponent.errorText = {
        nameMissing: 'Please provide a username',
        nameTooShort: 'Username must be at least 3 characters'
    };
    __decorate([
        core_1.Input()
    ], EntryFormComponent.prototype, "placeholder", void 0);
    EntryFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jsq-entry-form',
            templateUrl: 'entry-form.component.html',
            directives: [common_1.NgClass, common_1.FORM_DIRECTIVES]
        })
    ], EntryFormComponent);
    return EntryFormComponent;
}());
exports.EntryFormComponent = EntryFormComponent;
