import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectorCardComponent } from './director-card/director-card.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GenreCardComponent } from './genre-card/genre-card.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { SynopsisCardComponent } from './synopsis-card/synopsis-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectorCardComponent,
    EditProfileComponent,
    GenreCardComponent,
    HeaderComponent,
    LoginPageComponent,
    ProfileViewComponent,
    SynopsisCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
