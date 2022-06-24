import { Component, OnInit } from '@angular/core';
import { Career } from '../interfaces/career';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  careers: Career[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
  }

  getCareers() {
    this.loading = true;
    this.database.getCareers().subscribe(careers => {
      this.careers = careers;
    })
  }

}
