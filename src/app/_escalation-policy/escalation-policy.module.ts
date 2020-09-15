import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EscalationPolicyComponent } from './escalation-policy/escalation-policy.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import {EscalationPolicyRoutingModule} from './escalation-policy-routing.module'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {LayoutComponent} from './layout.component'
@NgModule({
  declarations: [
    LayoutComponent,
    EscalationPolicyComponent,
    CreatePolicyComponent
  ],
  imports: [
    CommonModule,
    EscalationPolicyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class EscalationPolicyModule { }
