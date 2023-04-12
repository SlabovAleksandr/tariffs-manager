import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { TariffDetailsComponent } from "./tariff-details.component";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    TariffDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressBarModule,
    MatTableModule
  ],
  providers: [],
  exports: [
    TariffDetailsComponent
  ]
})
export class TariffDetailsModule {}
