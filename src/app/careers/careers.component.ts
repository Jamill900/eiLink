import { Component, OnInit } from '@angular/core';
import { Career } from '../interfaces/career';
import { DatabaseService } from '../services/database.service';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  faLocationDot = faLocationDot;

  careers: Career[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getCareers();
    AOS.init();
  }

  getCareers() {
    this.loading = true;
    this.database.getCareers().subscribe(careers => {
      this.careers = careers;
    })
  }

  navigateTo(url: string) {
    window.open(url, '_blank');
  }

}
