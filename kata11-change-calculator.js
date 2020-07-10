// In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

// Change Calculator
// We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

// Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

// Valid denominations are as follows:

// Twenty dollars
// Ten dollars
// Five dollars
// Two dollars
// One dollar
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)


const calculateChange = function(total, cash) {
  let changeNeeded = cash - total; 
  let totalChange = {};

  const denominations = [
   {
      name: 'twentyDollar', 
      value: 2000,
    },
   {
      name: 'tenDollar',
      value: 1000,
    },
   {
      name: 'fiveDollar',
      value: 500,
    },
   {
      name: 'twoDollar',
      value: 200,
    },
   {
      name: 'oneDollar',
      value: 100,
    },
   {
      name: 'quarter',
      value: 25,
    },
   {
      name: 'dime',
      value: 10,
    },
   {
      name: 'nickel',
      value: 5,
    },
   {
      name: 'penny',
      value: 1,
    }
  ];
  
  for (let i = 0; i < denominations.length; i++) {

    const denObj = denominations[i];
    const moneyType = denominations[i].name;
    const moneyValue = denominations[i].value;
    let counter = 0;
    let y = 0;
    while (moneyValue <= changeNeeded) {
      y++;
      counter++;
      totalChange[moneyType] = counter;
      changeNeeded -= moneyValue;
    }
  }

  return totalChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(590, 7000));
console.log(calculateChange(1787, 2490));
console.log(calculateChange(2623, 1000));
console.log(calculateChange(6, 100));
console.log(calculateChange(0, 70))

// Expected Output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

// if the change we need is greater than a demonination value, then add one of those values to our change container and subtract the amount of that value from the change needed tally 

//   if (changeNeeded >= denominations.key.value) {
//     totalChange += that key & value; 
//     changeNeeded -= that value; 
// }
  
    //TRY WHILE LOOP
  
    // if (changeNeeded >= moneyValue && changeNeeded > 0){
    //   // changeCounter++
    //   totalChange.push(moneyType);
    //   changeNeeded -= moneyValue; 
    //   console.log(totalChange); 
    //   console.log(changeNeeded)
     
    // } 
  
//this works...Welcome to Node.js v12.16.3.
// Type ".help" for more information.
// > let obj = {val: 0, tal: 1, mal :2}
// undefined
// > console.log(obj)
// { val: 0, tal: 1, mal: 2 }
// undefined
// > val++
// Uncaught ReferenceError: val is not defined
// > obj.val++
// 0
// > obj.tal++
// 1
// > obj.tal++
// 2
// > obj.tal++
// 3
// > console.log(obj)
// { val: 1, tal: 4, mal: 2 }
// undefined
// > 


// let denominations = {

//   twentyDollar: {
//     value: 2000,
//     counter: 0
//   },
//   tenDollar: {
//     value: 1000,
//     counter: 0,
//   },
//   fiveDollar: {
//     value: 500,
//     counter: 0,
//   },
//   twoDollar: {
//     value: 200,
//     counter: 0,
//   },
//   oneDollar: {
//     value: 100,
//     counter: 0,
//   },
//   quarter: {
//     value: 25,
//     counter: 0,
//   },
//   dime: {
//     value: 10,
//     counter: 0,
//   },
//   nickel: {
//     value: 5,
//     counter: 0,
//   },
//   penny: {
//     value: 1,
//     counter: 0
//   }
// };

// let denominations = {

//   twentyDollar:  {
//     name: 'twentyDollar', 
//     value: 2000,
//     counter: 0
//   },
//   tenDollar: {
//     name: 'tenDollar',
//     value: 1000,
//     counter: 0,
//   },
//   fiveDollar:   {
//     name: 'fiveDollar',
//     value: 500,
//     counter: 0,
//   },
//   twoDollar:   {
//     name: 'twoDollar',
//     value: 200,
//     counter: 0,
//   },
//   oneDollar:  {
//     name: 'oneDollar',
//     value: 100,
//     counter: 0,
//   },
//   quarter:  {
//     name: 'quarter',
//     value: 25,
//     counter: 0,
//   },
//   dime:  {
//     name: 'dime',
//     value: 10,
//     counter: 0,
//   },
//   nickel:  {
//     name: 'nickel',
//     value: 5,
//     counter: 0,
//   },
//   penny:  {
//     name: 'penny',
//     value: 1,
//     counter: 0
//   }

// };


// Welcome to Node.js v12.16.3.
// Type ".help" for more information.
// > let denomObject = {};
// undefined
// > console.log(denomObject)
// {}
// undefined
// > const billName = '20dollarbill'
// undefined
// > const count = 2;
// undefined
// > denomObject[billName] = count
// 2
// > denomObject
// { '20dollarbill': 2 }
// > denomObject.20dollarbill
// denomObject.20dollarbill
//            ^^^

// Uncaught SyntaxError: Invalid or unexpected token
// > denomObject.something = 5
// 5
// > denomObject
// { '20dollarbill': 2, something: 5 }
// > const anotherKey = 'somethinghere'
// undefined
// > denomObject[anotherKey] = 10;
// 10
// > denomObject
// { '20dollarbill': 2, something: 5, somethinghere: 10 }
// > 


  //   if (changeNeeded >= denominations.key.value) {
//     totalChange += that key & value; 
//     changeNeeded -= that value; 
// }


  // let denArray = Object.entries(denominations);
  // console.log(denArray)

  // console.log(denominations.penny)
  // denominations.penny.pennyCount++;
  // denominations.penny.pennyCount++;
  // console.log(denominations.penny)