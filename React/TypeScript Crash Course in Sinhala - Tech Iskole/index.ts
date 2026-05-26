let myName: string = "dhanuja";
let myAge: number = 3;
let isBoolean: boolean = true;
let something: undefined = undefined;

// //////////////////////////////////////////////////////////////

let myNumbers: number[] = [1, 2, 3, 4];
let myLetters: string[] = ["a", "b", "c", "d"];
let mixArray: (string | number)[] = ["a", "b", 1, 2]; 

let arrOfArr: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];

let tuple: [number, number] = [1, 2];

// /////////////////////////////////////////////////////////////

type personTypes = {
    name: string,
    age: number,
    address?: string
};

// let personObject1: {name: string; age: number} = {
//     name: "abc",
//     age: 10
// }

let personObject1: personTypes = {
    name: "abc",
    age: 10,
    address: "xyz"
}

// let personObject2: {name: string; age: number} = {
//     name: "def",
//     age: 20
// }

let personObject2: personTypes = {
    name: "def",
    age: 20
};

// /////////////////////////////////////////////////////////////

function getSum (a: number, b:number): number {
    return a + b;
}

let getRemain = (a: number, b:number): number => {
    return a - b;
};

//////////////////////////////////////////////////////////////

let anyType: any = "anything";
let noType: unknown = "nothing";

// /////////////////////////////////////////////////////////

type strOrNumOrBool = string | number | boolean;

let customType: strOrNumOrBool = 123;

// ///////////////////////////////////////////////////////////

type literalType = "North" | "South" | "East" | "West";

let direction1: literalType = "North";
let direction2: literalType = "South";
let direction3: literalType = "East";
let direction4: literalType = "West";
// let direction5: literalType = "abc"; throws an error :(

// ///////////////////////////////////////////////////////////

