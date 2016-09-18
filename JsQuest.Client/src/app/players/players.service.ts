import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Player} from './players.models';
import {Observable} from 'rxjs';

@Injectable()
export class PlayersService {
    static ERROR_NO_NAME: string = 'You must provide a name before venturing forth!';
    private API_PATH: string = 'http://localhost:5000/api/players';

    constructor(private http: Http) {}

    findPlayer(id: Number): Observable<Player> {
        return this.http.get(`${this.API_PATH}/${id}`).map(res => res.json());
    }

    searchPlayers(email: string): Observable<Player[]>  {
        return this.http.get(`${this.API_PATH}?email=${email}`).map(res => res.json());
    }
}
