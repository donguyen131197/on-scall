import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscalationPolicyComponent } from "./escalation-policy/escalation-policy.component";
import {LayoutComponent} from "./layout.component"
import { CreatePolicyComponent } from "./create-policy/create-policy.component";


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: EscalationPolicyComponent },
      { path: 'create', component: CreatePolicyComponent }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscalationPolicyRoutingModule { }
