// Value of x, y, a, b

var x = 10;
var y = "abc";
var a = x;
var b = y;

//sol

x = 10
y = "abc"
a = 10
b = "abc"

// Value of x, y, a, b
var x = 10;
var y = "abc";
var a = x;
var b = y;
a = 5;
b = "def";

//sol

x = 10
y = "abc"
a = 5
b = "def"


// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr;
arr.push(2);

//sol

arr = [1,2]
arrCopy = [1,2]

// Value of obj
var obj = { name: "ryan" };
obj = { surname: "florance" };

//sol
obj = { surname: "florance"};

// What's the output.
var arr = ["Hi"];
var arr2 = arr;
console.log(arr === arr2);

//sol
true

// What's the output.
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2);
console.log(arr1 == arr2);

//sol
false
false

//What's the output
console.log([10] === [10]);

//false


// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

//sol
{
  name: "Alex",
  age: 25
}

{
  name: "John",
  age: 50
}


// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray);

//true

// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a);
console.log(b);

//sol
10
5


// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a);
console.log(b);

//output
{ a : 1}
{ a : 1}

// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b); //true

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
};

var clone = {};

//sol
clone = {...person};

// Output of the following
let brothers = ["John", "Bran", "Robb"];
let house = "Stark";
let user = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user2 = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user3 = {
  name: "Arya",
  house: "Stark",
  brothers: ["John", "Bran", "Robb"]
};
// Output of the below code and why?
user.house === user2.house; // output: true, because both the properties are storing the value of same variable house.
user.house == user2.house; // output:true
user.brothers === user2.brothers; // output: true value of both the properties referencing to same object which is array brothers.
user.brothers == user2.brothers; // output:true
user.name == user2.name; // output:true
user.name === user2.name; // output:true
user.brothers == user3.brothers; // output:false because property brothers of user 3 object creates a new object array, its not referencing to brothers array created before
user.brothers === user3.brothers; // output:false
user.house === user2.house; // output true
user.house === user3.house; // output true
user.brothers[0] === user2.brothers[0]; // output true
user.brothers[0] === user3.brothers[0]; // output true, primitive datatypes uses copy by value here on the 0th index of both array is a string which storing the same string.
