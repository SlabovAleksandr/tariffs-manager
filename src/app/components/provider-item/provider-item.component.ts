import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from "rxjs";
import { Benefit, Tariff } from '../../interfaces';
import { TariffService } from "../../services";

@Component({
  selector: 'provider-item',
  templateUrl: './provider-item.component.html',
  styleUrls: ['./provider-item.component.scss']
})
export class ProviderItemComponent implements OnInit {
  @Input() public provider: Tariff | undefined;
  public showTariffDetails = false;
  public benefits: Benefit[] = [];

  constructor(
    private tariffService: TariffService
  ) {}

  async ngOnInit() {
    this.benefits = await lastValueFrom(this.tariffService.getBenefits()) || [];
  }

  public getTariffBenefitName(id: number): Benefit['name'] {
    return this.benefits.find((benefit) => benefit.id === id)?.name || 'Unknown';
  }
}
