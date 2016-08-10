"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var players_actions_1 = require('./players.actions');
var effects_1 = require('@ngrx/effects');
var PlayerEffects = (function () {
    function PlayerEffects(updates$) {
        this.updates$ = updates$;
        this.search$ = this.updates$
            .whenAction(players_actions_1.PlayerActions.SEARCH);
    }
    __decorate([
        effects_1.Effect()
    ], PlayerEffects.prototype, "search$", void 0);
    PlayerEffects = __decorate([
        core_1.Injectable()
    ], PlayerEffects);
    return PlayerEffects;
}());
