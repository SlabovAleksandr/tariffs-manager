import { Injectable } from '@angular/core';
import { map, Observable, Subscriber } from 'rxjs';
import { Benefit, Tariffs } from "../interfaces";
import { TARIFFS_MOCK } from "../mocks";

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  constructor() {}

  public getTariffs(): Observable<Tariffs> {
   return new Observable((subscriber: Subscriber<Tariffs>) => {
      setTimeout(() => {
        subscriber.next(TARIFFS_MOCK);
        subscriber.complete();
      }, 1000);
    });
  }

  public getBenefits(): Observable<Benefit[] | undefined> {
    return this.getTariffs()
      .pipe(map((tariffs) => tariffs.benefits));
  }
}
