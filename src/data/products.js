const products = [
  {
    "id": 1,
    "name": "Nike Model 1",
    "price": 14900,
    "discountPrice": 11920,
    "discountPercent": 20,
    "ratingValue": 4.3,
    "ratingCount": 208,
    "isHot": false,
    "colors": [
      "green",
      "black"
    ],
    "category": "Sneakers",
    "brand": "Nike",
    "imageUrl": "#"
  },
  {
    "id": 2,
    "name": "Puma Model 2",
    "price": 3223,
    "discountPrice": 3223,
    "discountPercent": 0,
    "ratingValue": 3.9,
    "ratingCount": 135,
    "isHot": false,
    "colors": [
      "black",
      "red",
      "blue"
    ],
    "category": "Sneakers",
    "brand": "Skechers",
    "imageUrl": "#"
  },
  {
    "id": 3,
    "name": "Nike Model 3",
    "price": 4052,
    "discountPrice": 3039,
    "discountPercent": 25,
    "ratingValue": 4.5,
    "ratingCount": 462,
    "isHot": true,
    "colors": [
      "white",
      "black"
    ],
    "category": "Sneakers",
    "brand": "Skechers",
    "imageUrl": "#"
  },
  {
    "id": 4,
    "name": "Skechers Model 4",
    "price": 8299,
    "discountPrice": 6639,
    "discountPercent": 20,
    "ratingValue": 4.4,
    "ratingCount": 144,
    "isHot": false,
    "colors": [
      "yellow",
      "black"
    ],
    "category": "Running",
    "brand": "Skechers",
    "imageUrl": "#"
  },
  {
    "id": 5,
    "name": "Reebok Model 5",
    "price": 5813,
    "discountPrice": 4941,
    "discountPercent": 15,
    "ratingValue": 3.8,
    "ratingCount": 128,
    "isHot": false,
    "colors": [
      "yellow",
      "black"
    ],
    "category": "Bag",
    "brand": "Skechers",
    "imageUrl": "#"
  },
  {
    "id": 6,
    "name": "Skechers Model 6",
    "price": 7600,
    "discountPrice": 7600,
    "discountPercent": 0,
    "ratingValue": 4.3,
    "ratingCount": 77,
    "isHot": true,
    "colors": [
      "black",
      "white"
    ],
    "category": "Bag",
    "brand": "Nike",
    "imageUrl": "#"
  },
  {
    "id": 7,
    "name": "Skechers Model 7",
    "price": 13053,
    "discountPrice": 11747,
    "discountPercent": 10,
    "ratingValue": 3.7,
    "ratingCount": 17,
    "isHot": true,
    "colors": [
      "black",
      "red",
      "blue"
    ],
    "category": "Running",
    "brand": "Reebok",
    "imageUrl": "#"
  },
  {
    "id": 8,
    "name": "Nike Model 8",
    "price": 6650,
    "discountPrice": 5985,
    "discountPercent": 10,
    "ratingValue": 4.0,
    "ratingCount": 11,
    "isHot": true,
    "colors": [
      "yellow",
      "black"
    ],
    "category": "Casual",
    "brand": "Reebok",
    "imageUrl": "#"
  },
  {
    "id": 9,
    "name": "Adidas Model 9",
    "price": 7557,
    "discountPrice": 7557,
    "discountPercent": 0,
    "ratingValue": 4.3,
    "ratingCount": 318,
    "isHot": true,
    "colors": [
      "green",
      "black"
    ],
    "category": "Sneakers",
    "brand": "Puma",
    "imageUrl": "#"
  },
  {
    "id": 10,
    "name": "Reebok Model 10",
    "price": 7060,
    "discountPrice": 7060,
    "discountPercent": 0,
    "ratingValue": 4.6,
    "ratingCount": 365,
    "isHot": true,
    "colors": [
      "white",
      "black"
    ],
    "category": "Sneakers",
    "brand": "Puma",
    "imageUrl": "#"
  },
  {
    "id": 11,
    "name": "Nike Model 11",
    "price": 6337,
    "discountPrice": 6337,
    "discountPercent": 0,
    "ratingValue": 4.5,
    "ratingCount": 262,
    "isHot": true,
    "colors": [
      "yellow",
      "black"
    ],
    "category": "Sneakers",
    "brand": "Puma",
    "imageUrl": "#"
  },
  {
    "id": 12,
    "name": "Reebok Model 12",
    "price": 7252,
    "discountPrice": 6164,
    "discountPercent": 15,
    "ratingValue": 4.0,
    "ratingCount": 13,
    "isHot": false,
    "colors": [
      "yellow",
      "black"
    ],
    "category": "Casual",
    "brand": "Nike",
    "imageUrl": "#"
  },
  {
    "id": 13,
    "name": "Adidas Model 13",
    "price": 4005,
    "discountPrice": 3604,
    "discountPercent": 10,
    "ratingValue": 3.7,
    "ratingCount": 207,
    "isHot": true,
    "colors": [
      "yellow",
      "black"
    ],
    "category": "Casual",
    "brand": "Skechers",
    "imageUrl": "#"
  },
  {
    "id": 14,
    "name": "Puma Model 14",
    "price": 9901,
    "discountPrice": 6930,
    "discountPercent": 30,
    "ratingValue": 4.5,
    "ratingCount": 106,
    "isHot": false,
    "colors": [
      "black",
      "white"
    ],
    "category": "Running",
    "brand": "Skechers",
    "imageUrl": "#"
  },
  {
    "id": 15,
    "name": "Reebok Model 15",
    "price": 11463,
    "discountPrice": 10316,
    "discountPercent": 10,
    "ratingValue": 3.7,
    "ratingCount": 284,
    "isHot": false,
    "colors": [
      "green",
      "black"
    ],
    "category": "Belt",
    "brand": "Skechers",
    "imageUrl": "#"
  },
  {
    "id": 16,
    "name": "Puma Model 16",
    "price": 14488,
    "discountPrice": 10141,
    "discountPercent": 30,
    "ratingValue": 3.8,
    "ratingCount": 21,
    "isHot": true,
    "colors": [
      "yellow",
      "black"
    ],
    "category": "Sneakers",
    "brand": "Puma",
    "imageUrl": "#"
  },
  {
    "id": 17,
    "name": "Adidas Model 17",
    "price": 12269,
    "discountPrice": 11042,
    "discountPercent": 10,
    "ratingValue": 5.0,
    "ratingCount": 385,
    "isHot": false,
    "colors": [
      "black",
      "red",
      "blue"
    ],
    "category": "Belt",
    "brand": "Vans",
    "imageUrl": "#"
  },
  {
    "id": 18,
    "name": "Puma Model 18",
    "price": 7468,
    "discountPrice": 5601,
    "discountPercent": 25,
    "ratingValue": 4.7,
    "ratingCount": 349,
    "isHot": false,
    "colors": [
      "yellow",
      "black"
    ],
    "category": "Casual",
    "brand": "Skechers",
    "imageUrl": "#"
  },
  {
    "id": 19,
    "name": "Reebok Model 19",
    "price": 3288,
    "discountPrice": 2466,
    "discountPercent": 25,
    "ratingValue": 4.4,
    "ratingCount": 437,
    "isHot": false,
    "colors": [
      "pink",
      "blue"
    ],
    "category": "Sneakers",
    "brand": "Skechers",
    "imageUrl": "#"
  },
  {
    "id": 20,
    "name": "Vans Model 20",
    "price": 9773,
    "discountPrice": 7818,
    "discountPercent": 20,
    "ratingValue": 4.9,
    "ratingCount": 205,
    "isHot": false,
    "colors": [
      "white",
      "black"
    ],
    "category": "Casual",
    "brand": "Puma",
    "imageUrl": "#"
  },
  {
    "id": 21,
    "name": "Reebok Model 21",
    "price": 1799,
    "discountPrice": 1619,
    "discountPercent": 10,
    "ratingValue": 4.4,
    "ratingCount": 234,
    "isHot": false,
    "colors": [
      "green",
      "black"
    ],
    "category": "Running",
    "brand": "Puma",
    "imageUrl": "#"
  },
  {
    "id": 22,
    "name": "Skechers Model 22",
    "price": 10855,
    "discountPrice": 7598,
    "discountPercent": 30,
    "ratingValue": 4.1,
    "ratingCount": 381,
    "isHot": false,
    "colors": [
      "black",
      "white"
    ],
    "category": "Running",
    "brand": "Vans",
    "imageUrl": "#"
  },
  {
    "id": 23,
    "name": "Vans Model 23",
    "price": 9881,
    "discountPrice": 8892,
    "discountPercent": 10,
    "ratingValue": 4.4,
    "ratingCount": 345,
    "isHot": false,
    "colors": [
      "white",
      "black"
    ],
    "category": "Casual",
    "brand": "Skechers",
    "imageUrl": "#"
  },
  {
    "id": 24,
    "name": "Nike Model 24",
    "price": 14982,
    "discountPrice": 11985,
    "discountPercent": 20,
    "ratingValue": 4.0,
    "ratingCount": 384,
    "isHot": false,
    "colors": [
      "black",
      "red",
      "blue"
    ],
    "category": "Running",
    "brand": "Skechers",
    "imageUrl": "#"
  }
];
export default products;
