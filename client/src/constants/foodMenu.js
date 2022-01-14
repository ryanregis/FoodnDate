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
            {id: 1, name: "Cucumber Salad with Mint Leaves", img: cucumberSalad, price: 170},
            {id: 2, name: "Lyonnaise Salad", img: lyonnaise, price: 350}, 
            {id: 3, name: "Onion Galette", img: onionGalette, price: 200},
            {id: 4, name: "Cheese Souffle", img: souffle, price: 170}, 
            {id: 5, name: "Coquilles Saint-Jacques (Great Scallops)", img: coquilles, price: 220},
            {id: 6, name: "Olive Tapenade", img: oliveTapenade, price: 350}
        ]
    },
    {
        course: `Main Course / Plat Principal`,
        titles: [
            {id: 7, name: "Boeuf Bourguignon (Beef Stew)", img: beefStew, price: 700}, 
            {id: 8, name: "Coq Au Vin (Red Wine Chicken Stew)", img: coqAuVin, price: 550},
            {id: 9, name: "Chicken Cordon Bleu", img: cordonBleu, price: 350}, 
            {id: 10, name: `Duck à l'Orange`, img: ducklOrange, price: 500}, 
            {id: 11, name: "Roasted Chicken with Herb Jus", img: roastChicken, price: 600},
            {id: 12, name: "Bouillabaisse", img: bouillabaisse, price: 400}
        ]
    },
    {
        course: `Dessert / Le Dessert`,
        titles: [
            {id: 13, name: "French Coconut Pie", img: coconutPie, price: 150}, 
            {id: 14, name: "Passion Fruit and Lemon Meringue Tartlets", img: meringue, price: 150},
            {id: 15, name: "Pear Tart", img: pearTart, price: 160}, 
            {id: 16, name: "Strawberry Fraisier Chiffon Cake", img: strawberryCake, price: 180}, 
            {id: 17, name: "Profiteroles", img: profiteroles, price: 120},
            {id: 18, name: "Mousse Au Chocolat", img: mousse, price: 170}, 
            {id: 19, name: "Cannelés de Bordeaux", img: canneles, price: 150}
        ]
    },
    {
        course: `Side Dishes / Plat d'Accompagnement`,
        titles: [
            {id: 20, name: "Quiche Lorraine", img: quicheLorraine, price: 150}, 
            {id: 21, name: "Croque Monsieur", img: croqueMonsieur, price: 120}, 
            {id: 22, name: "Croque Madame", img: croqueMadame, price: 120},
            {id: 23, name: "Jambon - Beurre", img: jambonBeurre, price: 250},
            {id: 24, name: "Croissant", img: croissant1, price: 100},
        ]
    },
    {
        course: `Drinks / Boissons`,
        titles: [
            {id: 25, name: "Red Wine (Mouton Cadet Bordeaux Rouge)", img: redWine1, price: 1500}, 
            {id: 26, name: "White Wine (Champagne)", img: whiteWine, price: 1800},
            {id: 27, name: "Mimosa", img: mimosa, price: 2500}
        ]
    }
];

export default foodMenu;