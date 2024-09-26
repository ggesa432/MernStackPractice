
var student1={
    name:'Gesang',
    age: 21,
    major:'computer science'
}
var student2={
    name:'Nash',
    age:19,
    major:'biology'
}
var student3={
    name:'Sylvie',
    age:18,
    major:'engineering'
}
var student4 = {
    name : "Niki",
    age : 19,
    major : "art",
    getStudentDetails : function () {
        return ` 
            ${this.name}
            ${this.age}
            ${this.major}
        `
    }
}

module.exports={
    student1,
    student2,
    student3,
    student4
}