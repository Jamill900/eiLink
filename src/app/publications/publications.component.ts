import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from '../interfaces/publication';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  publications: Publication[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getPublications();
  }

  getPublications() {
    this.loading = true;
    this.database.getPublications().subscribe(publications => {
      this.publications = publications.reverse();
    })
  }

  navigateTo(url: string) {
    window.open(`${url}`, "_blank");
  }

}
