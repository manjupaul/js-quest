import {Player} from '../players/';
export interface Hero {
    name: string;
    player: Player;
    heroClass: HeroClass;
}

export interface HeroClass {
    className: string;
}
