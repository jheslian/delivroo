const db = [ 
   {
      restaurantName : "Wow Galette",
      description: "la meilleur galette de toute la terre et bien plus encore!",
      promo: "Spend €35, get 15% off",
      distance: 2.8,
      fee: "2.99 delivery",
      note: 5.0 ,
      category: "Sandwich",
      listsDish : [ {
            name : "Galette viande boeuf",
            price : 10.50,
            description : "Viande bovine hachée origine france, tabouleh,crème d’ail. 1 Beignet au choix",
            url: require("./assets/images/restos/galetteViande.png"),
            popular : true
         },
         {
            name: "Assiette variétés",
            price: 9.00,
            description: "1 brochette + 1 pain libanais.",
            url: require("./assets/images/restos/galetteViande.png"),
            popular : false
         },
         {
            name: "Assiette 5 variétés",
            price: 13.00,
            description: "2 brochettes  + 4 accompagnements",
            url: require("./assets/images/restos/ass5var.png"),
            popular : true
         }],
   },
   {
      restaurantName : "La Florentine",
      description: "Pizzeria traditionnelle italienne, toutes nos Pizza sont faites maison préparées à base de produits frais et cuite au feux de bois",
      promo: "Spend €35, get 15% off",
      distance: 0.5,
      fee: "2.99 delivery",
      note: 3.0,
      category: "Pizza",
      listsDish : [ {
         name: "Vegetarian",
         price: 12,
         description: "Tomate, mozzarella, champignons, aubergines, poivrons, courgettes et artichaut",
         url: require("./assets/images/restos/laVeg.png"),
         popular : true
      },
      {
         name: "Chef",
         price: 12,
         description: "Tomate, mozzarella, merguez, oignons, œuf",
         url: require("./assets/images/restos/chef.png"),
         popular : false
      },
      {
         name: "Florine",
         price: 12,
         description: "Tomate, mozzarella, merguez, oignons, œuf",
         url: require("./assets/images/restos/florentine.png"),
         popular : false
      }],
   },
   {
      restaurantName : "California sushi",
      description: "Venez découvrir les meilleurs sushis de Paris chez California Sushi ! 🍣 ",
      promo: "Spend €50 - Free delivery",
      distance: 3.2,
      fee: "1.50 delivery",
      note: 4.9 ,
      category: "Sushi",
      listsDish : [ {
         name: "Choux crevettes",
         price: 9,
         description: "Choux crevettes sucrée",
         url: require("./assets/images/restos/chuCrev.png"),
         popular : false
      },
      {
         name: "Crevette avocat sushi",
         price: 7,
         description: "Tomate, mozzarella, merguez, oignons, œuf",
         url: require("./assets/images/restos/crev.png"),
         popular : true
      }],
   },
   {
      restaurantName : "Wadam sushi",
      description: "Sushi pour toute la famille",
      promo: "Spend €50 get 2€ off",
      distance: 0.7,
      fee: "1.99 delivery",
      note: 4.7 ,
      category: "Sushi",
      listsDish : [ {
         name: "Le tigre qui pleur",
         price: 8.90,
         description: "Sushi roll avec gingembre",
         url: require("./assets/images/restos/loc.png"),
         popular : false
      },
      {
         name: "Boeuf loc loc",
         price: 11.50,
         description: "riz avec morceaux de boeuf ",
         url: require("./assets/images/restos/tigre.png"),
         popular : true
      }],
   },
   {
      restaurantName : "Chicken Spot",
      description:'les meilleurs burgers du meilleur restaurant américain',
      promo: "Spend €35, get 15% off",
      distance: 4.08,
      fee: 0 ,
      note: 4.4 ,
      category: "Sandwich",
   
      listsDish : [ {
         name : "Chicken Mixte",
         price : 9.80,
         description : "2 pièces de poulet + 3 wings (ailes et pilons) marinés et cuisinés d'après la recette originale CS. Avec : - 2 sauces au choix, - 1 portion de frite, - 1 boisson 33 cl.",
         url: require("./assets/images/restos/ChickenMixte.png"),
         popular : false,
      },
      {
         name : "Hot'n'Spicy Wings",
         price : 11.20,
         description : "10 wings (ailes et pilons) marinés et cuisinés d'après la recette originale Chicken Spot. Avec : - 2 sauces au choix, - 1 portion de frite, - 1 boisson 33 cl.",
         url: require("./assets/images/restos/HotSpicy.png"),
         popular : true,
      },
      {
         name : "Spicy Strips",
         price : 11.20,
         description : "15 morceaux de poulet tendre marinés et cuisinés à la sauce Tikka spéciale CS (non épicé). Avec : - 2 sauces au choix, - 1 portion de frite, - 1 boisson 33 cl.",
         url: require("./assets/images/restos/SpicyStrips.png"),
         popular : false,
      }]
   },
      
   {
      restaurantName : "Fête à Crêpe",
      description:'Le menu Fête à Crêpe vous propose des crêpes décalées, bien loin de la sempiternelle galette bretonne.',
      promo: "Spend €15, get 10% off",
      distance: 0.45,
      fee: 0 ,
      note: 4.4 ,
      category: "Dessert",
   
      listsDish : [ {
         name : "Chiken twin crêpe",
         price : 11.40,
         description : "Taille au choix. Algérienne, boursin, oignons frits, chorizo, mozzarella, tenders",
         url: require("./assets/images/restos/ChickenMixte.png"),
         popular : false,
      },
      {
         name : "Frenchy crêpe",
         price : 9.90,
         description : "T-Taille au choix. Crème fraîche, pommes de terre, champignons, salade, raclette, poulet fumé et lardons de volaille",
         url: require("./assets/images/restos/FranchyCrepe.png"),
         popular : false,
      }],
   },          
   {
      restaurantName : "CHIC'N TASTY",
      description:"Venez découvrir nos poulets rôtis, notre riz thaï, nos frites cuites façons belges ainsi que nos délicieuses bananes plantins.",
      distance: 1.99,
      promo: "",
      fee: 0.45 ,
      note: 0,
      category: "Dessert",
   
      listsDish : [{
         name : "Tiramisus nutella oreo",
         price : 3.50,
         description : "Tiramisus nutella oreo",
         url: require("./assets/images/restos/TiramissusNutellaOreo.png"),
         popular : false,
      },
      {
         name : "Tiramisus nutella cookies",
         price : 3.50,
         description : "Tiramisus nutella coockies",
         url: require("./assets/images/restos/Tirnuaco.png"),
         popular : false,
      }],
   },  
   {
      restaurantName : "Tipsy's",
      description: "L'alcool est dangereux pour la santé, à consommer avec modération.",
      promo: "Spend €20 get 1.5€ off",
      distance: 1.2,
      fee: "2.99 delivery",
      note: 4.4 ,
      category: "Epicerie",
      listsDish : [ {
         name: "Vodka",
         price: 30.00,
         description: "Smirnoff 70 CL",
         url: require("./assets/images/restos/vodka.png"),
         popular : false
      },
      {
         name: "Olives",
         price: 5.00,
         description: "Olives farcies",
         url: require("./assets/images/restos/tigre.png"),
         popular : false
      }],
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
            description : "Viande bovine hachée origine france, tabouleh,crème d’ail. 1 Beignet au choix",
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
      fee: 3 ,
   
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
      fee: 15,
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
]

