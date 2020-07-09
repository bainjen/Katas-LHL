
// We need to complete a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

// We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

// Our chooseRecipe() function should return the name of the correct recipe.

// There will always be a single correct answer, and you will NOT need to consider special cases. For example, you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.



let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (let i = 0; i < recipes.length; i++) {
    const recipeName = recipes[i].name;
    const recIngredients = recipes[i].ingredients;
    const [ingredient1, ingredient2] = recIngredients;
    const condition1 = (bakeryA.includes(ingredient1) && bakeryB.includes(ingredient2));
    const condition2 = (bakeryB.includes(ingredient1) && bakeryA.includes(ingredient2));

    if ( condition1 || condition2) {
      return recipeName;
    } else {
      return "fuck off"
    }

    // if (bakeryA.includes(ingredient1)) {
    //   if (bakeryB.includes(ingredient2)) {
    //     return recipeName;
    //   }
    // } else if (bakeryA.includes(ingredient2)) {
    //   if (bakeryB.includes(ingredient1)) {
    //     return recipeName;
    //   }
    // }

  }
}


console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));







// .includes()
// let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
// let bakeryB = ['milk', 'butter', 'cream cheese'];
// let recipes = [
//     {
//         name: 'Coconut Sponge Cake',
//         ingredients: ['coconut', 'cake base']
//     },
//     {
//         name: 'Persian Cheesecake',
//         ingredients: ['saffron', 'cream cheese']
//     },
//     {
//         name: 'Custard Surprise',
//         ingredients: ['custard', 'ground beef']
//     }
// ];

// const chooseRecipe = function (bakeryA, bakeryB, recipes) {
//   newArray = []
//   for (let i = 0; i < recipes.length; i++) {
//     let indRec = recipes[i];
//     let indRecIngre = recipes[i].ingredients;
//     // console.log(indRecIngre);
//     for (let a = 0; a < bakeryA.length || a < bakeryB.length; a++) {
//         // console.log(bakeryB[a], bakeryA[a]);
//       if (indRecIngre === bakeryB[a] || indRecIngre === bakeryA[a])
//         let firstIngre = indRecIngre
//         newArray.push(firstIngre);
        
//        if (indRecIngre === bakeryB[a] || indRecIngre === bakeryA[a]); 
//       let secondIngr = indRecIngre[i];
//       console.log(firstIngr, secondIngr); 
//     }

//   }
// }

// // var str = "Hello world, welcome to the universe.";
// // var n = str.includes("world", 12);

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// bakeryA = ['potatoes', 'bay leaf', 'raisins'];
// bakeryB = ['red bean', 'dijon mustard', 'apples'];
// recipes = [
//     {
//         name: 'Potato Ganache',
//         ingredients: ['potatoes', 'chocolate']
//     },
//     {
//         name: 'Sweet Fish',
//         ingredients: ['anchovies', 'honey']
//     },
//     {
//         name: "Nima's Famous Dijon Raisins",
//         ingredients: ['dijon mustard', 'raisins']
//     }
// ];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));





//musings...
// let recipeName = '';
//   let container = [];
//   for (i = 0; i < recipes.length; i++) {
//     let recipeIngr = recipes[i].ingredients
//     // console.log(recipeIngr)

//     //   for (let x = 0; x < recipeIngr.length; x++) {
//     //     // recipIngr = recipeIngr[x]
//     //     // console.log(recipeIngr[x]);
//     //   }
//     for (j = 0; j < bakeryA.length; j++) {
//       // console.log(bakeryB[j], bakeryA[j]);
//       let ingrA = bakeryA[j];
//      // console.log(ingrA, ingrB)
//       if (ingrA === recipeIngr[i]) {
//         container.push(ingrA); 
//         for (k = 0; k < bakeryB.length; k++) {
//           let ingrB = bakeryB[k];
//           if (ingrB === recipeIngr[i]) {
//             container.push(ingrB); 
//             console.log('match')
//           }
//         }

//         // console.log('match')
//       }
   
//       //   // }
//     }
//   }


//.includes
// const chooseRecipe = function(bakeryA, bakeryB, recipes) {
//   for (let i = 0; i < recipes.length; i++) {
//   let recipe = recipes[i].ingredients;
//     function ingredientCheck(bakery, recipe) {
//       for (let k = 0; k < bakery.length; k++) {
//         if (recipe.includes(bakery[k])) {
//           return true;
//         }
//       }
//     }
//     if (ingredientCheck(bakeryA, recipe) && ingredientCheck(bakeryB, recipe)) {
//       return recipes[i].name;
//     }
//   }
// }