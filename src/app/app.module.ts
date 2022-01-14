import { GamesModule } from './modules/games/games.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { GameTitleComponent } from './shared/game-title/game-title.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    GameTitleComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    GamesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
