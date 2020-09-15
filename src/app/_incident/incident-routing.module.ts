import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidentComponent } from "./incident/incident.component";
import { IncidentDetailComponent } from "./incident-detail/incident-detail.component";
import { CreateIncidentComponent } from "./create-incident/create-incident.component";
import {LayoutComponent} from './layout.component'


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: IncidentComponent },
      { path: 'create', component: CreateIncidentComponent },
      { path: ':incidentID', component: IncidentDetailComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentRoutingModule { }
