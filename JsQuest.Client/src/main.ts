import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideStore } from '@ngrx/store';
import { runEffects } from '@ngrx/effects';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';
import reducer from './app/reducers';
import effects from './app/effects';
import services from './app/services';
import { AppComponent, environment } from './app/';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provideStore(reducer),
  runEffects(effects),
  instrumentStore({
    monitor: useLogMonitor({
      position: 'right',
      visible: true
    })
  }),
  services
]).catch((err: any) => console.error(err));

