import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie.model'
import { MovieService } from '../movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  movies: Movie[] = [];

  constructor(private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
