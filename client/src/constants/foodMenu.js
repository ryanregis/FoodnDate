import {
    souffle, cucumberSalad, coquilles, oliveTapenade, onionGalette, lyonnaise,
    beefStew, bouillabaisse, cordonBleu, coqAuVin, ducklOrange, roastChicken,
    croissant1, croqueMadame, croqueMonsieur, jambonBeurre, quicheLorraine,
    canneles, coconutPie, mousse, meringue, pearTart, profiteroles, strawberryCake,
    mimosa, redWine1, whiteWine,
} from "../assets/images/images";


const foodMenu = [
    {
        course: `Appetizers / L'Entrée`,
        titles: [
            {name: "Cucumber Salad with Mint Leaves", img: cucumberSalad},
            {name: "Lyonnaise Salad", img: lyonnaise}, 
            {name: "Onion Galette", img: onionGalette},
            {name: "Cheese Souffle", img: souffle}, 
            {name: "Coquilles Saint-Jacques (Great Scallops)", img: coquilles},
            {name: "Olive Tapenade", img: oliveTapenade}
        ]
    },
    {
        course: `Main Course / Plat Principal`,
        titles: [
            {name: "Boeuf Bourguignon (Beef Stew)", img: beefStew}, 
            {name: "Coq Au Vin (Red Wine Chicken Stew)", img: coqAuVin},
            {name: "Chicken Cordon Bleu", img: cordonBleu}, 
            {name: `Duck à l'Orange`, img: ducklOrange}, 
            {name: "Roasted Chicken with Herb Jus", img: roastChicken},
            {name: "Bouillabaisse", img: bouillabaisse}
        ]
    },
    {
        course: `Dessert / Le Dessert`,
        titles: [
            {name: "French Coconut Pie", img: coconutPie}, 
            {name: "Passion Fruit and Lemon Meringue Tartlets", img: meringue},
            {name: "Pear Tart", img: pearTart}, 
            {name: "Strawberry Fraisier Chiffon Cake", img: strawberryCake}, 
            {name: "Profiteroles", img: profiteroles},
            {name: "Mousse Au Chocolat", img: mousse}, 
            {name: "Cannelés de Bordeaux", img: canneles}
        ]
    },
    {
        course: `Side Dishes / Plat d'Accompagnement`,
        titles: [
            {name: "Quiche Lorraine", img: quicheLorraine}, 
            {name: "Croque Monsieur", img: croqueMonsieur}, 
            {name: "Croque Madame", img: croqueMadame},
            {name: "Jambon - Beurre", img: jambonBeurre},
            {name: "Croissant", img: croissant1},
        ]
    },
    {
        course: `Drinks / Boissons`,
        titles: [
            {name: "Red Wine (Mouton Cadet Bordeaux Rouge)", img: redWine1}, 
            {name: "White Wine (Champagne)", img: whiteWine},
            {name: "Mimosa", img: mimosa}
        ]
    }
];

export default foodMenu;