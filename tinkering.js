/*var adult = true;
var preorder = true;
console.log(It costs $" + (adult ? "40.00 : 20.00) + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");
*/

// loop practice //
/*var x =10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
} */

/*var x = 1;
while (x <= 20) {
 if(x % 3 === 0 && x % 5 === 0) {
  console.log("JuliaJames");
 } else if(x % 5 === 0) {
  console.log("James");
 } else if(x % 3 === 0) {
  console.log("Julia");
 } 
 else {
  console.log(x);
 } 
   x = x + 1;
}
*/

/*var num = 99;

while ( num >= 1) {
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
}   else if (num === 2) {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take on down, pass it around... " + (num-1) + " bottle of juice on the wall!");
}   else {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around..." + (num-1) + " bottles of juice on the wall!");
}
    num = num - 1;
}
*/

/* complex while loop example
n = 60
 while (n >= 0) {
     if (n === 50) {
         console.log("Orbiter transfers from ground to internal power");
     }
     else if (n === 31) {
         console.log("Ground launch sequencer is go for auto sequence start");
     }    else if (n === 16) {
             console.log("Activate launch pad sound suppression system ");
     }      else if (n === 10) {
                 console.log("Activate main engine hydrogen burnoff system");
     }          else if (n === 6) {
                    console.log("Main engine start");
                 } else if(n === 0) {
                     console.log("Solid rocket booster ignition and liftoff!");
                 } else {
                     console.log("T-" +n+ " seconds");
     }
           n = n-1;
 }
 */

 /* FOR LOOP EXAMPLE */

 /*for (var i = 0; i < 6; i = i +1) {
  console.log("printing out i = " + i)
 } */

 /* NESTED FOR LOOPS EXAMPLE*/

 /*for (var x = 0; x < 5; x = x +1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
 } 
*/

/* rewriting a while loop as a for loop
while loop (shown below)

var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

now changed to a for loop:

for (var x = 9; x >= 1; x-- OR --x) {
  console.log("hello " + x);
} 
*/

/* LOOPING OVER ARRAYS

const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
for (let x = 0; x < amounts.length; x++) {
  total += amounts[x];
}
console.log('order total is: ', total); */

/* NEWER FOR..LOOPS ARE SIMPLER, UPDATED VERSION OF ^

const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('order total is: ', total);


In summary, the for..of loop is ...

A modern (newer) feature in JavaScript
Simpler than the regular for loop
But also less powerful than the regular for loop
Only really useful for going through an entire array from beginning to end
Not a solution to all our looping problems */

/*functions and how to run them:

function sayHello() {
  var message = "Hello!"
  return message; /* returns value instead of printing it */
/* function returns "Hello!" and console.log prints the return value */
 /* console.log(sayHello()); */

 /* function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
 }
 var avg = findAverage(5,9);
 console.log(avg); */

 // x and y are parameters in this function declaration
// function add(x, y) {
  // function body
  // Here, `sum` variable has a scope within the function. 
  // Such variables defined within a function are called Local variables
  // You can try giving it another name
  // var sum = x + y;
  // return sum; // return statement

// 1 and 2 are passed into the function as arguments, 
// and the result returned by the function is stored in a new variable `sum`
// Here, `sum` is another variable, different from the one used inside the function
//var sum = add(1, 2);

/* function add(x, y) {
  return x + y;
}
function divideByTwo(num) {
  return num / 2
}
var sum = add(5, 7);
var average = divideByTwo(sum); */

 /*sayHi("Julia");
function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
} */


/* creating an anonymous function expression that stores A function called "Laugh"
and outputs the number of "ha"s that you pass in as an argument.

var sound = "";  DECLARE A NEW VARIABLE
var laugh = function (num) {
     for (var x = 0 ; x < num ; x++) {  //Anonymous function takes 1 argument here//
        sound = sound + "ha" ; 
}
 sound = sound + "!";
 return sound;
}
 console.log(laugh(3));
 */

 /* write a named funtion expression that stores the function in a variable 
 called cry and returns "boohoo!". call the function using variable name, 
 not function name.
 
 var sound = "";
 var cry = function myFunction() {
   sound = "boohoo!";
   return sound ;
 }
 console.log(cry()); */

 const pumpkinScraps = function(x , y) {
  calculateRectangleArea = (x*y);
 }
  console.log(pumpkinScraps(10,5));