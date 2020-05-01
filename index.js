
// Arrays: is used to store multiple values in one variable 

 myArray = ["Muaz",32,[2,104],[5,7,[10,19]]];
// access data
let street = myArray[2][1];
console.log(street);

let birthDay = myArray[3][2][0];
console.log(birthDay);

// modify data
myArray[3][2][1]= 14;
myArray;

// the length of an array, how many elements the array has.

console.log(myArray.length);

// to check if an element in the array we use the index of this element.
console.log( 3 in myArray);
console.log( 5 in myArray);

// to get a specific part of the array ( sub array), we use .slice(a,b) method that returns the elements between a and b ,including(a) , but not (b)  

console.log(myArray.slice(0,3));

// Add data to the end
myArray.push(2013);
myArray

// Add data to the front
myArray.unshift(2015);
myArray;

// delete data from the front
myArray.shift();
myArray;

// delete data from the end
myArray.pop();
myArray;


//reversing an array 

let rev= myArray.reverse();

console.log(rev);

console.log(myArray);

// find the index of an array element 

console.log(myArray.indexOf("Muaz"));

// joining the elements of the array

console.log(myArray.join("-"));
console.log(myArray.join("+"));
console.log(myArray.join("_"));
console.log(myArray.join());

// merging two arrays together 

var anotherArray = [ 22,33,44,55,66];

console.log(myArray.concat(anotherArray));


// using .map(function()) method: it is used to creates a new array that it's elements are the results of calling the function on every element in the array.

let newArray1 = anotherArray.map( element => element* 2);

console.log(newArray1);


// using reduce()

// It executes a reducer function on each element of the array, resulting in a single output value
// currentValue is the value of the array's element
// accumulator is the accumulated value previously returned in the last invocation of the function.

// using reduce() without initialValue.
// In the first call : the initial accumulator value here is the first element in the array (22) because we do not have initialValue. 
// In the second call : the accumulator value is (22+33)
// In the third call : the accumulator value is (22+33) + 44 ..... Etc
var anotherArray = [ 22,33,44,55,66];

let newArray2 = anotherArray.reduce((accumulator,currentValue) => { return accumulator+currentValue});
console.log(newArray2);


// using reduce() with initialValue.
// In the first call : the initial accumulator value here is the initialValue (5).
// In the second call : the accumulator value is (5+22)
// In the third call : the accumulator value is (5+22) + 33 ..... Etc
var anotherArray = [ 22,33,44,55,66];

let newArray3 = anotherArray.reduce((accumulator,currentValue) => { return accumulator+currentValue}, 5);
console.log(newArray3);


// using splice(a,b,c,d,e,......) : it is method that removes or replaces existing elements of an array and/or adding new elements in place.
// a is the index of element/elenemts that we want to remove or insert.
// b is the number of the elements that we want to remove.
// c,d,e,...... are the elements that we want to insert at the selected index.
var anotherArray = [11,22,33,44,55,66];

// at index 3 do not remove elements but insert 40
let removed1 = anotherArray.splice(3,0,40);
console.log(anotherArray);
console.log(removed1);
// at index 3 remove the element (40) and insert (41)
let removed2 = anotherArray.splice(3,1,41);
console.log(anotherArray);
console.log(removed2);
// at index 4 insert 42 and 43 
let removed3 = anotherArray.splice(4,0,42,43);
console.log(anotherArray);
console.log(removed3);
// with - operator we start from the end  
let removed4 = anotherArray.splice(-4,3);
console.log(anotherArray);
console.log(removed4);
// remove all elements from index 3 (including)
let removed5 = anotherArray.splice(3);
console.log(anotherArray);
console.log(removed5);
 


