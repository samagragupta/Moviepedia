import { Injectable } from '@angular/core';
import { MovieService } from '../movies/movies.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private movieService: MovieService, private http: HttpClient) { }

  storeMovies() {
    return this.http.put('https://moviepedia-4211a.firebaseio.com//movies.json', this.movieService.getMovies());
  }
}
