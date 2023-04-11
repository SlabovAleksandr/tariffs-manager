import {Tariffs} from "../interfaces";

export const TARIFFS_MOCK: Tariffs = {
  "providers": [
    {
      "name": "Provider A",
      "benefits": [1],
      "type": "Fiber",
      "price": 50,
      "contract_period": 12,
      "download_speed": 100,
      "upload_speed": 100,
      "postcodes": ["01234", "56789", "10123", "76543"]
    },
    {
      "name": "Provider A",
      "benefits": [3],
      "type": "Cable",
      "price": 40,
      "contract_period": 24,
      "download_speed": 50,
      "upload_speed": 20,
      "postcodes": ["01234", "56789", "10123", "76543"]
    },
    {
      "name": "Provider A",
      "benefits": [],
      "type": "DSL",
      "price": 30,
      "contract_period": 12,
      "download_speed": 16,
      "upload_speed": 5,
      "postcodes": ["01234", "56789", "10123", "76543"]
    },
    {
      "name": "Provider B",
      "benefits": [2, 4],
      "type": "Fiber",
      "price": 60,
      "contract_period": 24,
      "download_speed": 100,
      "upload_speed": 250,
      "postcodes": ["56789", "10123"]
    },
    {
      "name": "Provider B",
      "benefits": [],
      "type": "Cable",
      "price": 45,
      "contract_period": 12,
      "download_speed": 100,
      "upload_speed": 10,
      "postcodes": ["56789", "10123"]
    },
    {
      "name": "Provider B",
      "benefits": [1],
      "type": "DSL",
      "price": 35,
      "contract_period": 24,
      "download_speed": 50,
      "upload_speed": 10,
      "postcodes": ["01234", "56789", "10123"]
    },
    {
      "name": "Provider C",
      "benefits": [2, 3],
      "type": "Fiber",
      "price": 70,
      "contract_period": 12,
      "download_speed": 500,
      "upload_speed": 500,
      "postcodes": ["01234", "76543"]
    },
    {
      "name": "Provider C",
      "benefits": [1],
      "type": "Cable",
      "price": 50,
      "contract_period": 12,
      "download_speed": 100,
      "upload_speed": 15,
      "postcodes": ["01234", "76543"]
    },
    {
      "name": "Provider C",
      "benefits": [4],
      "type": "DSL",
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
