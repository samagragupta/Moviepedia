import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie.model'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Output() movieWasSelected = new EventEmitter<Movie>();
  movies: Movie[] = [
    new Movie('Movie test', 'Movie details', 'https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie-300x200.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onMovieSelected(movie: Movie) {
    this.movieWasSelected.emit(movie);
   }

}
