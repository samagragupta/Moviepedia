import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AllMoviesService } from './all-movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  movies: any;
  upcoming_movies: any;
  popular_movies: any;

  constructor(public allMovieService: AllMoviesService) { 
    this.movies = [
      {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
       title: "Avengers: Infinity War", overview: "As the Avengers and their allies have continued to protect the world from threats too large"},
      {id: 1, poster_src: "https://image.tmdb.org/t/p/w185/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
       title: "	The Avengers", overview: "This is my second overview"},
    ]

    this.allMovieService.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
    });

    this.allMovieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
    });

  }

  ngOnInit() {}

}
