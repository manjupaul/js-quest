import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Player} from './players.models';
import {Observable} from 'rxjs';

@Injectable()
export class PlayersService {
  private API_PATH: string = 'http://localhost:5000/api/players';

  constructor(private http: Http) {

  }

  findPlayer(id): Observable<Player> {
    return this.http.get(`${this.API_PATH}/${id}`).map(res => res.json());
  }

  searchPlayers(name): Observable<Player[]>  {
    return this.http.get(`${this.API_PATH}`).map(res => res.json());
  }

}
