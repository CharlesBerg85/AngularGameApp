import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { Genre } from '../types/genre';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
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
  constructor() { 

  }

  ngOnInit(): void {
  }

}
