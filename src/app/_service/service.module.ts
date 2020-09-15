import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceRoutingModule } from './service-routing.module';

import { ServiceComponent } from './service/service.component';
import {LayoutComponent} from './layout.component'
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { CreateRoutingKeyComponent } from './create-routing-key/create-routing-key.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    ServiceComponent,
    LayoutComponent,
    ServiceDetailComponent,
    CreateRoutingKeyComponent,
    AddChannelComponent,
    CreateServiceComponent,
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class ServiceModule { }
