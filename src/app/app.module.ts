import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { GamesComponent } from './modules/games/components/games/games.component';

import { GamesService } from './modules/games/services/games.service';
import { GameTitleComponent } from './shared/game-title/game-title.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    GameTitleComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
