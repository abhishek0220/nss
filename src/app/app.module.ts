import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { DialogOverviewExampleDialog, DomainsComponent } from './components/domains/domains.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { TeamComponent } from './components/team/team.component';
import { RulesComponent } from './components/rules/rules.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DomainsComponent,
    ActivitiesComponent,
    TeamComponent,
    RulesComponent,
    ContactComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MglTimelineModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
