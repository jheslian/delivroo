export const db = [
  {
    restaurantName: "Wow Galette",
    description:
      "la meilleur galette de toute la terre et bien plus encore!",
    promo: "Spend €35, get 15% off",
    distance: 2.8,
    fee: "2.99 delivery",
    note: 5.0,
    category: "Sandwich",
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
        price: 13.0,
        description: "2 brochettes  + 4 accompagnements",
        url: require("./assets/images/restos/ass5var.png"),
        popular: true,
      },
    ],
  },
  {
    restaurantName: "La Florentine",
    description:
      "Pizzeria traditionnelle italienne, toutes nos Pizza sont faites maison préparées à base de produits frais et cuite au feux de bois",
    promo: "Spend €35, get 15% off",
    distance: 0.5,
    fee: "2.99 delivery",
    note: 3.0,
    category: "Pizza",
    listsDish: [
      {
        name: "Vegetarian",
        price: 12,
        description:
          "Tomate, mozzarella, champignons, aubergines, poivrons, courgettes et artichaut",
        url: require("./assets/images/restos/laVeg.png"),
        popular: true,
      },
      {
        name: "Chef",
        price: 12,
        description: "Tomate, mozzarella, merguez, oignons, œuf",
        url: require("./assets/images/restos/chef.png"),
        popular: false,
      },
      {
        name: "Florine",
        price: 12,
        description: "Tomate, mozzarella, merguez, oignons, œuf",
        url: require("./assets/images/restos/florentine.png"),
        popular: false,
      },
    ],
  },
  {
    restaurantName: "California sushi",
    description:
      "Venez découvrir les meilleurs sushis de Paris chez California Sushi ! 🍣 ",
    promo: "Spend €50 - Free delivery",
    distance: 3.2,
    fee: "1.50 delivery",
    note: 4.9,
    category: "Sushi",
    listsDish: [
      {
        name: "Choux crevettes",
        price: 9,
        description: "Choux crevettes sucrée",
        url: require("./assets/images/restos/chuCrev.png"),
        popular: false,
      },
      {
        name: "Crevette avocat sushi",
        price: 7,
        description: "Tomate, mozzarella, merguez, oignons, œuf",
        url: require("./assets/images/restos/crev.png"),
        popular: true,
      },
    ],
  },
  {
    restaurantName: "Wadam sushi",
    description: "Sushi pour toute la famille",
    promo: "Spend €50 get 2€ off",
    distance: 0.7,
    fee: "1.99 delivery",
    note: 4.7,
    category: "Sushi",
    listsDish: [
      {
        name: "Le tigre qui pleur",
        price: 8.9,
        description: "Sushi roll avec gingembre",
        url: require("./assets/images/restos/loc.png"),
        popular: false,
      },
      {
        name: "Boeuf loc loc",
        price: 11.5,
        description: "riz avec morceaux de boeuf ",
        url: require("./assets/images/restos/tigre.png"),
        popular: true,
      },
    ],
  },
  {
    restaurantName: "Chicken Spot",
    description:
      "les meilleurs burgers du meilleur restaurant américain",
    promo: "Spend €35, get 15% off",
    distance: 4.08,
    fee: 0,
    note: 4.4,
    category: "Sandwich",

    listsDish: [
      {
        name: "Chicken Mixte",
        price: 9.8,
        description:
          "2 pièces de poulet + 3 wings (ailes et pilons) marinés et cuisinés d'après la recette originale CS. Avec : - 2 sauces au choix, - 1 portion de frite, - 1 boisson 33 cl.",
        url: require("./assets/images/restos/ChickenMixte.png"),
        popular: false,
      },
      {
        name: "Hot'n'Spicy Wings",
        price: 11.2,
        description:
          "10 wings (ailes et pilons) marinés et cuisinés d'après la recette originale Chicken Spot. Avec : - 2 sauces au choix, - 1 portion de frite, - 1 boisson 33 cl.",
        url: require("./assets/images/restos/HotSpicy.png"),
        popular: true,
      },
      {
        name: "Spicy Strips",
        price: 11.2,
        description:
          "15 morceaux de poulet tendre marinés et cuisinés à la sauce Tikka spéciale CS (non épicé). Avec : - 2 sauces au choix, - 1 portion de frite, - 1 boisson 33 cl.",
        url: require("./assets/images/restos/SpicyStrips.png"),
        popular: false,
      },
    ],
  },

  {
    restaurantName: "Fête à Crêpe",
    description:
      "Le menu Fête à Crêpe vous propose des crêpes décalées, bien loin de la sempiternelle galette bretonne.",
    promo: "Spend €15, get 10% off",
    distance: 0.45,
    fee: 0,
    note: 4.4,
    category: "Dessert",

    listsDish: [
      {
        name: "Chiken twin crêpe",
        price: 11.4,
        description:
          "Taille au choix. Algérienne, boursin, oignons frits, chorizo, mozzarella, tenders",
        url: require("./assets/images/restos/ChickenMixte.png"),
        popular: false,
      },
      {
        name: "Frenchy crêpe",
        price: 9.9,
        description:
          "T-Taille au choix. Crème fraîche, pommes de terre, champignons, salade, raclette, poulet fumé et lardons de volaille",
        url: require("./assets/images/restos/FranchyCrepe.png"),
        popular: false,
      },
    ],
  },
  {
    restaurantName: "CHIC'N TASTY",
    description:
      "Venez découvrir nos poulets rôtis, notre riz thaï, nos frites cuites façons belges ainsi que nos délicieuses bananes plantins.",
    distance: 1.99,
    promo: "",
    fee: 0.45,
    note: 0,
    category: "Dessert",

    listsDish: [
      {
        name: "Tiramisus nutella oreo",
        price: 3.5,
        description: "Tiramisus nutella oreo",
        url: require("./assets/images/restos/TiramissusNutellaOreo.png"),
        popular: false,
      },
      {
        name: "Tiramisus nutella cookies",
        price: 3.5,
        description: "Tiramisus nutella coockies",
        url: require("./assets/images/restos/Tirnuaco.png"),
        popular: false,
      },
    ],
  },
  {
    restaurantName: "Tipsy's",
    description:
      "L'alcool est dangereux pour la santé, à consommer avec modération.",
    promo: "Spend €20 get 1.5€ off",
    distance: 1.2,
    fee: "2.99 delivery",
    note: 4.4,
    category: "Epicerie",
    listsDish: [
      {
        name: "Vodka",
        price: 30.0,
        description: "Smirnoff 70 CL",
        url: require("./assets/images/restos/loc.png"),
        popular: false,
      },
      {
        name: "Olives",
        price: 5.0,
        description: "Olives farcies",
        url: require("./assets/images/restos/tigre.png"),
        popular: false,
      },
    ],
  },
  {
    restaurantName : "Poke me 17e",
    description:"Les meilleurs poke bowl de Paris",
    promo:"",
    promotion: "",
    distance: "2 km away",
    fee: "0.99 delivery",
    note: "5.0 Very Good (600) ",
    category: "PokeBowl",
    listsDish : [ {
       name: "POKE BOWL DU CHEF",
       price: 11.90,
       description: "Saumon, marinade, oignons, cornichons, ... merci de voire la photo pour le reste",
       url:require("./assets/images/restos/pokeme17e-chef.jpg"),
       popular : "popular"
    },
    {
       name:"POKE BOWL DAURADE",
       price: 11.90,
       description:"Daurade, tomate, radis, grenade, gingembre...",
       url:require("./assets/images/restos/pokeme17e-daurade.jpg"),
       popular : "",
    }]
   },
   {
     restaurantName : "Dirty vegan burgers",
     description:"Des burgers à en faire rougir les carnivores!" ,
     promo:"",
     distance: "2 km away",
     fee: "0.99 delivery",
     note: "5.0 Very Good (600) ",
     category: "Burger",
     listsDish : [ {
       name:"The OAB",
       price:11.50,
       description:"L'original burger dans toute sa splendeur",
       url:require("./assets/images/restos/dirtyveganburgers-OAB.jpg"),
       popular : "popular"
    },
    {
       name:"The CSB",
       price: 12.50,
       description:"Chick'n Slaw Burger",
       url:require("./assets/images/restos/dirtyveganburgers-CSB.jpg"),
       popular : "popular"
    }]
   },
   {
     restaurantName : "O'Nan Kebab",
     description: "Un kebab dans un pain nan? Pourquoi personne n'y a pensé avant?",
     promo:"",
    distance: "2 km away",
    fee: "0.99 delivery",
    note: "5.0 Very Good (600) ",
    category: "Kebab",
    listsDish : [ {
       name:"Cheese nan poulet",
       price:7,
       description:"Cheese nan au poulet",
       url:require("./assets/images/restos/onankebab-cheesenanpoulet.jpg"),
       popular : ""
    },
    {
      name:"Cheese nan kebab",
      price:7,
      description:"Cheese nan au kebab",
      url:require("./assets/images/restos/onankebab-cheesenankebab.jpg"),
      popular : "popular"
   }]
   },
   {
     restaurantName : "Il grano",
     description: "Des pizzas meilleures qu'en Italie",
     promo:"",
    distance: "2 km away",
    fee: "0.99 delivery",
    note: "5.0 Very Good (600) ",
    category: "Pizza",
    listsDish : [ {
       name:"Margherita champignons",
       price:12.99,
       description:"Sauce tomate, mozza, basilic et champis de Paris",
       url:require("./assets/images/restos/ilgrano-margherita.jpg"),
       popular : "popular"
    },
    {
      name:"Romolo margherita",
      price:13.49,
      description:"Sauce tomate, mozza, basilic et cannabis",
      url:require("./assets/images/restos/ilgrano-romolo.jpg"),
      popular : ""
   }]
  },
  {
    restaurantName : "Yoshi",
    description: "Voyagez sans bouger avec nos petits plats!",
    promo:"",
    distance: "2 km away",
    fee: "0.99 delivery",
    note: "5.0 Very Good (600) ",
    category: "Sushi",
    listsDish : [ {
       name:"Saumon",
       price:12.80,
       description:"12 pièces",
       url:require("./assets/images/restos/yoshi-saumon.jpg"),
       popular : ""
    },
    {
      name:"Brochettes boeuf fromage",
      price:15,
      description:"12 pièces",
      url:require("./assets/images/restos/yoshi-brochettes.jpg"),
      popular : "popular"
   }]
  },
  {
    restaurantName : "O'Tacos",
    description: "Venez découvrir nos recettes exclusives",
    promo:"",
    distance: "2 km away",
    fee: "0.99 delivery",
    note: "5.0 Very Good (600) ",
    category: "Tacos",
    listsDish : [ {
       name:"So'Raclette M",
       price:8,
       description:"Viande haché, Balls raclette, sauce sweet onions gatiné raclette",
       url:require("./assets/images/restos/otacos-raclette.jpg"),
       popular : "popular"
    },
    {
      name:"Le végé 2.0",
      price:7,
      description:"Champignons, poivronnade, gratiné de cheddar",
      url:require("./assets/images/restos/otacos-vege.jpg"),
      popular : ""
   }]
  },
  {
    restaurantName : "Ky-Ten by Cookâme",
     description: "Des recettes à couper le souffle",
     promo:"",
    distance: "2 km away",
    fee: "0.99 delivery",
    note: "5.0 Very Good (600) ",
    category: "Vietnamese",
    listsDish : [ {
       name:"Bo Bun Duo",
       price:8,
       description:"Nems, oignons, crudités, menthe et coriandre,vermicelles et cacahuètes",
       url:require("./assets/images/restos/kyten-bobunduo.jpg"),
       popular : "popular"
    },
    {
      name:"Banh Mi",
      price:7,
      description:"Recette street food spicy mayo, poulet sauté, crudités, concombre, coriandre, oignons",
      url:require("./assets/images/restos/kyten-banhmi.jpg"),
      popular : "popular"
   }]
  },
  {
    restaurantName : "La maison du p'tit déj",
     description: "Tout ce qu'il faut pour bien commencer la journée",
     promo:"",
    distance: "2 km away",
    fee: "0.99 delivery",
    note: "5.0 Very Good (600) ",
    category: "Breakfast",
    listsDish : [ {
       name:"Assortiement de viennoiseries",
       price:9,
       description:"3 chocolatines (je vois déjà les pro pains au chocolat s'énerver) et 3 croissants",
       url:require("./assets/images/restos/lamaisonduptitdej-viennoiseries.jpg"),
       popular : ""
    },
    {
      name:"Pancakes",
      price:7,
      description:"Pancakes au sirop d'érable",
      url:require("./assets/images/restos/lamaisonduptitdej-pancakes.jpeg"),
      popular : "popular"
   }]
  },
  {
    restaurantName : "Ferme ton bagel",
     description: "Des sandwichs de qualité avec un trou dedans",
     promo:"",
    distance: "3 km away",
    fee: "0.99 delivery",
    note: "5.0 Very Good (600) ",
    category: "Bagels",
    listsDish : [ {
       name:"Bagel oeuf crudités",
       price:9,
       description:"Un bagel avec un oeuf et des crudités",
       url:require("./assets/images/restos/fermetonbagel-oeufcrudites.jpg"),
       popular : "popular"
    },
    {
      name:"Bagel poulet aubergines",
      price:7,
      description:"Bagel avec poulet au curry, aubergines grillées et coulis de miel",
      url:require("./assets/images/restos/fermetonbagel-pouletaubergines.jpeg"),
      popular : "popular"
   }]
  },
];
