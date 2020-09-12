import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { IncidentComponent } from "./incident/incident.component";
import { IncidentDetailComponent } from "./incident-detail/incident-detail.component";
import { ServiceComponent } from "./service/service.component";
import { EscalationPolicyComponent } from "./escalation-policy/escalation-policy.component";
import { HomeComponent } from "./home/home.component";
import { CreateIncidentComponent } from "./create-incident/create-incident.component";
import { ServiceDetailComponent } from "./service-detail/service-detail.component";
import { CreateRoutingKeyComponent } from "./create-routing-key/create-routing-key.component";
import { AddChannelComponent } from "./add-channel/add-channel.component";
import { CreateServiceComponent } from "./create-service/create-service.component";
import { CreatePolicyComponent } from "./create-policy/create-policy.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'incident', component: IncidentComponent },
  { path: 'create-incident', component: CreateIncidentComponent },
  { path: 'incident-detail', component: IncidentDetailComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'service-detail', component: ServiceDetailComponent },
  { path: 'create-routing-key', component: CreateRoutingKeyComponent },
  { path: 'add-channel', component: AddChannelComponent },
  { path: 'create-service', component: CreateServiceComponent },
  { path: 'escalation-policy', component: EscalationPolicyComponent },
  { path: 'create-policy', component: CreatePolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
