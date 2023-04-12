import { Component, Input } from '@angular/core';
import {Benefit, Tariff} from '../../interfaces';

@Component({
  selector: 'tariff-details',
  templateUrl: './tariff-details.component.html',
  styleUrls: ['./tariff-details.component.scss']
})
export class TariffDetailsComponent {
  @Input() public provider: Tariff | undefined;
  @Input() public benefits: Benefit[] = [];
  public activeTab = 1;

  constructor() {}

  public setTab(tab: number) {
    this.activeTab = tab;
  }

  public getTariffBenefitName(id: number): Benefit['name'] {
    return this.benefits.find((benefit) => benefit.id === id)?.name || 'Unknown';
  }
}
