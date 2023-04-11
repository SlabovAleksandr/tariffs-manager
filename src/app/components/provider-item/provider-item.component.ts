import { Component, Input } from '@angular/core';
import { Tariff } from '../../interfaces';

@Component({
  selector: 'provider-item',
  templateUrl: './provider-item.component.html',
  styleUrls: ['./provider-item.component.scss']
})
export class ProviderItemComponent {
  @Input() public provider: Tariff | undefined;

  constructor() {}
}
