import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IncidentComponent } from './incident/incident.component';
import { ServiceComponent } from './service/service.component';
import { EscalationPolicyComponent } from './escalation-policy/escalation-policy.component';
import { HomeComponent } from './home/home.component';
import { IncidentDetailComponent } from './incident-detail/incident-detail.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { CreateRoutingKeyComponent } from './create-routing-key/create-routing-key.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IncidentComponent,
    ServiceComponent,
    EscalationPolicyComponent,
    HomeComponent,
    IncidentDetailComponent,
    CreateIncidentComponent,
    ServiceDetailComponent,
    CreateRoutingKeyComponent,
    AddChannelComponent,
    CreateServiceComponent,
    CreatePolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
