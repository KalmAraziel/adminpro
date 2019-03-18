import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SharedService,
  SidebardService
} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebardService
  ]
})
export class ServiceModule { }
