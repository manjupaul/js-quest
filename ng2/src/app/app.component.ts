import { Component } from '@angular/core';
import { EntryFormComponent } from './entry-form';

@Component({
    moduleId: module.id,
    selector: 'jsq-app',
    templateUrl: 'app.component.html',
    directives: [EntryFormComponent]
})
export class AppComponent {
    
}
