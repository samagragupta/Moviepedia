import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private api_key = '4a7711ce4033e38e64bb7adb7c50cff2';
  private people_url = 'https://api.themoviedb.org/3/';

  constructor(public _http: HttpClient) { }

  getPeople() {
    return this._http.get(this.people_url + 'person/popular?api_key=' + this.api_key);
  }
}
