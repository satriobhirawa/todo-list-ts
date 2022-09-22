// let name: string;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[];
// let roles: [string, number];
// roles = ["student", 15];
// let number: number | string;
// number = "five";
// number = 5;

//function
// let addFunctions: Function;
// //function with params and return type
// let printName: (name: string) => void;

// we also have type with any (not recomended) and unknown if doesn't know the type
// in function if we don't know if the function will return type or not with -> never
// void returns undefined, never doesn't return anything
// more at typescriptlang.org/docs/handbook/2/everyday-types

// type Person = {
//   name: string,
//   age?: number, //when it's optional add ?
// }
// or 
// interface Person {
//   name: string,
//   age: number
// }

// //extending a type
// type X = {
//   a: string,
//   b: number
// }

// type Y = X & {
//   c: string,
//   d: number
// }

// //extending an interface
// interface InterA {
//   a: string,
//   b: number
// }

// interface InterB extends InterA {
//   c: string
// }


// let person: Person ={
//   name: "John",
//   age: 30,
// }
// let lotsOfPeople: Person[];
