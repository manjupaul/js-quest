import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Hero, HeroClass } from './heroes.models';

@Injectable()
export class NewHeroActions {

    static NAME_ENTERED = '[New Hero] Name Entered';
    static CLASS_SELECTED = '[New Hero] Class Selected';

    nameEntered(name: string): Action {
        return {
            type: NewHeroActions.NAME_ENTERED,
            payload: name
        };
    }

    classSelected(heroClass: HeroClass): Action {
        return {
            type: NewHeroActions.CLASS_SELECTED,
            payload: heroClass
        };
    }

}
