// Create an object literal
const student = {
    name: "Gesang",
    age: 25,
    course: "Computer Science",
    hello() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  };
  
  module.exports = student;  
  