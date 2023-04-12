import { NgModule } from '@angular/core';
import { ProviderItemComponent } from "./provider-item.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    ProviderItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressBarModule
  ],
  providers: [],
  exports: [
    ProviderItemComponent
  ]
})
export class ProviderItemModule {}
