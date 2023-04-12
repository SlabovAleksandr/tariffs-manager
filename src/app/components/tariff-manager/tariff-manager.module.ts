import { NgModule } from '@angular/core';
import { TariffManagerComponent } from "./tariff-manager.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {ProviderItemModule} from "../provider-item/provider-item.module";
import {SearchTariffFormModule} from "../search-tariff-form/search-tariff-form.module";
import {ApplicationPipesModule} from "../../pipes/application-pipes.module";

@NgModule({
  declarations: [
    TariffManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ProviderItemModule,
    SearchTariffFormModule,
    ApplicationPipesModule
  ],
  exports: [
    TariffManagerComponent
  ],
  providers: [],
})
export class TariffManagerModule {}
