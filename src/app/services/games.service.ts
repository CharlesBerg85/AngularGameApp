import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Genre } from '../types/genre';
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
  constructor() { }
}
