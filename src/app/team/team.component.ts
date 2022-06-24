import { Component, OnInit } from '@angular/core';
import { Team } from '../interfaces/team';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: Team[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    this.loading = true;
    this.database.getTeam().subscribe(team => {
      this.team = team;
    })
  }

}
