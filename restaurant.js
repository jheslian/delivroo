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
    fee: "0 delivery",
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
    fee: "0 delivery",
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
    fee: "0.45 delivery",
    note: 2.1,
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
      promo:"Spend €15, get 5% off",
      distance: 2.3,
      fee: "3.99 delivery",
      note: 3.9,
      category: "Poke-Bowl",
      listsDish : [ {
         name: "POKE BOWL DU CHEF",
         price: 11.90,
         description: "Saumon, marinade, oignons, cornichons, ... merci de voire la photo pour le reste",
         url:require("./assets/images/restos/pokeme17e-chef.jpg"),
         popular : false
      },
      {
         name:"POKE BOWL DAURADE",
         price: 11.90,
         description:"Daurade, tomate, radis, grenade, gingembre...",
         url:require("./assets/images/restos/pokeme17e-daurade.jpg"),
         popular : true,
      }]
   },
   {
      restaurantName : "Dirty vegan burgers",
      description:"Des burgers à en faire rougir les carnivores!" ,
      promo:"",
      distance: 2.5,
      fee: "2.99 delivery",
      note: 4.8,
      category: "Burger",
      listsDish : [ {
         name:"The OAB",
         price:11.50,
         description:"L'original burger dans toute sa splendeur",
         url:require("./assets/images/restos/dirtyveganburgers-OAB.jpg"),
         popular : true
      },
      {
         name:"The CSB",
         price: 12.50,
         description:"Chick'n Slaw Burger",
         url:require("./assets/images/restos/dirtyveganburgers-CSB.jpg"),
         popular : true
      }]
   },
   {
      restaurantName : "O'Nan Kebab",
      description: "Un kebab dans un pain nan? Pourquoi personne n'y a pensé avant?",
      promo:"",
      distance: 2.6,
      fee: "0.99 delivery",
      note: 4.0,
      category: "Kebab",
      listsDish : [ {
         name:"Cheese nan poulet",
         price:7,
         description:"Cheese nan au poulet",
         url:require("./assets/images/restos/onankebab-cheesenanpoulet.jpg"),
         popular : false
      },
      {
         name:"Cheese nan kebab",
         price:7,
         description:"Cheese nan au kebab",
         url:require("./assets/images/restos/onankebab-cheesenankebab.jpg"),
         popular : true
      }]
   },
   {
      restaurantName : "Il grano",
      description: "Des pizzas meilleures qu'en Italie",
      promo:"Spend €10, get 35% off",
      distance: 1.3,
      fee: "0.99 delivery",
      note: 3.9,
      category: "Pizza",
      listsDish : [ {
         name:"Margherita champignons",
         price:12.99,
         description:"Sauce tomate, mozza, basilic et champis de Paris",
         url:require("./assets/images/restos/ilgrano-margherita.jpg"),
         popular : true
      },
      {
         name:"Romolo margherita",
         price:13.49,
         description:"Sauce tomate, mozza, basilic et cannabis",
         url:require("./assets/images/restos/ilgrano-romolo.jpg"),
         popular : false
      }]
  },
  {
      restaurantName : "Yoshi",
      description: "Voyagez sans bouger avec nos petits plats!",
      promo:"",
      distance: 3.2,
      fee: "4.00 delivery",
      note: 4.6,
      category: "Sushi",
      listsDish : [ {
         name:"Saumon",
         price:12.80,
         description:"12 pièces",
         url:require("./assets/images/restos/yoshi-saumon.jpg"),
         popular : false
      },
      {
         name:"Brochettes boeuf fromage",
         price:15,
         description:"12 pièces",
         url:require("./assets/images/restos/yoshi-brochettes.jpg"),
         popular : true
      }]
  },
  {
      restaurantName : "O'Tacos",
      description: "Venez découvrir nos recettes exclusives",
      promo:"Spend €15, get 15% off",
      distance: 4.3,
      fee: "2.50 delivery",
      note: 4.3,
      category: "Tacos",
      listsDish : [ {
         name:"So'Raclette M",
         price:8,
         description:"Viande haché, Balls raclette, sauce sweet onions gatiné raclette",
         url:require("./assets/images/restos/otacos-raclette.jpg"),
         popular : true
      },
      {
         name:"Le végé 2.0",
         price:7,
         description:"Champignons, poivronnade, gratiné de cheddar",
         url:require("./assets/images/restos/otacos-vege.jpg"),
         popular : false
      }]
  },
  {
      restaurantName : "Ky-Ten by Cookâme",
      description: "Des recettes à couper le souffle",
      promo:"Spend €20, get 35% off",
      distance: 5.1,
      fee: "0.99 delivery",
      note: 4.6,
      category: "Viet",
      listsDish : [ {
         name:"Bo Bun Duo",
         price:8,
         description:"Nems, oignons, crudités, menthe et coriandre,vermicelles et cacahuètes",
         url:require("./assets/images/restos/kyten-bobunduo.jpg"),
         popular : true
      },
      {
         name:"Banh Mi",
         price:7,
         description:"Recette street food spicy mayo, poulet sauté, crudités, concombre, coriandre, oignons",
         url:require("./assets/images/restos/kyten-banhmi.jpg"),
         popular : true
      }]
  },
  {
      restaurantName : "La maison du p'tit déj",
      description: "Tout ce qu'il faut pour bien commencer la journée",
      promo:"",
      distance: 2.8,
      fee: "1.99 delivery",
      note: 3.2,
      category: "Petit-dej",
      listsDish : [ {
         name:"Assortiement de viennoiseries",
         price:9,
         description:"3 chocolatines (je vois déjà les pro pains au chocolat s'énerver) et 3 croissants",
         url:require("./assets/images/restos/lamaisonduptitdej-viennoiseries.jpg"),
         popular : false
      },
      {
         name:"Pancakes",
         price:7,
         description:"Pancakes au sirop d'érable",
         url:require("./assets/images/restos/lamaisonduptitdej-pancakes.jpeg"),
         popular : true
      }]
  },
  {
      restaurantName : "Ferme ton bagel",
      description: "Des sandwichs de qualité avec un trou dedans",
      promo:"",
      distance: 6.3,
      fee: "0.99 delivery",
      note: 4.9,
      category: "Bagels",
      listsDish : [ {
         name:"Bagel oeuf crudités",
         price:9,
         description:"Un bagel avec un oeuf et des crudités",
         url:require("./assets/images/restos/fermetonbagel-oeufcrudites.jpg"),
         popular : true
      },
      {
         name:"Bagel poulet aubergines",
         price:7,
         description:"Bagel avec poulet au curry, aubergines grillées et coulis de miel",
         url:require("./assets/images/restos/fermetonbagel-pouletaubergines.jpeg"),
         popular : true
      }]
  },
   {
      restaurantName : "Allo Apero",
      description: "Everyday Essentials",
      promo: "Spend €35, get 1 stick of cigarette",
      distance: 2.8,
      fee: "2.99 delivery",
      note: 4.2 ,
      category: "Epicerie",
      listsDish : [ {
            name : "Heineken",
            price : 37.00,
            description : "Pack de 24 bières",
            url: require("./assets/images/restos/hen.png"),
            popular : true
         },
         {
            name: "Coca-Cola",
            price: 4.00,
            description: "1.5 Litre",
            url: require("./assets/images/restos/coca.png"),
            popular : false
         },
         {
            name: "Merlot Vigne Antique",
            price: 18.00,
            description: "70 cl vin rouge",
            url: require("./assets/images/restos/vin.png"),
            popular : false
         }],
   },
   {
      restaurantName : "LA FABRIQUE DU SUSHI",
      description:'À La Fabrique du Sushi, votre restaurant japonais, goûtez à de nombreuses préparations minutes, faites maison, réalisées avec amour, soin et attention',
      promo: "Spend €20, get 20% off",
      distance: 1.48,
      fee: "3.0 delivery" ,
      note: 4.4 ,
      category: "Sushi",
   
      listsDish : [ {
         name : "Poke Saumon",
         price : 12.50,
         description : "Riz vinaigré, thon, avocat, carottes, edamamé, tomates cerise, algues wakame et graines de sésame",
         url: require("./assets/images/restos/PokeThon.png"),
         popular : true,
      },
      {
          name : "Poke Poulet Pané",
          price : 13.50,
          description : "Riz vinaigré, poulet pané, avocat, carottes, edamamé, tomates cerise, algues wakame et graines de sésame",
          url: require("./assets/images/restos/PoPoulPan.png"),
          popular : false,
      }]
   },
   {
      restaurantName : "Le Yen",
      description:"Notre restaurant dépend des produits de saison, notre carte est établie en fonction de l’arrivage du marché",
      promo: "",
      distance: 1.93,
      fee: "15.0 delivery",
      note: 5 ,
      category: "Sushi",
  
      listsDish : [ {
         name : "Sushi anguille",
         price : 18,
         description : "Sushi anguille",
         url: require("./assets/images/restos/Sushianguille.png"),
         popular : false,
      },
      {
         name : "Sushi saumon mi cuit fromage",
         price : 13,
         description : "Sushi saumon mi cuit fromage",
         url: require("./assets/images/restos/PokeSaumon.png"),
         popular : true,
      }]
   },
   {
    restaurantName : "DAILYDEJ",
    description:"Commoncez votre journée avec nos délices",
    promo: "",
    distance: 2.3,
    fee: 14,
    note: 4.2 ,
    category: "Petit-dej",

    listsDish : [ {
       name : "La New-Yorkaise",
       price : 7,
       description : "1 Smoothie pomme banane kiwi de 25 cL, 1 pancake caramel beurre salé et 1 salade de fruits de saison bio et locaux.",
       url: require("./assets/images/restos/sanfran.png"),
       popular : false,
    },
    {
       name : "La San Francisco",
       price : 8.50,
       description : "1 Jus d’orange clémentine de 25 cL, 1 pancake pâte à tartiner et 1 salade de fruits de saison bio et locaux.",
       url: require("./assets/images/restos/ny.png"),
       popular : true,
    },
    {
       name : "Cake cacahuète, caramel",
       price : 10.50,
       description : "Miel, cacahuètes, caramel maison, poudre d'amande, sucre, beurre, œuf bio plein air",
       url: require("./assets/images/restos/cakecam.png"),
       popular : false,
    },
    {
       name : "La Montparnasse",
       price : 9.90,
       description : "1 Jus d’orange clémentine de 25 cL, 1 pain au chocolat pur beurre et 1 salade de fruits de saison bio et locaux",
       url: require("./assets/images/restos/lamont.png"),
       popular : false,
    },
    {
       name : "Le BolyDej'",
       price : 7.50,
       description : "BolyDej' Granola",
       url: require("./assets/images/restos/leboly.png"),
       popular : false,
    }]
 },
 {
    restaurantName : "LA BELLE VIE",
    description:'Nos produits artisanaux et ultra frais, réalisés dans notre laboratoire de cuisine à Paris, sont généralement à consommer le jour même de leur livraison',
    promo: "Spend €10, get 5% off",
    distance: 4.08,
    fee: '3 delivery',
    note: 4,
    category: "Petit-dej",
 
    listsDish : [ {
       name : "L'énergique",
       price : 5.75,
       description : "Deux mini-viennoiseries artisanales provenant de la boulangerie Tout Autour du Pain (Meilleur croissant IDF 2015), une salade de fruits maison et un jus d'oranges fraichement pressées",
       url: require("./assets/images/restos/energique.png"),
       popular : true,
    },
    {
      name : "Jus frais de pomme maison",
      price : 9.75,
      description : "Retrouvez le bon goût des pommes dans un jus 100% naturel, 100% fait maison, réalisé grâce à un extracteur de jus",
      url: require("./assets/images/restos/Jus.png"),
      popular : true,
   },
   {
      name : "Cake Orange, Le Bar à Cake ",
      price : 14.00,
      description : "Le cake orange, ou comment mordre dans un cake à pleines dents ! Doux et savoureux, si vous aimez les agrumes, laissez-vous séduire par ce goût fruité et légèrement acidulé... ",
      url: require("./assets/images/restos/Cake.png"),
      popular : true,
   }
   ,
   {
      name : "Cake Pomme Tatin Le Bar à Cake ",
      price : 9.95,
      description : "Le saviez-vous, les soeurs Tatin se sont aussi déclinées en cake. Les pommes sont cuites à coeur pour délivrer leur croquant et leur arôme. Les pommes fondantes sauront vous faire fondre complètement",
      url: require("./assets/images/restos/PommeCa.png"),
      popular : true,
   }
   ,
   {
      name : "us frais de raisin blanc ",
      price : 12.00,
      description : "Notre jus de raisin blanc est réalisé à la commande grâce à un extracteur de jus. Cette technique permet de conserver toutes les vitamines et la vitalité du raisin pour délivrer le jus le plus frais et le plus savoureux.",
      url: require("./assets/images/restos/JusRai.png"),
      popular : true,
   }
   ]
},

{
   restaurantName : "Instant-Lunch,",
   description:'Les petits-déjeuners d’Instant-Lunch, adaptés à tous goûts et tous les appétits',
   promo: "Spend €20, get 5% off",
   distance: 1.08,
   fee: '0.99 delivery',
   note: 5,
   category: "Petit-dej",

   listsDish : [ {
      name : "Formule Confort",
      price : 10.90,
      description : "1 mini pain au chocolat, 1 mini croissant,1 madeleine maison,1 verrine de fruits frais",
      url: require("./assets/images/restos/forConf.png"),
      popular : true,
   },
   {
      name : "Formule Prestige",
      price : 14.90,
      description : "Café en grain 1L, 5 sachets – Thé prestige Compagnie Coloniale, Chocolat chaud à l’ancienne 50cL, Jus d’orange pressé 1L, Smoothies frais 1L",
      url: require("./assets/images/restos/petitDejePrest.png"),
      popular : true,
   },]
},

{
   restaurantName : "Ensuite,",
   description:'Les petits-déjeuners d’Instant-Lunch, adaptés à tous goûts et tous les appétits',
   promo: "Spend €40, get 25% off",
   distance: 0.80,
   fee: '0.49 delivery',
   note: 4,
   category: "Petit-dej",

   listsDish : [ {
      name : "P'tit dej Parisien",
      price : 5.90,
      description : "1 x croissant ou pain au chocolat, 1 x pomme, 1 x jus d'orange pressé par nos soins, 25cl",
      url: require("./assets/images/restos/DejParisien.png"),
      popular : true,},

      {
         name : "P'tit dej complet",
         price : 10.30,
         description : "1 x croissant ou pain au chocolat, 1 x pomme, 1 x muffin au chocolat,1 x jus Sweet Kiss (orange, pomme passion) pressé par nos soins - 25cl",
         url: require("./assets/images/restos/PdejParisien.png"),
         popular : true,
   },
   {
      name : "Rehab - 25cl",
      price : 4.90,
      description : "Concombre, chou kale, pomme, citron Pressé dans nos bars à jus",
      url: require("./assets/images/restos/kubrick.png"),
      popular : false,
},]},


{
   restaurantName : "Dong -Huong,",
   description:'Depuis plus de 25ans nous préparons au Dong Huong, ce qui peut-être considéré comme les meilleurs Bo-bun & Pho de Paris',
   promo: "Spend €20, get 5% off",
   distance: 1.80,
   fee: '2.99 delivery',
   note: 5,
   category: "Viet",

   listsDish : [ {
      name : "Pho dac biet",
      price : 10.20,
      description : "Soupe tonkinoise spéciale.Tonkinese special soup (big or small)",
      url: require("./assets/images/restos/Phdabiet.png"),
      popular: true ,
   },
   {
      name : "Pho saté bovien",
      price : 10.20,
      description : "Soupe au saté aux boulettes de bœuf & viande",
      url: require("./assets/images/restos/PheoSate.png"),
      popular: true ,
   },
   {
      name : "Pho Tom",
      price : 12.10,
      description : "Soupe aux crevettes Tonkinese soup with shrimps",
      url: require("./assets/images/restos/pheTom.png"),
      popular: true ,
   },
   {
      name : "Bun bo lui",
      price : 11.50,
      description : "Brochette de bœuf & vermicelles Grilled beef skewer & vermicelli",
      url: require("./assets/images/restos/Brunbolui.png"),
      popular: true ,
   },
   {
      name : "Chao tom",
      price : 14.50,
      description : "Brochettes de crevettes grillées & galettes de riz",
      url: require("./assets/images/restos/chaoTom..png"),
      popular:false ,
   }
 ]
}
];
