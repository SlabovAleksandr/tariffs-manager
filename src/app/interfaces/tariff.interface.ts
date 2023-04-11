import { TariffTypesEnum } from "../enum";

export interface Tariff {
  name: string;
  benefits: number[];
  type: TariffTypesEnum;
  price: number;
  contract_period: number;
  download_speed: number;
  upload_speed: number;
  postcodes: string[];
}

export interface Benefits {
  id: number;
  name: string;
  description: string;
}

export interface Tariffs {
  providers: Tariff[];
  benefits: Benefits[];
}

export interface TariffSortOption {
  name: string;
  value: keyof Tariff;
  order: 'asc' | 'desc';
}
