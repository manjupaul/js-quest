import { Routes } from '@angular/router';
import {WelcomeComponent} from './pages/welcome';
import {NewHeroComponent} from './pages/new-hero';


export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'hero/new',
        component: NewHeroComponent
    }
];
