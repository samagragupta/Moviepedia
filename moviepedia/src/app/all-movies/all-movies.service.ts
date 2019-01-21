import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllMoviesService {

  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = '4a7711ce4033e38e64bb7adb7c50cff2';

  constructor(public _http: HttpClient) { }

  getUpcomingMovies() {
    return this._http.get(this.movie_url + 'discover/movie?primary_release_date.gte=2018-04-15&primary_release_date.lte=2018-07-31' + '&api_key=' + this.api_key);
  }

}
