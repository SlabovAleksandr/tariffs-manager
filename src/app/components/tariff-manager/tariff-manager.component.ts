import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {
  combineLatest,
  map,
  Observable,
  startWith,
  Subject,
} from 'rxjs';
import { TariffService } from '../../services';
import { SearchTariffsPayload, Tariff, TariffSortOption} from '../../interfaces';
import {
  DEFAULT_TARIFF_SORTING_OPTION,
  TARIFF_SORTING_OPTIONS,
  TARIFF_TYPE_OPTIONS
} from "../../mocks";

@Component({
  selector: 'tariff-manager',
  templateUrl: './tariff-manager.component.html',
  styleUrls: ['./tariff-manager.component.scss']
})
export class TariffManagerComponent implements OnInit {
  public providers$: Observable<Tariff[]> = new Observable<Tariff[]>();
  public tariffTypeForm = new FormControl('');
  public tariffSortingForm = new FormControl(DEFAULT_TARIFF_SORTING_OPTION);
  public triggerFiltering$ = new Subject<SearchTariffsPayload>();

  public readonly tariffTypeOptions = TARIFF_TYPE_OPTIONS;
  public readonly tariffSortingOptions: TariffSortOption[] = TARIFF_SORTING_OPTIONS;

  public get sortingSettings() {
    return this.tariffSortingForm.getRawValue() ?? DEFAULT_TARIFF_SORTING_OPTION;
  }

  constructor(
    private tariffService: TariffService
  ) {}

  ngOnInit() {
    this.providers$ = combineLatest([
      this.tariffService.getTariffs(),
      this.tariffTypeForm.valueChanges.pipe(startWith('')),
      this.triggerFiltering$.pipe(startWith({ speed: 0, postalCode: 0 })),
    ]).pipe(
      map(([tariffs, tariffTypeFilter, searchTariffsPayload]) => {
        return tariffs.providers.filter((provider) => {
          const isTypeRelevant = !tariffTypeFilter || provider.type === tariffTypeFilter;
          const isSpeedRelevant = !searchTariffsPayload.speed || provider.download_speed === searchTariffsPayload.speed;
          const isPostalCodeRelevant = !searchTariffsPayload.postalCode || provider.postcodes.includes(searchTariffsPayload.postalCode.toString());

          return isTypeRelevant && isSpeedRelevant && isPostalCodeRelevant;
        });
      })
    );
  }

  public searchTariffs(result: SearchTariffsPayload) {
    this.triggerFiltering$.next(result);
  }
}
