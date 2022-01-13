import { GamesService } from 'src/app/modules/games/services/games.service';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
   games: Game[] | undefined;
   dataService: GamesService | undefined;
   
  constructor(private gamesService: GamesService) {
    this.dataService = gamesService;
  }

  ngOnInit(): void {
    this.dataService?.getGames().subscribe(games => this.games = games);
  }

}
