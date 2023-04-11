import { Pipe, PipeTransform } from '@angular/core';
import { Tariff, TariffSortOption } from "../interfaces";

@Pipe({
  name: 'tariffSort'
})
export class TariffSortPipe implements PipeTransform {
  transform(tariffs: Tariff[] | null, { value, order }: TariffSortOption): Tariff[] {
    if (!Array.isArray(tariffs) || !value) {
      return tariffs || [];
    }

    const isAscendingSorting = order === 'asc';

    return tariffs.sort((a: Tariff, b: Tariff) => {
      if (a[value] < b[value]) {
        return isAscendingSorting ? -1 : 1;
      } else if (a[value] > b[value]) {
        return isAscendingSorting ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
