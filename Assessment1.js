//October - MERNStack Session - Assessment Number 1 - 2nd October 2024

//Q1. Create a file with name basics and show all the features that you know about javascript? (minimum 5 and maximum 8 topics)
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

let variable;

const values = [
    "Robert ",     
    0.0266,        
    false,         
    { myname: "Test Me" }, 
    25166665,      
    undefined,     
    true,          
    "Robert Jr.",  
    null,          
    {},            
    -32767         
  ];

  values.forEach(value =>{
    variable = value;
    console.log(`Value: ${variable}, Type:${typeof variable}`);
  });

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
 print all the details in the given function
function showUserInfo(firstname,lastname,age){
    console.log("First Name: "+firstname);
    console.log("Last Name: "+lastname);
    console.log("Age "+age);
}
showUserInfo("Robert","Jr",21);


//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!

function doaddition(a,b,c){
    a = a || 0; // use OR to defaulting undefiend value to 0
    b = b || 0;
    c = c || 0;
    return a+b+c;
}
console.log(doaddition(2,3,4));// 2+3+4=9
console.log(doaddition(2)); // 2+undefined + undefined =2+0+0 =2, if without fefaulting, the result would be NaN
console.log(doaddition(2.3,3)); // 2.3 +3+undefined =2.3+3+0=5.3 if without fefaulting, the result would be NaN
console.log(doaddition("first", 2, "three")); // string +2 + string it is just string concatenation

//Q5. Give me an example of your choice for each of the below concepts
a. closure, 
function outerFunction(){
    var outerVariable = "This is Outer variables";

    function innerFunction(){
        console.log(outerVariable); //this can access the outerVariable
    }
    return innerFunction;
}

const closureExample=outerFunction();
closureExample();

// b. hoisting, 
console.log(hoistedVar);  // undefineed, sine hoistedVar get hosted 

var hoistedVar = "This is  hoisted";
console.log(hoistedVar);  

// c. constructor function

function Person(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;

    this.sayHi=function(){
        console.log("Hi, this is "+this.firstName+this.lastName);
    };
}

const person1=new Person("Robert","Jr",21);

person1.sayHi();

//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?

//The Purpose of call methos is to invoke a function with sepcfied this.vlaue and arguments passed individually, apply method is similar to call, but pass an array, 
// and the purpose of bind is to create a new function, call is used when you want to execute a function immediately with sepcific this context and provide the argument one by one , 
//apply is used when you want to invoke a function imediately with specifc this context but argumens are in an array or been passed as an array,
//bind is used when you want to create a copy of a function with fixed this value, oftehn when you need to spcficic this context for a function which will be called later.
//This will help you with context control, function reuse, and flexible invocation, 
//main difference between bind and apply are : apply invokes function immediatly, and bind returns a new function, it doesnt invoke function immediately, and apply access arugments as an array, 
//bind dont directly invoke the function, you can paas argument normally when you call the function.

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.

const student = {
    name: 'Gesang',
    age: 25,
    getDetails: function() {
      // Use setTimeout to simulate a delay in fetching data
      setTimeout(function() {
        console.log(`Student Name: ${this.name}, Age: ${this.age}`);
      }.bind(this), 1000); // We use bind(this) here to fix the context of 'this'
    }
  };
  
  // Calling the method
  student.getDetails();
  

//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?

const objWithoutProto = Object.create(null);

objWithoutProto.name = "Gesang";
objWithoutProto.age = 25;

console.log(objWithoutProto);             

//Purpose of creating an object with null prototype is when you want a pure key-value map which doesn't inherit any properties or methods from prototypes, when you need a clean simple key-value structure
//without any inheritance, example like maps or dictionaries.

//Q9. How do we merge different objects properties using Object class function

//You can use Object.assign
const obj1 = { name: "Gesang", age: 25 };
const obj2 = { city: "New York", age: 21 };  // age will be merged
const obj3 = { country: "USA" };

// Merging objects
const mergedObj = Object.assign({}, obj1, obj2, obj3);

console.log(mergedObj);


//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned