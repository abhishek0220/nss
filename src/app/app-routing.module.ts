import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ContactComponent } from './components/contact/contact.component';
import { DomainsComponent } from './components/domains/domains.component';
import { HomeComponent } from './components/home/home.component';
import { RulesComponent } from './components/rules/rules.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Domains',
    component: DomainsComponent
  },
  {
    path: 'Activities',
    component: ActivitiesComponent
  },
  {
    path: 'Team',
    component: TeamComponent
  },
  {
    path: 'Rules',
    component: RulesComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
