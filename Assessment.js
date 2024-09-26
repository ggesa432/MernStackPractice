//Questions 
//Create a person<few properties and a function to return them> and Inherit it as Student class and override the function
//Inherit shuld be done both way's constructor and Object.Create
//Create three objects and merge their properties
//Create a logical example of closure
//Share few data objects from one file to anothere file

//Constructor Inherit
class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    }
  }
  
  //Student class inherit from Person class with constructor
  class Student extends Person {
    constructor(name, age, gender, studentId) {
      super(name, age, gender); 
      this.studentId = studentId;
    }
  
    // Overriding getDetails 
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Student ID: ${this.studentId}`;
    }
  }
  
  const student1 = new Student('Some One', 21, 'Male', '12345');
  console.log(student1.getDetails());
  

  //Object.create
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  // getDetails method with Person prototype
  Person.prototype.getDetails = function () {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  };
  
  // Student class inheriting from Person with Object.create
  function Student(name, age, gender, studentId) {
    Person.call(this, name, age, gender); // Call the Person constructor
    this.studentId = studentId;
  }
  
  // Inherit the prototype of Person using Object.create
  Student.prototype = Object.create(Person.prototype);
  
  // Set the constructor of Student back to Student
  Student.prototype.constructor = Student;
  
  // Overriding the getDetails method in Student
  Student.prototype.getDetails = function () {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Student ID: ${this.studentId}`;
  };
  
  const student2 = new Student('Some One Else', 22, 'Female', '67890');
  console.log(student2.getDetails());
  

  //Three Object and Merging
  const obj1={
    name:'Someone',
    age: 21
  };

  const obj2={
    gender:'Male',
    designation:'Programmer'
  };

  const obj3={
    country:'USA',
    hobbie:['football','swiming']
  };
  const mergedObj1=Object.assign({},obj1,obj2,obj3);
  console.log('Merged object:',mergedObj1);


  //Closure
  function StudentAcc(StudentName,StudentAge,studentId,StudentEmail){

    var name = StudentName
    var age=StudentAge
    var Id=studentId
    var Email=StudentEmail
    var StudentPassword="abcde" // private
    var StudentPin="1234"  // private

    var StudetnDetails = function(name,password){
        if(password == StudentPassword){
            return{
                name,
                age,
                Id,
                Email
            }
        }else{
            return "Incorrect Password!!"
        }
    }
    
    return StudetnDetails;
}

var studentObj= StudentAcc("Gesang",21,"gesang1234","gesang@gmail.com")

console.log(studentObj("Gesang","abcde"))
console.log(studentObj("Gesang","abcd"))