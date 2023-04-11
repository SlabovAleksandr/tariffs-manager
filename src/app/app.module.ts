import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TariffManagerComponent } from "./tariff-manager/tariff-manager.component";
import { TariffService } from "./services/tariff.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    TariffManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  providers: [TariffService],
  bootstrap: [AppComponent]
})
export class AppModule {}
