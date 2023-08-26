// oops

// const st1  ={
//     name:"adam",
//     age:25,
//     marks:95,
//     getMarks: function(){
//         return this.marks;
//     }
// }

// const st2  ={
//     name:"eve",
//     age:25,
    // marks:99,
    // getMarks: function(){
//         return this.marks;
//     }
// }

// const st3  ={
//     name:"casey",
//     age:23,
//     marks:85,
//     getMarks: function(){
//         return this.marks;
//     }
// }



// factory function

// function PersonMaker(name,age){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi my name is ${this.name}`);
//         }
//     }

//     return person;
// }


// constructor 
// doesn't return anything  & start with capital


// function Person(name,age){
//         this.name=name;
//         this.age=age;
//         console.log(this);
// }

// Person.prototype.talk= function(){
//     console.log(`Hi, name is ${this.name}`);
// }

// class

class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}


let p1 = new Person('adam',23);
let p2 = new Person('eve',25);





// let p1 = PersonMaker('adam',25);

// console.log(p1);


// p1.talk();