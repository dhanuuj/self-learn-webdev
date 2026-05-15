// let theArray = ["one", 2, "three", 4, "five", 6];

// theArray[2] = "notThree";
// theArray.unshift(0);
// theArray.push("seven");
// theArray.reverse();

// console.log(theArray);

///////////////////////////////////////////////////////////////////////OBJECTS////////////////////////////

// let theObject = {
//     name: "abc",
//     age: 123,
//     fav: ["x", "y", "z"],
//     loc: {
//         street: "strt",
//         town: "twn",
//         no: 456,
//     },
// };

// theObject.name = "aabbcc"

// console.log(theObject)

/////////////////////////////////////////////////////

// let arrayOfObjects = [
//     {
//         name: "abc1",
//         age: 123,
//         fav: ["x", "y", "z"],
//         loc: {
//             street: "strt",
//             town: "twn",
//             no: 456,
//         },
//     },
//     {
//         name: "abc2",
//         age: 123,
//         fav: ["x", "y", "z"],
//         loc: {
//             street: "strt",
//             town: "twn",
//             no: 456,
//         },
//     },
//     {
//         name: "abc3",
//         age: 123,
//         fav: ["x", "y", "z"],
//         loc: {
//             street: "strt",
//             town: "twn",
//             no: 456,
//         },
//     },
// ]

// console.log(arrayOfObjects)

/////////////////////////////////////////////////////////////////////////LOOPS////////////////////////////

// j = 11;
// while(j <= 20){
//     console.log(j);
//     j++;
// }

///////////////////////////////////////////////////

// for (i = 0; i <= 10; i++) {
//     console.log(i)
// }

// let arrayOfLetters = ["a", "b", "c", "d", "e"];
// for (let letters of arrayOfLetters){
//     console.log(letters)
// }

///////////////////////////////////////////////////

//  let num = 5;
//  if (num >= 10){
//     console.log("if")
//  } else if (num > 5){
//     console.log("else if")
//  } else {
//     console.log("else")
//  }
//  if (num === 5){
//     console.log("===")
//  }

// && , || ...

// let num1 = 5
// let num2 = 3
// let result = num1+num2 >= 10 ? "greater" : "lower";
// console.log(result)

///////////////////////////////////////////////////

// let word = "baa"

// switch (word){
//     case "aaa": console.log("w.aaa");
//     break;

//     case "aab": console.log("w.aab");
//     break;

//     case "aac": console.log("w.aac");
//     break;

//     default: console.log("w.default");
// }

//////////////////////////////////////////////////////////////////////FUNCTIONS///////////////////////////

// function addTwoNums(num1, num2){
//     result = num1 + num2
//     return result
// }
// addTwoNums(5, 4)
// console.log(result)

// let arrowFunc = (num3, num4) => {
//     result1 = num3 * num4
//     return result1
// }
// arrowFunc(5, 4)
// console.log(result1)

///////////////////////////////////////////////////////////////////ARRAY METHODS//////////////////////////

// let letters = ["a", "b", "c", "d", "e"]

// letters.forEach(function forEachFunc(letter){
//     console.log(letter)
// })
// letters.forEach((letter) => {
//     console.log(letter)
// })

// let letter1 = letters.map((letter) => {
//     return `${letter} 1`
// })
// console.log(letter1)

// let letterFilter = letters.filter((letter) => {
//     return letter !== "a" ? false : true;
// })
// console.log(letterFilter)

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2, 7, 8, 9];
// console.log(arr3);
