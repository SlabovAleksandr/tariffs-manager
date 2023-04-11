import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Tariffs } from "../interfaces";
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
}
