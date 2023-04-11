import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  combineLatest,
  map,
  Observable,
  startWith,
  Subject,
  takeUntil,
} from 'rxjs';
import { TariffService } from '../../services';
import { SearchTariffsPayload, Tariff, TariffSortOption } from '../../interfaces';
import { TariffTypesEnum } from "../../enum";
import { FormControl } from "@angular/forms";
import { TARIFF_SPEED_OPTIONS } from "../../mocks";

const defaultSortingValue: TariffSortOption = {
  name: 'Provider',
  value: 'name',
  order: 'asc'
};

@Component({
  selector: 'tariff-manager',
  templateUrl: './tariff-manager.component.html',
  styleUrls: ['./tariff-manager.component.scss']
})
export class TariffManagerComponent implements OnInit, OnDestroy {
  public providers$: Observable<Tariff[]> = new Observable<Tariff[]>();
  public tariffTypeForm = new FormControl('');
  public tariffSortingForm = new FormControl(defaultSortingValue);
  public selectedSpeed = 0;
  public triggerFiltering$ = new Subject<SearchTariffsPayload>();

  public tariffTypeOptions = [{
    value: TariffTypesEnum.DSL
  }, {
    value: TariffTypesEnum.Cable
  }, {
    value: TariffTypesEnum.Fiber
  }];

  public tariffSortingOptions: TariffSortOption[] = [
    defaultSortingValue,
  {
    name: 'Provider',
    value: 'name',
    order: 'desc'
  }, {
    name: 'Connection Type',
    value: 'type',
    order: 'asc'
  }, {
    name: 'Connection Type',
    value: 'type',
    order: 'desc'
  }, {
    name: 'Price',
    value: 'price',
    order: 'asc'
  }, {
    name: 'Price',
    value: 'price',
    order: 'desc'
  }];

  public readonly tariffSpeedOptions = TARIFF_SPEED_OPTIONS;

  public get sortingSettings() {
    return this.tariffSortingForm.getRawValue() ?? defaultSortingValue;
  }

  private destroyed$ = new Subject<void>();

  constructor(
    private tariffService: TariffService
  ) {}

  ngOnInit() {
    this.providers$ = combineLatest([
      this.tariffService.getTariffs(),
      this.tariffTypeForm.valueChanges.pipe(startWith('')),
      this.triggerFiltering$.pipe(startWith({ speed: 0, postalCode: 0 })),
    ]).pipe(
      takeUntil(this.destroyed$),
      map(([tariffs, tariffTypeFilter, searchTariffsPayload]) => {
        return tariffs.providers.filter((provider) => {
          const isTypeRelevant = !tariffTypeFilter || provider.type === tariffTypeFilter;
          const isSpeedRelevant = !searchTariffsPayload.speed || provider.download_speed >= searchTariffsPayload.speed;
          const isPostalCodeRelevant = !searchTariffsPayload.postalCode || provider.postcodes.includes(searchTariffsPayload.postalCode.toString());

          return isTypeRelevant && isSpeedRelevant && isPostalCodeRelevant;
        });
      })
    );
  }

  public ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public searchTariffs(result: SearchTariffsPayload) {
    this.triggerFiltering$.next(result);
  }
}
