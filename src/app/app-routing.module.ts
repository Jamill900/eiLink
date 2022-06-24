import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { MainComponent } from './main/main.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { PublicationsComponent } from './publications/publications.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'team', component: TeamDetailsComponent},
  { path: 'publications', component: PublicationsComponent},
  { path: 'projects/:id', component: ProjectDetailsComponent},
  { path: 'careers', component: CareersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
