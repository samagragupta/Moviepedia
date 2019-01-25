import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../save/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeMovies()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

}
