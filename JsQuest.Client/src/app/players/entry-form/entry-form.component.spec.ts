import {
    beforeEach,
    beforeEachProviders,
    describe,
    expect,
    it,
    inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EntryFormComponent } from './entry-form.component';

describe('Component: EntryForm', () => {
    let builder: TestComponentBuilder;
    let testBuilt: Promise<ComponentFixture<any>>

    beforeEachProviders(() => [EntryFormComponent]);
    beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
        builder = tcb;
        testBuilt = builder.createAsync(EntryFormComponentTestController);
    }));

    it('should inject the component', inject([EntryFormComponent],
        (component: EntryFormComponent) => {
            expect(component).toBeTruthy();
        }));

    it('should create the component', inject([], () => {
        return testBuilt.then((fixture: ComponentFixture<any>) => {
            let query = fixture.debugElement.query(By.directive(EntryFormComponent));
            expect(query).toBeTruthy();
            expect(query.componentInstance).toBeTruthy();
        });
    }));

    it('should populate placeholder message', inject([], () => {
        return testBuilt.then((fixture: ComponentFixture<any>) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            let placeholder = compiled.querySelector('input').placeholder;
            expect(placeholder).toEqual('my placeholder');
        });
    }));

    it('should not show an error on load', inject([], () => {
        return testBuilt.then((fixture: ComponentFixture<any>) => {
            let compiled = fixture.debugElement.nativeElement;
            let errorEl = compiled.querySelector('.entry-form__errmsg');
            expect(errorEl.className).not.toContain('is-shown');
        });
    }));

    it('should show a name missing error on empty submission', inject([], (() => {
        return testBuilt.then((fixture: ComponentFixture<any>) => {
            let query = fixture.debugElement.query(By.directive(EntryFormComponent));
            let entryForm = query.componentInstance;
            entryForm.onFormSubmit();
            expect(entryForm.errorMessage).toEqual(EntryFormComponent.errorText.nameMissing);
        });
    })));

    it('should populate too short error if input is too short', inject([], () => {
        return testBuilt.then((fixture: ComponentFixture<any>) => {
                let query = fixture.debugElement.query(By.directive(EntryFormComponent));
                let entryForm = query.componentInstance;

                expect(entryForm.errorMessage).toBe(undefined);
                entryForm.usernameInput.updateValue('ab', { emitEvent: true });
                entryForm.onFormSubmit();
                expect(entryForm.errorMessage).toEqual(EntryFormComponent.errorText.nameTooShort);
            });
    }));
});

@Component({
    selector: 'test',
    template: `
    <jsq-entry-form placeholder='my placeholder'></jsq-entry-form>
  `,
    directives: [EntryFormComponent]
})
class EntryFormComponentTestController {
}

