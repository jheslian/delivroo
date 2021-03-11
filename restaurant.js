export const db = [
  {
    restaurantName: "Wow Galette",
    description:
      "la meilleur galette de toute la terre et bien plus encore!",
    distance: "2.8",
    fee: "2.99 delivery",
    promo: "Spend €35, get 15% off",
    note: 5.0,
    category: "Pizza",
    listsDish: [
      {
        name: "Galette viande boeuf",
        price: 10.5,
        description:
          "Viande bovine hachée origine france, tabouleh,crème d’ail. 1 Beignet au choix",
        url: require("./assets/images/restos/galetteViande.png"),
        popular: true,
      },
      {
        name: "Assiette variétés",
        price: 9.0,
        description: "1 brochette + 1 pain libanais.",
        url: require("./assets/images/restos/asVar.png"),
        popular: false,
      },
      {
        name: "Assiette 5 variétés",
        price: 9.0,
        description: "2 brochettes  + 4 accompagnements",
        url: "./assets/images/restos/laVeg.png",
        popular: true,
      },
    ],
  },
  // {
  //    "restaurantName" : "La Florentine",
  //    "distance": "1 km away",
  //    "fee": "0.99 delivery",
  //    "promo": "Spend €20, get €2 off",
  //    "note": "3.0 Fair (2100) ",
  //    "category": ["Famille", "Télétravail", ],
  //    "listsDish" : [ {
  //       "name": "Vegetarian",
  //       "price": 12,
  //       "discountedPrice": "",
  //       "description": ""
  //       "price":
  //       "url":
  //       "popular" : "popular"
  //    }],
  //    "listMenu":[{
  //       "name":
  //       "price":
  //       "discountedPrice":
  //       "description":
  //       "price":
  //       "url":
  //       "popular" : "popular"}]

  // }
];
