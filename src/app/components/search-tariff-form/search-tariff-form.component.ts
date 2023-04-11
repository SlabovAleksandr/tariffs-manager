import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { TARIFF_SPEED_OPTIONS } from "../../mocks";

@Component({
  selector: 'search-tariff-form',
  templateUrl: './search-tariff-form.component.html',
  styleUrls: ['./search-tariff-form.component.scss']
})
export class SearchTariffFormComponent {
  @Output() triggerFiltering = new EventEmitter();

  public postalCodeForm = new FormControl('');
  public selectedSpeed = 0;
  public readonly tariffSpeedOptions = TARIFF_SPEED_OPTIONS;

  constructor() {}

  public internetSpeedHandler(speed: number) {
    this.selectedSpeed = speed === this.selectedSpeed ? 0 : speed;
  }

  public searchTariffs() {
    this.triggerFiltering.emit({ speed: this.selectedSpeed, postalCode: this.postalCodeForm.value });
  }
}
