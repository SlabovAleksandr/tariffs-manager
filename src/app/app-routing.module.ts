import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TariffManagerComponent} from "./tariff-manager/tariff-manager.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TariffManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
