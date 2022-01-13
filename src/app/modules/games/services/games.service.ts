import { Injectable } from '@angular/core';
import { Game } from '../../../shared/models/game';
import { Genre } from '../../../shared/types/genre';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GamesService {
  games: Game[] = [
    {
      id: 1,
      name: 'Resident Evil',
      genre: Genre.Horror 
    },
    {
      id: 2,
      name: 'UnCharted',
      genre: Genre.Adventure 
    },
    {
      id: 3,
      name: 'Street Fighter',
      genre: Genre.Fighting 
    }
  ]
  constructor() {}

  getGames = (): Observable<Game[]> => {
    return of(this.games);
  }
}
