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
  console.log(changeNeeded); 

  let totalChange = [
    twentyDollar = 0,
    tenDollar = 0,
    fiveDollar = 0,
    twoDollar = 0,
    oneDollar = 0,
    quarter = 0,
    dime = 0,
    nickel = 0, 
    penny = 0
  ]; 

  let denominations = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5, 
    penny: 1
  };

  let counter = 0; 
  counter++
  counter++
  console.log(counter)

  let denArray = Object.entries(denominations);


//   if (changeNeeded >= denominations.key.value) {
//     totalChange += that key & value; 
//     changeNeeded -= that value; 
// }
  
  for (let i = 0; i < denArray.length; i++) {
    const moneyType = denArray[i][0];
    const moneyValue = denArray[i][1];
    // console.log(moneyType, moneyValue)
    if (changeNeeded >= moneyValue) {
      totalChange.push(moneyType);
      changeNeeded -= moneyValue; 
      console.log(totalChange); 
      console.log(changeNeeded)
    }
  }

};

console.log(calculateChange(1787, 2000));
// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));

// Expected Output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

// if the change we need is greater than a demonination value, then add one of those values to our change container and subtract the amount of that value from the change needed tally 