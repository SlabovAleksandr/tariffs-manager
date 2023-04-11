import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TariffManagerComponent } from "./components/tariff-manager/tariff-manager.component";
import { TariffService } from "./services";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { TariffSortPipe } from "./pipes/tariff-sort.pipe";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    TariffManagerComponent,
    TariffSortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [TariffService],
  bootstrap: [AppComponent]
})
export class AppModule {}
