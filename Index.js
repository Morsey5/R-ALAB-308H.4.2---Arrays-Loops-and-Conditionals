//Easy Going
for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

//Get Even
  for (let i = 0; i <= 200; i += 2) {
    console.log(i);
  }

//Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

//Wild Wild Life

//Plantee just had her birthday; change Plantee's array to reflect her being a year older
plantee[2] += 1; 

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";

//Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");

//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy";



//Yell at the Ninja Turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const turtle of ninjaTurtles) {
  const uppercaseName = turtle.toUpperCase();
  console.log(uppercaseName);
}

//Methods, Revisited
const favMovies = ["Star Wars", "Indiana Jones", "Lord of the Rings", "The Matrix"];

favMovies.sort();
favMovies.pop();

//Push movie to the end
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();

// Use unshift to add an item to the beginning
const unshiftResult = favMovies.unshift("Inception");

// Find the index of "Django Unchained" and splice it, adding "Avatar" in its place
const djangoIndex = favMovies.indexOf("Django Unchained");
favMovies.splice(djangoIndex, 1, "Avatar");

// Slice half of the array
const middleIndex = Math.floor(favMovies.length / 2);
const secondHalf = favMovies.slice(middleIndex);

// Log the sliced array
console.log(secondHalf);

// Log the modified array
console.log(favMovies);

// Find the index of "Fast and Furious"
const fastAndFuriousIndex = favMovies.indexOf("Fast and Furious");
console.log("Index of 'Fast and Furious':", fastAndFuriousIndex);

// Attempt to find the index
const nonExistentIndex = favMovies.indexOf("Harry Potter");
console.log("Index of 'Harry Potter':", nonExistentIndex);


//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert
whereIsWaldo.splice(1, 1);

whereIsWaldo[2][2] = "No One";
const waldo = whereIsWaldo[3][1][1];
console.log(waldo);


//Excited kitten
for (let i = 1; i <= 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
  
    if (i % 2 === 0) {
      const randomMessageIndex = Math.floor(Math.random() * 3) + 1;
  
      switch (randomMessageIndex) {
        case 1:
          console.log("...human... why you taking pictures of me...?");
          break;
        case 2:
          console.log("...the catnip made me do it...");
          break;
        case 3:
          console.log("...why does the red dot always get away...?");
          break;
        default:
          console.log("Something went wrong!");
      }
    }
  }



