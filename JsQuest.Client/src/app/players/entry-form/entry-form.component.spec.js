"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var entry_form_component_1 = require('./entry-form.component');
var angularfire2_1 = require('angularfire2');
var firebaseConfig_1 = require('../firebaseConfig');
testing_1.describe('Component: EntryForm', function () {
    var builder;
    var testBuilt;
    testing_1.beforeEachProviders(function () { return [angularfire2_1.FIREBASE_PROVIDERS, angularfire2_1.defaultFirebase(firebaseConfig_1.TEST_FIREBASE_CONFIG), entry_form_component_1.EntryFormComponent]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        builder = tcb;
        testBuilt = builder.createAsync(EntryFormComponentTestController);
    }));
    testing_1.it('should inject the component', testing_1.inject([entry_form_component_1.EntryFormComponent], function (component) {
        testing_1.expect(component).toBeTruthy();
    }));
    testing_1.it('should create the component', testing_1.inject([], function () {
        return testBuilt.then(function (fixture) {
            var query = fixture.debugElement.query(platform_browser_1.By.directive(entry_form_component_1.EntryFormComponent));
            testing_1.expect(query).toBeTruthy();
            testing_1.expect(query.componentInstance).toBeTruthy();
        });
    }));
    testing_1.it('should populate placeholder message', testing_1.inject([], function () {
        return testBuilt.then(function (fixture) {
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            var placeholder = compiled.querySelector('input').placeholder;
            testing_1.expect(placeholder).toEqual('my placeholder');
        });
    }));
    testing_1.it('should not show an error on load', testing_1.inject([], function () {
        return testBuilt.then(function (fixture) {
            var compiled = fixture.debugElement.nativeElement;
            var errorEl = compiled.querySelector('.entry-form__errmsg');
            testing_1.expect(errorEl.className).not.toContain('is-shown');
        });
    }));
    testing_1.it('should show a name missing error on empty submission', testing_1.inject([], (function () {
        return testBuilt.then(function (fixture) {
            var query = fixture.debugElement.query(platform_browser_1.By.directive(entry_form_component_1.EntryFormComponent));
            var entryForm = query.componentInstance;
            entryForm.onFormSubmit();
            testing_1.expect(entryForm.errorMessage).toEqual(entry_form_component_1.EntryFormComponent.errorText.nameMissing);
        });
    })));
    testing_1.it('should populate too short error if input is too short', testing_1.inject([], function () {
        return testBuilt.then(function (fixture) {
            var query = fixture.debugElement.query(platform_browser_1.By.directive(entry_form_component_1.EntryFormComponent));
            var entryForm = query.componentInstance;
            testing_1.expect(entryForm.errorMessage).toBe(undefined);
            entryForm.usernameInput.updateValue('ab', { emitEvent: true });
            entryForm.onFormSubmit();
            testing_1.expect(entryForm.errorMessage).toEqual(entry_form_component_1.EntryFormComponent.errorText.nameTooShort);
        });
    }));
});
var EntryFormComponentTestController = (function () {
    function EntryFormComponentTestController() {
    }
    EntryFormComponentTestController = __decorate([
        core_1.Component({
            selector: 'test',
            template: "\n    <jsq-entry-form placeholder='my placeholder'></jsq-entry-form>\n  ",
            directives: [entry_form_component_1.EntryFormComponent]
        })
    ], EntryFormComponentTestController);
    return EntryFormComponentTestController;
}());
