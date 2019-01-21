import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { AllMoviesService } from './all-movies/all-movies.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieListComponent,
    MovieItemComponent,
    MoviesDetailComponent,
    AllMoviesComponent,
    MovieStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AllMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
