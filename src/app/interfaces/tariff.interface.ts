export interface Tariff {
  name: string;
  benefits: number[];
  type: string;
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
