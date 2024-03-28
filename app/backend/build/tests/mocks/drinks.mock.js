"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doneDrinks = exports.createFavorite = exports.favoriteDrinks = exports.formattedInProgressDefault = exports.inProgressDeafult = exports.drinkById = exports.recipesByIngredient = exports.allIngredients = exports.allCategories = exports.validDrinkByCategory = exports.validDrinkByFirstLetter = exports.validDrinkByName = exports.validDrink = void 0;
const startRecipeInProgress_1 = require("../../utils/startRecipeInProgress");
exports.validDrink = {
    "idDrink": 1,
    "strDrink": "A1",
    "strDrinkAlternate": null,
    "strTags": null,
    "strVideo": null,
    "strIBA": null,
    "strAlcoholic": "Alcoholic",
    "strGlass": "Cocktail glass",
    "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
    "strInstructionsES": "Vierta todos los ingredientes en una coctelera, mezcle y sirva con hielo en un vaso frío.",
    "strInstructionsDE": "Alle Zutaten in einen Cocktailshaker geben, mischen und über Eis in ein gekühltes Glas servieren.",
    "strInstructionsFR": null,
    "strInstructionsIT": "Versare tutti gli ingredienti in uno shaker, mescolare e servire con ghiaccio in un bicchiere freddo.",
    "strInstructionsZHHANS": "",
    "strInstructionsZHHANT": "",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
    "strIngredient1": "Gin",
    "strIngredient2": "Grand Marnier",
    "strIngredient3": "Lemon Juice",
    "strIngredient4": "Grenadine",
    "strIngredient5": null,
    "strIngredient6": null,
    "strIngredient7": null,
    "strIngredient8": null,
    "strIngredient9": null,
    "strIngredient10": null,
    "strIngredient11": null,
    "strIngredient12": null,
    "strIngredient13": null,
    "strIngredient14": null,
    "strIngredient15": null,
    "strMeasure1": "1 3/4 shot ",
    "strMeasure2": "1 Shot ",
    "strMeasure3": "1/4 Shot",
    "strMeasure4": "1/8 Shot",
    "strMeasure5": null,
    "strMeasure6": null,
    "strMeasure7": null,
    "strMeasure8": null,
    "strMeasure9": null,
    "strMeasure10": null,
    "strMeasure11": null,
    "strMeasure12": null,
    "strMeasure13": null,
    "strMeasure14": null,
    "strMeasure15": null,
    "strImageSource": null,
    "strImageAttribution": null,
    "strCreativeCommonsConfirmed": "No",
    "dateModified": "2017-09-07 21:42:09",
    "strCategory": "Cocktail"
};
exports.validDrinkByName = [
    {
        "idDrink": 1,
        "strDrink": "A1",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": 2,
        "strIBA": null,
        "strAlcoholic": "Alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
        "strInstructionsES": "Vierta todos los ingredientes en una coctelera, mezcle y sirva con hielo en un vaso frío.",
        "strInstructionsDE": "Alle Zutaten in einen Cocktailshaker geben, mischen und über Eis in ein gekühltes Glas servieren.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Versare tutti gli ingredienti in uno shaker, mescolare e servire con ghiaccio in un bicchiere freddo.",
        "strInstructionsZHHANS": "",
        "strInstructionsZHHANT": "",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
        "strIngredient1": "Gin",
        "strIngredient2": "Grand Marnier",
        "strIngredient3": "Lemon Juice",
        "strIngredient4": "Grenadine",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 3/4 shot ",
        "strMeasure2": "1 Shot ",
        "strMeasure3": "1/4 Shot",
        "strMeasure4": "1/8 Shot",
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2017-09-07 21:42:09"
    }
];
exports.validDrinkByFirstLetter = [
    {
        "idDrink": 412,
        "strDrink": "Yellow Bird",
        "strDrinkAlternate": null,
        "strTags": "IBA,NewEra",
        "strVideo": null,
        "strCategory": 2,
        "strIBA": "New Era Drinks",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "Shake and strain into a chilled cocktail glass",
        "strInstructionsES": null,
        "strInstructionsDE": "In ein gekühltes Cocktailglas schütteln und abseihen.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Shakerare e filtrare in una coppetta da cocktail ghiacciata",
        "strInstructionsZHHANS": "",
        "strInstructionsZHHANT": "",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/2t9r6w1504374811.jpg",
        "strIngredient1": "White Rum",
        "strIngredient2": "Galliano",
        "strIngredient3": "Triple Sec",
        "strIngredient4": "Lime Juice",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "3 cl",
        "strMeasure2": "1.5 cl",
        "strMeasure3": "1.5 cl",
        "strMeasure4": "1.5 cl",
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2017-09-02 18:53:31"
    },
];
exports.validDrinkByCategory = [
    {
        "idDrink": 2,
        "strDrink": "ABC",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strIBA": null,
        "strAlcoholic": "Alcoholic",
        "strGlass": "Shot glass",
        "strInstructions": "Layered in a shot glass.",
        "strInstructionsES": "Coloque todos los ingredientes en un vaso de chupito.",
        "strInstructionsDE": "Schichtaufbau in einem Schnapsglas.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Versa in ordine di lettera i vari ingredienti. 1/3 del bicchiere va riempito con l'Amaretto, 1/3 di Baileys e il restante di Cognac.",
        "strInstructionsZHHANS": "",
        "strInstructionsZHHANT": "",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
        "strIngredient1": "Amaretto",
        "strIngredient2": "Baileys irish cream",
        "strIngredient3": "Cognac",
        "strIngredient4": null,
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1/3 ",
        "strMeasure2": "1/3 ",
        "strMeasure3": "1/3 ",
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2016-08-31 19:32:08",
        "strCategory": "Shot"
    },
];
exports.allCategories = [
    {
        "idCategory": 1,
        "strCategory": "Ordinary Drink"
    },
    {
        "idCategory": 2,
        "strCategory": "Cocktail"
    },
];
exports.allIngredients = [
    "Gin",
    "Grand Marnier",
    "Lemon Juice",
];
exports.recipesByIngredient = [
    {
        "idDrink": 22,
        "strDrink": "Alexander",
        "strDrinkAlternate": null,
        "strTags": "IBA,Classic,Dairy",
        "strVideo": "https://www.youtube.com/watch?v=qEhRK_v2w2g",
        "strIBA": "Unforgettables",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
        "strInstructionsES": "Agite todos los ingredientes con hielo y cuele el contenido en una copa de cóctel. Espolvorea nuez moscada encima y sirve.",
        "strInstructionsDE": "Alle Zutaten mit Eis schütteln und in ein Cocktailglas abseihen. Muskatnuss darüber streuen und servieren.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Shakerare tutti gli ingredienti con ghiaccio e filtrare il contenuto in un bicchiere da cocktail. Cospargere di noce moscata e servire.",
        "strInstructionsZHHANS": "",
        "strInstructionsZHHANT": "",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg",
        "strIngredient1": "Gin",
        "strIngredient2": "Creme de Cacao",
        "strIngredient3": "Light cream",
        "strIngredient4": "Nutmeg",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1/2 oz ",
        "strMeasure2": "1/2 oz white ",
        "strMeasure3": "2 oz ",
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": "https://www.pxfuel.com/en/free-photo-expqp",
        "strImageAttribution": "pxfuel.com",
        "strCreativeCommonsConfirmed": "Yes",
        "dateModified": "2016-11-04 09:50:39",
        "strCategory": "Ordinary Drink"
    },
];
exports.drinkById = {
    "idDrink": 2,
    "strDrink": "ABC",
    "strDrinkAlternate": null,
    "strTags": null,
    "strVideo": null,
    "strCategory": 6,
    "strIBA": null,
    "strAlcoholic": "Alcoholic",
    "strGlass": "Shot glass",
    "strInstructions": "Layered in a shot glass.",
    "strInstructionsES": "Coloque todos los ingredientes en un vaso de chupito.",
    "strInstructionsDE": "Schichtaufbau in einem Schnapsglas.",
    "strInstructionsFR": null,
    "strInstructionsIT": "Versa in ordine di lettera i vari ingredienti. 1/3 del bicchiere va riempito con l'Amaretto, 1/3 di Baileys e il restante di Cognac.",
    "strInstructionsZHHANS": "",
    "strInstructionsZHHANT": "",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
    "strIngredient1": "Amaretto",
    "strIngredient2": "Baileys irish cream",
    "strIngredient3": "Cognac",
    "strIngredient4": null,
    "strIngredient5": null,
    "strIngredient6": null,
    "strIngredient7": null,
    "strIngredient8": null,
    "strIngredient9": null,
    "strIngredient10": null,
    "strIngredient11": null,
    "strIngredient12": null,
    "strIngredient13": null,
    "strIngredient14": null,
    "strIngredient15": null,
    "strMeasure1": "1/3 ",
    "strMeasure2": "1/3 ",
    "strMeasure3": "1/3 ",
    "strMeasure4": null,
    "strMeasure5": null,
    "strMeasure6": null,
    "strMeasure7": null,
    "strMeasure8": null,
    "strMeasure9": null,
    "strMeasure10": null,
    "strMeasure11": null,
    "strMeasure12": null,
    "strMeasure13": null,
    "strMeasure14": null,
    "strMeasure15": null,
    "strImageSource": null,
    "strImageAttribution": null,
    "strCreativeCommonsConfirmed": "No",
    "dateModified": "2016-08-31 19:32:08"
};
exports.inProgressDeafult = {
    dataValues: {
        id: 2,
        userId: '3',
        drinkId: '3',
        markedIngredients: (0, startRecipeInProgress_1.startDrinkRecipeInProgress)()
    }
};
exports.formattedInProgressDefault = {
    id: 2,
    userId: '3',
    drinkId: '3',
    markedIngredients: (0, startRecipeInProgress_1.startDrinkRecipeInProgress)()
};
exports.favoriteDrinks = [
    {
        "userId": 4,
        "favoriteRecipes": {
            "idDrink": 2,
            "strDrink": "ABC",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
            "strAlcoholic": "Alcoholic"
        }
    },
    {
        "userId": 4,
        "favoriteRecipes": {
            "idDrink": 4,
            "strDrink": "ACID",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
            "strAlcoholic": "Alcoholic"
        }
    }
];
exports.createFavorite = {
    dataValues: { userId: 4, mealId: 2 }
};
exports.doneDrinks = [
    {
        "userId": 4,
        "finishedRecipes": {
            "idDrink": 1,
            "strDrink": "A1",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
            "strAlcoholic": "Alcoholic"
        }
    }
];
//# sourceMappingURL=drinks.mock.js.map