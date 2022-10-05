import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../interfaces/project';
import { DatabaseService } from '../services/database.service';
import AOS from "aos";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;
  popupEnabled: boolean = false;

  constructor(
    private database: DatabaseService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProjectById();
    AOS.init();
  }

  isActive = [false, false, false, false, false, false];

  popup(index: number) {
    if (!this.isActive[index]) {
      this.isActive = new Array(false, false, false, false, false, false);
      this.isActive[index] = !this.isActive[index];
    }
    else {
      this.isActive[index] = false;
    }
  }

  /* popup() {
    this.popupEnabled = !this.popupEnabled;
    console.log(this.popupEnabled)
  } */

  getProjectById(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.database.getProjectById(id).subscribe(project => this.project = project);
  }

}
