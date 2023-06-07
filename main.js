//variables -let or const
// const Name="Pedro";
// Name="Anna";
// console.log(Name)

//data types - string, numbers, boolean, null, undfined
const Name ="Pedro";
const Age = 19;
const Rating=49.3;
const isComplete= true;
const val= null;
const unk=undefined;
let library;//initialization

//concatenate
let statement = " My name is " +Name+ " and my age is "+Age;
let statement2 =`My name is ${Name} and my age is ${Age}`;
console.log(statement2);
console.log(Name.length);
console.log(Name.toLocaleLowerCase(Name));
console.log(Name.toLocaleUpperCase(Name));

//array
const fruits=["Manga","Banana","Grapes","Apple"];
fruits[4]="Santol";
fruits.push("Orange");//if doesnt know the number of array use push to add. will be added at the last
fruits.unshift("Avocado");//unshift to add in the very first list of the array
fruits.pop();//delete the last element of the array
console.log(fruits);
fruits.splice(1,1);//first parameter which will be remove, second parameter the how many will be remove
console.log(fruits[2]);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('Manga'));

//object literals

