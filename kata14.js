// URL Encoded Strings
// To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

// %20 represents a space character.
// Key-value pairs are represented using an = character: key=value
// Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
// So the following URL encoded string:

// city=Vancouver&weather=lots%20of%20rain
// Could be converted to the following JavaScript object:

// {
//   city: "Vancouver",
//   weather: "lots of rain"
// }

// Create a function named urlDecode that will receive a URL encoded string, and return the a JavaScript object that represents that data.

const urlDecode = function (text) {
  
  let container = {};
  const space = /%20/g;
  const andEquals = /[&=]/

  text = text.replace(space, " ").split(andEquals);
  
  for (let w = 0; w < text.length; w+=2)
  {

    container[text[w]] = text[w + 1];
    }
  
return container;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


// Expected Output
// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"

//general thoughts -- text before '=' is a key, text after '=' is a value, unless it's an '&' which makes it a new key % is " ". 
//does a while loop potentially make sense to distinguish keys from the = ?
//replace & with a comma replace = with a colon
  // editedString = editedString.replce('=', ':');
  // let editedString  console.log(editedString)
    // container['keyname'] = 'value';
  // container['newkey'] = 345;
  // console.log(container);
  // console.log(text.split(" "));


  // let and = /&/g;
  // let equal = /=/g;
  // let space = /%20/g;

  //   text = text.replace(and, ', ');
  //   text = text.replace(equal, ': ');
  //   text = text.replace(space, " ");


  // let container = {};

  // let and = /&/g;
  // let equal = /=/g;
  // let space = /%20/g;

  // text = text.replace(and, ', ');
  // text = text.replace(equal, ': ');
  // text = text.replace(space, " ");

  // let newArr = text.split(' ');
  // console.log(newArr)
  
  // for (i = 0; i < newArr.length; i++) {
    
  // }
