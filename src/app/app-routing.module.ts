import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
const usersModule = () => import('./_user/user.module').then(x => x.UserModule);
const incidentModule = () => import('./_incident/incident.module').then(x => x.IncidentModule);
const serviceModule =()=>import('./_service/service.module').then(x=>x.ServiceModule);
const escalationModule=()=>import('./_escalation-policy/escalation-policy.module').then(x=>x.EscalationPolicyModule);
const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'user', loadChildren: usersModule  },
  { path: 'incident', loadChildren: incidentModule  },
  { path: 'service', loadChildren: serviceModule  },
  { path: 'escalation', loadChildren: escalationModule  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
