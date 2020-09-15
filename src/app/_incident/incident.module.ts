import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IncidentRoutingModule } from './incident-routing.module';
import { IncidentComponent } from './incident/incident.component';
import { IncidentDetailComponent } from './incident-detail/incident-detail.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {LayoutComponent} from './layout.component'

@NgModule({
  declarations: [
    IncidentComponent,
    IncidentDetailComponent,
    CreateIncidentComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    IncidentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
})
export class IncidentModule { }
