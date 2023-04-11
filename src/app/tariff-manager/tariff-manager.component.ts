import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TariffService } from '../services';
import { Tariffs } from '../interfaces';

@Component({
  selector: 'tariff-manager',
  templateUrl: './tariff-manager.component.html',
  styleUrls: ['./tariff-manager.component.scss']
})
export class TariffManagerComponent implements OnInit {
  public postalCode = '';
  public tariffs$: Observable<Tariffs> = new Observable<Tariffs>();

  constructor(
    private tariffService: TariffService
  ) { }

  ngOnInit() {
    this.tariffs$ = this.tariffService.getTariffs();
  }

  public searchTariffs() {

  }
}
