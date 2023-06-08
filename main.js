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
const tao={
    firstName: 'Pedro',
    lastName: 'Penduko',
    age: 35,
    favorite: ['apple','blue','english','PinoyFreeCoder'],
    familyMembers:{
        father: 'Pedro Sr',
        mother: 'Nenang Penduko',
        sister: 'Nena Penduko'
    }
}
console.log("Name: "+tao.firstName,tao.lastName);
console.log(tao.familyMembers.sister);

const Contact=[
    {
        id:1,
        fullName: "Pedro Penduko",
        isSaved:"Phone"
    },
    {
        id:2,
        fullName: "Pedro Penduko Sr",
        isSaved:"Phone"
    },
    {
        id:3,
        fullName: "Nenang Penduko",
        isSaved:"SD"
    }
]
console.log(Contact)

//loops
const Contact2=[
    {
        id:1,
        fullName: "Pedro Penduko",
        isSaved:"Phone"
    },
    {
        id:2,
        fullName: "Pedro Penduko Sr",
        isSaved:"Phone"
    },
    {
        id:3,
        fullName: "Nenang Penduko",
        isSaved:"SD"
    }
]
//for
for(let i=0;i<=10; i++){
    console.log(i);
}
//while
let i=0;
while(i<10){
    console.log(`while loop any value ay ${i}`);
    i++;
}
for (let index = 0; index < Contact2.length; index++) {
    // const element = array[index];
    console.log(Contact2[index].fullName);  
}
for(let contact2 of Contact2){
    console.log(contact2);
}