import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './components/games/games.component';
import { GamesService } from './services/games.service';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule
  ],
  providers: [GamesService],
  exports: [GamesComponent]
})
export class GamesModule { }
