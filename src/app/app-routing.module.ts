import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GameTitleComponent } from "./modules/games/components/game-title/game-title.component";
import { GamesComponent } from './modules/games/components/games/games.component';
import { SignUpComponent } from "./modules/games/components/sign-up/sign-up.component";
import { SigninComponent} from "./modules/games/components/signin/signin.component";

const routes: Routes = [
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'games', component: GamesComponent },
  { path: 'game-title', component: GameTitleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
