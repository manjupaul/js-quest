import { NgModule }       from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { PlayersService } from './players';
import { PlayerActions } from './players';
import { PlayersEffects } from './players';

import { routes } from './routes';
import reducer from './reducers';

import { AppComponent }   from './app.component';
import { NewHeroComponent } from './pages/new-hero/new-hero.component';
import { NewHeroIdentityComponent } from './heroes/new-hero-identity';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { EntryFormComponent } from './players/entry-form';
import { GameboardComponent } from './game/gameboard/gameboard.component';
import { GameComponent } from './pages/game/game.component';


@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        EntryFormComponent,
        NewHeroComponent,
        NewHeroIdentityComponent,
        GameboardComponent,
        GameComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        StoreModule.provideStore(reducer),
        EffectsModule.run(PlayersEffects),
        StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({
                position: 'right',
                visible: false
            })
        }),
        StoreLogMonitorModule
    ],
    bootstrap: [AppComponent],
    providers: [
        PlayerActions,
        PlayersService,
    ]
})
export class AppModule {}
