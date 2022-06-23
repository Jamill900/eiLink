import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../interfaces/project';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;

  constructor(
    private database: DatabaseService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProjectById();
  }

  getProjectById(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.database.getProjectById(id).subscribe(project => this.project = project);
  }

}
