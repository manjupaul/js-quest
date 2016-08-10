import { Component } from '@angular/core';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { EntryFormComponent } from './players';

@Component({
    moduleId: module.id,
    selector: 'jsq-app',
    templateUrl: 'app.component.html',
    directives: [EntryFormComponent, StoreLogMonitorComponent]
})
export class AppComponent {
}
