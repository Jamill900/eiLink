import { Component, OnInit } from '@angular/core';
import { Team } from '../interfaces/team';
import { DatabaseService } from '../services/database.service';
import AOS from "aos";

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  team: Team[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getTeam();
    AOS.init();
  }

  getTeam() {
    this.loading = true;
    this.database.getTeam().subscribe(team => {
      this.team = team;
    })
  }

}
