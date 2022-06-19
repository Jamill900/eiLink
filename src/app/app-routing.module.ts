import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainComponent},
  { path: 'team', component: TeamDetailsComponent},
  { path: 'project/:id', component: ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
