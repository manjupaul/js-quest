import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './app';
import { enableProdMode } from '@angular/core';
import {AppModule} from './app/app.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


