import { Component, ViewEncapsulation } from '@angular/core';
import { WelcomeComponent } from './pages/welcome';

@Component({
    selector: 'jsq-app',
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['app.component.scss']
})
export class AppComponent {
}
