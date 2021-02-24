import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// ReactDOM.render(<div>React app</div>,document.getElementById("root"));
ReactDOM.render(<App />,document.getElementById("root"));

// //classes ,inheritance and closer compoentnt look
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }
//     speak(){
//         console.log("I am",this.name,"I am",this.age,"years old")
//     }
    
// }
// const animal1=new Animal("Lion",40);
// animal1.speak();
// console.log(animal1);


// //inheritance
// class Lion extends Animal{
//     constructor(name,age,furColor,speed){
//         super(name,age);
//         this.furColor=furColor;
//         this.speed=speed;
//     }
//     roar(){
//         console.log("Rooooor I have ",this.furColor,"fur,and I can run",this.speed,"miler per hour");
//     }
// }
// const lion=new Lion("Mufasa",20,"golder",40);
// lion.speak();
// lion.roar();
// console.log(lion);