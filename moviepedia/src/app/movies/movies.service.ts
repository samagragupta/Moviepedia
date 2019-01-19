import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
    movieSelected = new EventEmitter<Movie>();

    private movies: Movie[] = [
        new Movie(
            'Movie test', 'Movie details', 'https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie-300x200.jpg'
        ),
        new Movie(
            'Movie test 2', 'Movie details 2', 'https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie-300x200.jpg'
        ),
        new Movie(
            'Movie test 2', 'Movie details 2', 'https://s18672.pcdn.co/wp-content/uploads/2018/01/Movie-300x200.jpg'
        )
    ];

    getMovie(index: number) {
        return this.movies[index];
    }

    getMovies() {
        return this.movies.slice();
    }
}