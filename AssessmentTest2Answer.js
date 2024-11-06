// 4th November - 2024 : ES6, eventloop and some spa definitions
// All questions are mandatory - 14 out of 15 needs to be done, 1st question is equal to two question so can't be left

// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

//a.Get heroes who are not evils
const nonEvilHeroes=heroes.filter(hero=>!hero.isEvil);
console.log("Heroes who are not evils",nonEvilHeroes);

// b. Print Unique family names
const uniqueFamilies=[...new Set(heroes.map(hero=>hero.family))];
console.log("Unique Family",uniqueFamilies);

// c. Print Hero Names from given objects, and append sir in each of them before printing
const heroNameWithSir=heroes.map(hero=>`Sir ${hero.name}`);
console.log("Hero name with Sir",heroNameWithSir);

// d. Do we have any hero in Marvel Family who is not evil
const nonEvilMarvelHero=heroes.some(hero => hero.family === 'Marvel' && !hero.isEvil);
console.log("Is there Non-Evil Marvel Hero ?",nonEvilMarvelHero);

//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
//   using apply keyword we need to implement this one
function multiplyToN(n){
  const numbers=[...Array(n).keys()].map(num=>num+1);
  const mutiply=(...nums)=>nums.reduce((acc,num)=>acc*num,1);
  return mutiply.apply(null,numbers);

}
console.log(multiplyToN(9));


//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
const {userDetails: {last}}=person;
console.log("Last Name :",last);
const  updatePerson={
  ...person,
  contact:"9119119110"
};
console.log("Updated Person: ",updatePerson);

//4. Give me an example of const data manipulation
const person1 = {
  name: "Gesang",
  age: 25,
  hobbies: ["Soccer", "Gaming"]
};
person1.age=26;
person1.hobbies.push("Movie");
console.log(person1);

//5. What is the difference between for-of and for-in show with examples
//For-of loop iterates over the values of an iterable object(arrary, strings,maps...), not suitable for objects since they are not iterable defaultly,
//For-in loop iterates over the keys of object or indices of array, useful for itearating over the properties of an object.
//Object exapmle:
const person2={name: "Gesang",age:25, city:"New York"}
for (const key in person2){
  console.log(key," ",person2[key]);
}
//Arrary Example:
const numbers=[10,20,30];
for(const index in numbers){
  console.log(index, " ",numbers[index]);
}


//6. Give me an example of bind and write its usage, comparison with arrow function
const person3={
  name:"Gesang",
  greet:function(){
    console.log(`Hello, This is ${this.name}`);
  }
};

const greetBoud=person3.greet.bind(person3);
greetBoud();

const greetCallBack=person3.greet;
greetCallBack();//without bind() this is undefined.
setTimeout(person3.greet.bind(person3),1000);

const person4={
  name:"Zeren",
  greet:function(){
    console.log(`Hello, This is ${this.name}`);
  },
  greetWithArrow:()=>{
    console.log(`Hello, This is ${this.name}`);
  }
};
person4.greet();         
person4.greetWithArrow(); //Arrow function injerit this from where they defined.
//7. Create an example showing usage of event loop in concurrent execution cycle
console.log("Begin of the script");//Synchronous code 

setTimeout(()=>{
  console.log("Timeout callback 1(0 ms delay)");
},0);// Asynchronous code 
Promise.resolve().then(()=>{
  console.log("Promiss resolved 1");// Asynchronous code  with microtask
});
console.log("Middle of the script");//Synchronous code 
setTimeout(()=>{
  console.log("Timeout callback 2(100 ms delay)");
},100);// Asynchronous code with 100ms delay
Promise.resolve().then(()=>{
  console.log("Promiss resolved 2");// Asynchronous code with microtask
});
console.log("End of the script");//Synchronous code 

//8. create an example showing usage of short hand and default param.
//Shorthand object 
function createUser(name,age,city="unknown"){
  return{
    name,
    age,
    city
  };
}
//Parameter in function
function greetUser(user = {name :"Someone",city:"unknow"}){
  const {name,city }=user;
  console.log(`Hello,${name} from ${city}`);
}
const user1=createUser("Gesang",25,"New York");
const user2=createUser("Zeren",26);

console.log(user1);
console.log(user2);

greetUser(user1);
greetUser();


//9. Create two objects with some properties and merge them using Object method and ES6 way

const object1={
  name:"Gesang",
  age:25
};
const object2={
  city:"New York",
  State:"New York"
};
const mergedObjectAssign=Object.assign({},object1,object2);
console.log("Object Assign Mehod",mergedObjectAssign);

const mergedSpeard={...object1,...object2};
console.log("ES6 way",mergedSpeard);

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
//Map Collection:
const userMap=new Map();

userMap.set("user1",{name:"Gesang",age:25});
userMap.set("user2",{name:"Zeren",age:26});
userMap.set("user3",{name:"Nash",age:2});

console.log("Get user1",userMap.get("user1"));
console.log("Has user2",userMap.has("user2"));
userMap.delete("user3");
console.log("After delete, has user3",userMap.has("user3"));
userMap.clear();
console.log("Clear map size : ",userMap.size);

//Set Collection:
const userSet =new Set();

userSet.add("Gesang");
userSet.add("Zeren");
userSet.add("Nash");
userSet.add("Gesang");


console.log("Has Gesang ?",userSet.has("Gesang"));
userSet.delete("Nash");
console.log("After delete, has nash ?",userSet.has("Nash"));
userSet.clear();
console.log("Clear map size : ",userSet.size);

//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
const es6Promise=new Promise((resolve,reject)=>{
  const features=[
    "Arrow Functions",
    "Template Literals",
    "Destructuring Assignment",
    "Default Parameters",
    "Spread Operator"
  ];

  setTimeout(()=>{
    resolve(features);
  },2000);

  setTimeout(()=>{
    reject(new Error("Reject after 3 seconds"));
  },3000);

});
es6Promise
  .then (features=>{
    console.log("Promiss with ES6 features",features);
  })
  .catch(error=>{
    console.error("Promise Error",error.message);
  });



//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)

function multiplyUpToN(...numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}

function mutiplyRange(n) {
  const range = [...Array(n).keys()].map(num => num + 1);
  return multiplyUpToN(...range);
}

console.log(mutiplyRange(9)); 


//13. Use the question #11 to build promises using async and await - with multithread

async function getES6Features() {
  const es6Promise = new Promise((resolve, reject) => {
    const features = [
      "Arrow Functions",
      "Template Literals",
      "Destructuring Assignment",
      "Default Parameters",
      "Spread Operator"
    ];

    setTimeout(() => {
      resolve(features);
    }, 2000);

    setTimeout(() => {
      reject(new Error("Reject after 3 seconds"));
    }, 3000);
  });

  try {
    const features = await es6Promise;
    console.log("Promise resolved with ES6 features:", features);
  } catch (error) {
    console.error("Promise Error:", error.message);
  }
}

getES6Features();

//14. Create an example of generator function of your choice
//Fibonacci number generator
function* fibonacciGenerator() {
  let [a, b] = [0, 1];
  while (true) {
      yield a;           // Yield the current Fibonacci number
      [a, b] = [b, a + b]; // Move to the next number in the sequence
  }
}

const fibonacci = fibonacciGenerator();
console.log(fibonacci.next().value); // Output: 0
console.log(fibonacci.next().value); // Output: 1
console.log(fibonacci.next().value); // Output: 1
console.log(fibonacci.next().value); // Output: 2
console.log(fibonacci.next().value); // Output: 3
console.log(fibonacci.next().value); // Output: 5
console.log(fibonacci.next().value); // Output: 8
console.log(fibonacci.next().value); // Output: 13


//15. Explain your knowledge of - statelessness, http, REST, spa and classical applications
//Statelessness: It is a design principle that every request from cilent to the server is independent and contains all the infor needed to understand and prcess the requestion, 
//server doesnt retain any memory of previous interactions.

//http: hypertext transfer protol, it is using for data exchange on the web, cilent make reqeust and server responds.
//REST: Representational State Transfer, it is a archteture for design network application, like API, use HTTP as stateless comunication protocol and provide standard way to CRUD .
//SPA: Single Page Application, it is a web application to load single HTML page and dynamically uodates content with user interactions of the app, SPA doesnt not need to reload the page, it only fetch data as needed.
//Callsical application: muti-page application, un like the SPA, it requires loading HTML page every time when user navigate different part of the application.
