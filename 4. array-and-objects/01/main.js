let myPenguin = {
    Name : "Tacky the Penguin";
    Origin : "Tacky the Penguin";
    Author : "Helen Lester";
    Notes : "A penguin who does things differently than other penguins."
}

//1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.

myPenguin.favouriteFoods = ["sugar","milk","coffee"];

//2. Access your penguin's second favorite food and print it to the console using console.log()

console.log(myPenguin.favouriteFoods[1]);

//3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.

let firstFavFood = myPenguin.favouriteFoods[0];

//4. Add another food to the end of the list.

myPenguin.favouriteFoods.push("water");

//5. Print the length of your penguin's favoriteFoods array to the console with console.log()

console.log(myPenguin.favouriteFoods.length);

//6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).

myPenguin.favouriteFoods[myPenguin.favouriteFoods.length -1] = "pineapples";

//7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list.

let lastFavFood = myPenguin.favourieFoods[myPenguin.favouriteFoods.length -1];

//8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)

for (let i=0; i < myPenguin.favouriteFoods.length; i++) {
    console.log(myPenguin.favouriteFoods[i]);
}