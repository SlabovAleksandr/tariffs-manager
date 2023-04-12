import { Tariffs, TariffSortOption } from "../interfaces";
import { TariffTypesEnum } from "../enum";

export const TARIFF_SPEED_OPTIONS = [16, 50, 100, 250];

export const TARIFF_TYPE_OPTIONS = [{
  value: TariffTypesEnum.DSL
}, {
  value: TariffTypesEnum.Cable
}, {
  value: TariffTypesEnum.Fiber
}];

export const DEFAULT_TARIFF_SORTING_OPTION: TariffSortOption = {
  name: 'Provider',
  value: 'name',
  order: 'asc'
};

export const TARIFF_SORTING_OPTIONS: TariffSortOption[] = [
  DEFAULT_TARIFF_SORTING_OPTION,
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

export const TARIFFS_MOCK: Tariffs = {
  "providers": [
    {
      "name": "Provider A",
      "benefits": [1],
      "type": TariffTypesEnum.Fiber,
      "price": 50,
      "contract_period": 12,
      "download_speed": 100,
      "upload_speed": 100,
      "postcodes": ["01234", "56789", "10123", "76543"]
    },
    {
      "name": "Provider A",
      "benefits": [3],
      "type": TariffTypesEnum.Cable,
      "price": 40,
      "contract_period": 24,
      "download_speed": 50,
      "upload_speed": 20,
      "postcodes": ["01234", "56789", "10123", "76543"]
    },
    {
      "name": "Provider A",
      "benefits": [],
      "type": TariffTypesEnum.DSL,
      "price": 30,
      "contract_period": 12,
      "download_speed": 16,
      "upload_speed": 5,
      "postcodes": ["01234", "56789", "10123", "76543"]
    },
    {
      "name": "Provider B",
      "benefits": [2, 4],
      "type": TariffTypesEnum.Fiber,
      "price": 60,
      "contract_period": 24,
      "download_speed": 100,
      "upload_speed": 250,
      "postcodes": ["56789", "10123"]
    },
    {
      "name": "Provider B",
      "benefits": [],
      "type": TariffTypesEnum.Cable,
      "price": 45,
      "contract_period": 12,
      "download_speed": 100,
      "upload_speed": 10,
      "postcodes": ["56789", "10123"]
    },
    {
      "name": "Provider B",
      "benefits": [1],
      "type": TariffTypesEnum.DSL,
      "price": 35,
      "contract_period": 24,
      "download_speed": 50,
      "upload_speed": 10,
      "postcodes": ["01234", "56789", "10123"]
    },
    {
      "name": "Provider C",
      "benefits": [2, 3],
      "type": TariffTypesEnum.Fiber,
      "price": 70,
      "contract_period": 12,
      "download_speed": 500,
      "upload_speed": 500,
      "postcodes": ["01234", "76543"]
    },
    {
      "name": "Provider C",
      "benefits": [1],
      "type": TariffTypesEnum.Cable,
      "price": 50,
      "contract_period": 12,
      "download_speed": 100,
      "upload_speed": 15,
      "postcodes": ["01234", "76543"]
    },
    {
      "name": "Provider C",
      "benefits": [4],
      "type": TariffTypesEnum.DSL,
      "price": 40,
      "contract_period": 24,
      "download_speed": 50,
      "upload_speed": 5,
      "postcodes": ["01234", "56789", "76543"]
    }
  ],
  "benefits": [
    {
      "id": 1,
      "name": "No Contract",
      "description": "No minimum contract period required"
    },
    {
      "id": 2,
      "name": "Free Router",
      "description": "Free router provided with subscription"
    },
    {
      "id": 3,
      "name": "Free Installation",
      "description": "Free installation provided with subscription"
    },
    {
      "id": 4,
      "name": "Discount for New Clients",
      "description": "Discount for the first 3 months is offered to new customers"
    }
  ]
};
