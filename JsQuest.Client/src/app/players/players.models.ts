import {Hero} from '../heroes';

export interface Player {
    email: string;
    displayName: string;
    lastLoginAt: Date;
    ipAddress: string;
    heroes: Hero[];
}
