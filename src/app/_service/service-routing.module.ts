import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from "./service/service.component";
import { ServiceDetailComponent } from "./service-detail/service-detail.component";
import { CreateRoutingKeyComponent } from "./create-routing-key/create-routing-key.component";
import { AddChannelComponent } from "./add-channel/add-channel.component";
import { CreateServiceComponent } from "./create-service/create-service.component";
import {LayoutComponent} from "./layout.component"

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: ServiceComponent },
      { path: 'create', component: CreateServiceComponent },
      { path: ':serviceID', component: ServiceDetailComponent },
      { path: 'create-routing-key', component: CreateRoutingKeyComponent },
      { path: 'add-channel', component: AddChannelComponent },
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
