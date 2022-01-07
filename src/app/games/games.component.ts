import { GamesService } from './../services/games.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
   games: Game[] | undefined;
  constructor(private gamesService: GamesService) { 
      this.games = gamesService.games;
  }

  ngOnInit(): void {
  }

}
