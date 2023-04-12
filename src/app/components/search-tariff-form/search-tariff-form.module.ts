import { NgModule } from '@angular/core';
import { SearchTariffFormComponent } from "./search-tariff-form.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SearchTariffFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchTariffFormComponent
  ],
  providers: [],
})
export class SearchTariffFormModule {}
