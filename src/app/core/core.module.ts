import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiEndpointsService } from './services/api-endpoints.service';
import { ApiHttpService } from './services/api-http.service';
import { Constants } from '../config/constants';
import { LocalStorageService } from './services/local-storage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ApiEndpointsService, ApiHttpService, Constants, LocalStorageService]
})
export class CoreModule { }
