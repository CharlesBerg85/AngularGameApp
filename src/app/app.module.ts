import { MaterialModule } from './material.module';
import { GamesModule } from './modules/games/games.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Import for email/password authentication
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment} from "../environments/environment.prod";

import { AppComponent } from './app.component';
import { GameTitleComponent } from "./modules/games/components/game-title/game-title.component";
import { SignUpComponent } from "./modules/games/components/sign-up/sign-up.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from "./modules/games/components/navbar/navbar.component";
import { SigninComponent } from "./modules/games/components/signin/signin.component";

@NgModule({
  declarations: [
    AppComponent,
    GameTitleComponent,
    SignUpComponent,
    NavbarComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // Add for email/password authentication
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    GamesModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
