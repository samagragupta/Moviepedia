import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  people: any;

  constructor(private router: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.peopleService.getDetail(id).subscribe(data => {
        this.people = data;
      });
    });
  }

}
