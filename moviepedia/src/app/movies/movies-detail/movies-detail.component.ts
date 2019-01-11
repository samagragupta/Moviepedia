import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  @Input() movie : Movie

  constructor() { }

  ngOnInit() {
  }

}
