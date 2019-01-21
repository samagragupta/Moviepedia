import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  movies: any;

  constructor() { 
    this.movies = [
      {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
       title: "Avengers: Infinity War", overview: "As the Avengers and their allies have continued to protect the world from threats too large"},
      {id: 1, poster_src: "https://image.tmdb.org/t/p/w185/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
       title: "	The Avengers", overview: "This is my second overview"},
    ]
  }

  ngOnInit() {}

}
