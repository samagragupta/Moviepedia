import { Injectable } from '@angular/core';
import { MovieService } from '../movies/movies.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movies/movie.model';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private movieService: MovieService, private http: HttpClient) { }

  storeMovies() {
    return this.http.put('https://moviepedia-4211a.firebaseio.com//movies.json', this.movieService.getMovies());
  }

  getMovies() {
    this.http.get('https://moviepedia-4211a.firebaseio.com//movies.json')
      // .pipe(map(
      //   (response: Response) => {
      //     const movies: Movie[] = response.json();
      //     for (let movie of movies) {
      //       if (!movie['ingredients']) {
      //         movie['ingredients'] = [];
      //       }
      //     }
      //     return movies;
      //   }
      // ))
      .subscribe(
        (movies: Movie[]) => {
          this.movieService.setMovies(movies);
        }
      );
  }
}
