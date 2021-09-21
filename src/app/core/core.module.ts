import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiEndpointsService } from './services/api-endpoints.service';
import { ApiHttpService } from './services/api-http.service';
import { Constants } from '../config/constants';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ApiEndpointsService, ApiHttpService, Constants]
})
export class CoreModule { }
